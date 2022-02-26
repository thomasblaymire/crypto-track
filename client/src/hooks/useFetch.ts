import { useState, useEffect, useCallback } from 'react';

export interface FetchArguments {
  initialUrl: string;
  initialParams?: RequestInit;
  initialHeaders?: any;
  options?: RequestOptions;
  revalidate: boolean;
  interval?: number;
  skip?: boolean;
}

export interface FetchResult {
  data: any;
  isError: boolean;
  isLoading: boolean;
  errorMessage: string;
  updateHeaders: any;
  updateUrl: any;
  updateParams: any;
  isInitialLoad: number;
  revalidate: () => void;
}

export interface RequestResponse<T = string> {
  body?: { [key: string]: string };
  status?: number;
  statusText?: string;
  text?: string;
  json?: T;
  headers?: RequestResponseHeaders;
  name?: string;
  message?: string;
}

interface RequestResponseHeaders {
  [key: string]: string;
}

interface RequestOptions {
  timeout?: number;
  isJSON?: boolean;
  withResponseHeaders?: ReadonlyArray<string>;
  isPreventCheck?: boolean;
  secret?: string;
}

export const useFetch = <T>({
  initialUrl,
  initialParams = {},
  revalidate,
  interval,
  initialHeaders,
  skip = false,
}: FetchArguments): FetchResult => {
  const [url, updateUrl] = useState(initialUrl);
  const [params, updateParams] = useState(initialParams);
  const [headers, updateHeaders] = useState(initialHeaders);
  const [data, setData] = useState<Readonly<RequestResponse<T>> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(0);
  const [isError, setisError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [revalidateKey, setRevalidateKey] = useState('');

  const queryString = Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');

  const apiRequest = useCallback(async () => {
    if (skip) return;
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${queryString}`, headers);
      const result = await response.json();
      setIsInitialLoad(isInitialLoad + 1);
      if (response.ok) {
        setData(result);
      } else {
        setisError(true);
        setErrorMessage(result);
      }
    } catch (err: any) {
      setisError(true);
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [url, params]);

  useEffect(() => {
    const revalidateInterval = setInterval(() => {
      if (revalidate) {
        setRevalidateKey(Math.random().toString());
      }
    }, (interval ? interval : 3) * 1000);
    return () => clearInterval(revalidateInterval);
  }, [interval, revalidate]);

  useEffect(() => {
    apiRequest();
  }, [fetch, revalidateKey]);

  return {
    data,
    isLoading,
    isError,
    errorMessage,
    updateUrl,
    updateHeaders,
    updateParams,
    isInitialLoad,
    revalidate: apiRequest,
  };
};
export default useFetch;

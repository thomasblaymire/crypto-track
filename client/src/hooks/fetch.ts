import { useState, useEffect } from 'react';

export interface FetchArguments {
  initialUrl: string;
  initialParams?: RequestInit;
  initialHeaders?: any;
  options?: RequestOptions;
  skip?: boolean;
}

export interface FetchResult<T> {
  data: Readonly<RequestResponse<T>> | null;
  hasError: boolean;
  isLoading: boolean;
  errorMessage: string;
  updateHeaders: any;
  updateUrl: any;
  updateParams: any;
  refetch: () => void;
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
  initialHeaders,
  skip = false,
}: FetchArguments): FetchResult<T> => {
  const [url, updateUrl] = useState(initialUrl);
  const [params, updateParams] = useState(initialParams);
  const [headers, updateHeaders] = useState(initialHeaders);
  const [data, setData] = useState<Readonly<RequestResponse<T>> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [refetchIndex, setRefetchIndex] = useState(0);

  const queryString = Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');

  const refetch = () =>
    setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1);


  useEffect(() => {
    const fetchData = async () => {
      if (skip) return;
      setIsLoading(true);
      try {
        const response = await fetch(`${url}${queryString}`, headers);
        const result = await response.json();
        if (response.ok) {
          setData(result);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
      } catch (err: any) {
        setHasError(true);
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, params, refetchIndex]);

  return {
    data,
    isLoading,
    hasError,
    errorMessage,
    updateUrl,
    updateHeaders,
    updateParams,
    refetch,
  };
};
export default useFetch;

import { useState, useEffect } from 'react';

export interface FetchArguments {
  url: string;
  params?: RequestInit;
  options?: RequestOptions;
}

export interface FetchResult<T> {
  data: Readonly<RequestResponse<T>> | null;
  error: boolean;
  loading: boolean;
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
  url,
  params = {},
}: FetchArguments): FetchResult<T> => {
  const [data, setData] = useState<Readonly<RequestResponse<T>> | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () =>
    setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1);

  const fetchData = async () => {
    if (!url) return;
    try {
      setLoading(true);
      const response: any = await fetch(url, params);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, refetchIndex]);

  return {
    data,
    error,
    loading,
    refetch,
  };
};

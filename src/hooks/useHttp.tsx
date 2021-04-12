/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';

type UseHttp = {
  url: RequestInfo;
  method?: RequestInit['method'];
  body?: RequestInit['body'];
  headers?: {[key: string]: string};
}

export function useHttp<T>({ url, method = 'GET', body = null, headers = {} }: UseHttp): {
    response: T | null;
    error: Error | null; 
    loading: boolean;
  } {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  if (body) {
    body = JSON.stringify(body);
    headers['Content-Type'] = 'application/ld+json';
  }
  
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const res = await fetch(url, { method, body, headers });
        const data = await res.json();
        setResponse(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    response,
    error,
    loading,
  };
}
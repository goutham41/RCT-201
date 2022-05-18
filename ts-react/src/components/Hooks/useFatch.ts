import React,{useState,useEffect} from "react";
import axios, { AxiosResponse } from "axios";

export function useFetch<T>(url:string,params: Record<string,unknown>) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
   axios.get(url, {
          params: {
          ...params
          },
        })
        .then(({ data }) => {
          setData(data.items);
           setLoading(false);
        }).catch(() => {
         setError(true);
         setLoading(false);
       });
  }, [params.q]);

  return {
    loading,
    data,
    error,
  };
}

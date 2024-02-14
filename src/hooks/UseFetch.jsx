import { useEffect, useState } from "react";
import { FetchDatafromapi } from "../utils/Api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const mountEffect = async () => {
    try {
      setLoading("loading...");
      setData(null);
      setError(null);
      const result = await FetchDatafromapi(url);
      setData(result);
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    mountEffect();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;

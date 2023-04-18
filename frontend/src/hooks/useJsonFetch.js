import { useState, useEffect } from "react";

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await fetch(url, opts);

        if (!response.ok) throw new Error(response.statusText);

        const json = await response.json();

        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return [data, loading, error];
};

export default useJsonFetch;

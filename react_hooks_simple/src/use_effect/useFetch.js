import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isLoading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, isLoading: true }));
    fetch(url)
      .then((x) => x.text()) //x.json()
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);
  return state;
};

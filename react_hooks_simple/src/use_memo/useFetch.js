import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isLoading: true });

  const isCurrent = useRef(true);
  useEffect(() => {
    return () => {
      //called when th component going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, isLoading: true }));
    fetch(url)
      .then((x) => x.text()) //x.json()
      .then((y) => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: y, loading: false });
          }
        }, 2000);
      });
  }, [url, setState]);
  return state;
};

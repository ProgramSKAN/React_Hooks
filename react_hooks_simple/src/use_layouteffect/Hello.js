import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  const renders = useRef(0); //update of initial value don't cause any rerender
  //the value of useRef only resets when the component is unmounted
  console.log(`Hello renders ${renders.current++} times`);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, isLoading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  /*
  const divRef = useRef();
  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [data]);
  const [rect, setRect] = useState({});

  OR*/
  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      Hello
      <h4>fetch Data</h4>
      <span>count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{isLoading ? "loading..." : data}</div>
      </div>
      <br />
      <div>getBoundingClientRect() of fetched text</div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
    </div>
  );
};

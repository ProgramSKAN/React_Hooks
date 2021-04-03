import React, { useRef, useState, useEffect } from "react";
import { useFetch } from "./useFetch";

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

  return (
    <div>
      Hello
      <hr />
      <h4>fetch Data</h4>
      <span>count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{isLoading ? "loading..." : data}</div>
    </div>
  );
};

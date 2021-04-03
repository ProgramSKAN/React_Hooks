import React, { useState, useEffect, useCallback } from "react";
import { Hello } from "./Hello";
import { Square } from "./Square";

//UseCallback >to prevent a function from being created on every render
//this is helpful when using React memo function
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const favoriteNumbers = [100, 200, 300, 400];

  // const increment = useCallback(() => {
  //   setCount(count + 1);
  // }, [count, setCount]);//this won't fix rerender problem, as count changes function recreates.so use below

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
      //return 10;  //you can also return values for useCallback but not used often
    },
    [setCount]
  );
  /* the above anomymous function get recreated every time this component renders.
      Also this function won't change on each render.so use useCallback to cache function*/

  //another usage of useCallack
  useEffect(() => {}, [increment]); //increment won't be changing all the time

  return (
    <div>
      <Hello increment={increment} />

      <div>count: {count}</div>

      {favoriteNumbers.map((n) => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default UseCallback;

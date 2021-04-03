import React from "react";
import { useCountRenders } from "./useCountRenders";

//if increment is arrow function in parent class, that will be recreated every time. so this components get rerendered everytime.
//so useCallback for increment function in parent component or keep onClick login here like below
export const Square = React.memo(({ n, increment }) => {
  useCountRenders("Square");
  return <button onClick={() => increment(n)}>{n}</button>;
});

import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
  useCountRenders("Hello");
  return <button onClick={() => increment(1)}>+</button>;
});
//React.memo() > rerender this component only when 'increment' changes.but the problem is 'increment' changing always
//or it rerenders components only if props changes.
//but default react always rerenders this component if the parent is changed.ie.if parent renders this component also rerenders.

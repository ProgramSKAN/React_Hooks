import React, { useEffect, useState } from "react";

const UseEffect_Syntax = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  useEffect(() => {
    console.log("in useEffect");
    return () => {
      console.log("in useEffect CleanUp");
    };
  }, [checkBoxValue]);
  return (
    <div>
      <h1>useEffect</h1>
      open console
      <hr />
      <input
        type="checkbox"
        checked={checkBoxValue}
        onChange={() => setCheckBoxValue(!checkBoxValue)}
      />
    </div>
  );
};

export default UseEffect_Syntax;

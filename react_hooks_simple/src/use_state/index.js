import React, { useState } from "react";
import { useForm } from "./useForm";

function expensiveInitialState() {
  return 10;
}

const UseStateHook = () => {
  //useState(10);
  //useState(()=>10);
  //useState(()=>expensiveInitialState());
  const [count, setCount] = useState(10);
  const [{ count1, count2 }, setCountObj] = useState({
    count1: 100,
    count2: 200,
  });
  const [count3, setCount3] = useState(10);
  const [count4, setCount4] = useState(20);

  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* or */}
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <div>count: {count}</div>
      <hr />
      <button
        onClick={() =>
          setCountObj((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
          }))
        }
      >
        +
      </button>
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>
      <hr />
      <button
        onClick={() => {
          setCount3((c) => c + 1);
          setCount4((c) => c + 1);
        }}
      >
        +
      </button>
      <div>count3: {count3}</div>
      <div>count4: {count4}</div>
      <hr />
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
    </div>
  );
};

export default UseStateHook;

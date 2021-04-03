import React, { useState, useEffect, useRef } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";
import { Hello } from "./Hello";

const UseRefHook = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  useEffect(() => {
    console.log("useEffect > log only if email/password changes");
  }, [values.email, values.password]); //dependency array

  //----------use ref-------------
  const inputRef = useRef();
  const [showHello, setShowHello] = useState(true);

  const hello = useRef(() => console.log("hello")); //can store enay objects in ref.treat it as like class componenet fields,instance variables

  return (
    <div>
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="firstName"
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button
        onClick={() => {
          console.log(inputRef.current.focus());
          hello.current();
        }}
      >
        Focus on Click
      </button>
      <hr />
      <button onClick={() => setShowHello(!showHello)}>
        show hello component toggle
      </button>
      check how many times hello component renders in console
      {showHello && <Hello />}
    </div>
  );
};

export default UseRefHook;

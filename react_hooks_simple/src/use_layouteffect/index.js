import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";
import { Hello } from "./Hello";

const UseLayoutEffect = () => {
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

  const hello = useRef(() => console.log("hello")); //can store enay objects in ref.treat it as like class componenet fields,instance variables

  //------useLayoutEffect---------
  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect()); //dimesion of the input element
  }, []);

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
      <Hello />
    </div>
  );
};

export default UseLayoutEffect;

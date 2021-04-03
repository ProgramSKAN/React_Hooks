import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

const UseEffectHook = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  useEffect(() => {
    console.log("useEffect > log everytime component renders");
  });

  useEffect(() => {
    console.log("useEffect > log only initial component render");
  }, []);

  useEffect(() => {
    console.log("useEffect > log only if email/password changes");
  }, [values.email, values.password]); //dependency array
  //this dependency array does shallow comparision of values.

  useEffect(() => {
    console.log("componentDidMount> log on email change");
    return () => {
      console.log("unmount/cleanUp > log on unmount email change");
    };
  }, [values.email]);

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
    };
    console.log("addEventListener mousemove");
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      console.log("removeEventListener mousemove");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  //const [count, setCount] = useState(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  ); //()=>   --to avoid calling json parse localstorage on every render
  const { data, isLoading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  //persist value of count
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div>
      <input
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
      <hr />
      <h4>fetch Data</h4>
      <span>count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{isLoading ? "loading..." : data}</div>
    </div>
  );
};

export default UseEffectHook;

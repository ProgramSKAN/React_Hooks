import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "./../use_effect/useFetch";
function computeLongestWord(arr) {
  if (!arr) {
    return [];
  }
  console.log("computing longest word");
  let longestWord = "";
  //JSON.parse(data).forEach((obj) => {//accessing data directly here cause problems with 'closures'. so pass parameter
  JSON.parse(arr).forEach((obj) => {
    obj.body.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
  });
  return longestWord;
}
//OR
// const longestWord = ['some', 'words'].reduce((biggest, curr) => {
//   return curr.length > biggest.length ? curr : biggest
// }

//useMemo >use it when you want to optimize computed values

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch("https://jsonplaceholder.typicode.com/comments");

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  /*//KEEP COMPUTE FUNCTION OUTSIDE if the function has no dependency OTHERWISE USE USECALLBACK 
  const computeLongestWord1=useCallback((arr)=> {
    if (!arr) {
      return [];
    }
    console.log("computing longest word");
    let longestWord = "";
    JSON.parse(arr).forEach((obj) => {
      obj.body.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });
    return longestWord;
  },[]);
  const longestWord1 = useMemo(() => computeLongestWord(data), [computeLongestWord,data]);
*/

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>count: {count}</div>
      {/* <div>
        longestWord computed on every render: {computeLongestWord(data)}
      </div> */}
      <div>longestWord computed on once with useMemo: {longestWord}</div>
    </div>
  );
};

export default UseMemo;

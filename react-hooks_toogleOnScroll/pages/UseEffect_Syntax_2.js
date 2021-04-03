import React, { useEffect, useState } from "react";

const UseEffect_Syntax_2 = () => {
  const random_boolean = Math.random() >= 0.5;
  /*ERROR: dont uses hooks in conditional/nested.use only at TOP LEVEL

  if(random_boolean===true){
    const [isLoading,setIsLoading]=useState(true);
  }else{
    const [isLoading,setIsLoading]=useState(false);
  }
  */
  //solution
  const [isLoading, setIsLoading] = useState(random_boolean === true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return isLoading ? (
    <div>Loading....</div>
  ) : (
    <input placeholder="Enter text" />
  );
};

export default UseEffect_Syntax_2;

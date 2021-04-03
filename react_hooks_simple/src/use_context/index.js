import React, { useState, useMemo } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { UserContext } from "./UserContext";

const UseContext = (props) => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div>
      <ul>
        <li>
          <Link to={`${props.match.url}/home`}>Home</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/about`}>About</Link>
        </li>
      </ul>

      {/* <UserContext.Provider value={{ value, setValue }}> */}
      <UserContext.Provider value={providerValue}>
        <Route path={`${props.match.path}/home`} component={Home} exact />
        <Route path={`${props.match.path}/about`} component={About} />
      </UserContext.Provider>
    </div>
  );
};

export default UseContext;

import React from "react";
import UseStateHook from "./use_state";
import { Link, Route, Switch } from "react-router-dom";
import UseEffectHook from "./use_effect/index";
import UseRefHook from "./use_ref/index";
import UseLayoutEffect from "./use_layouteffect";
import UseCallback from "./use_callback/index";
import UseMemo from "./use_memo/index";
import UseReducer from "./use_reducer";
import UseContext from "./use_context/index";

export const App = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#eee" }}>
        <Link to="/">useState</Link> |<Link to="/useeffect">useEffect</Link>|
        <Link to="/useref">useRef</Link> |
        <Link to="/uselayouteffect">useLayoutEffect</Link> |
        <Link to="/usecallback">useCallback</Link> |
        <Link to="/usememo">useMemo</Link> |
        <Link to="/usereducer">useReducer</Link> |
        <Link to="/usecontext">useContext</Link> |
      </div>
      <Switch>
        <Route exact path="/" component={UseStateHook} />
        <Route path="/useeffect" component={UseEffectHook} />
        <Route path="/useref" component={UseRefHook} />
        <Route path="/uselayouteffect" component={UseLayoutEffect} />
        <Route path="/usecallback" component={UseCallback} />
        <Route path="/usememo" component={UseMemo} />
        <Route path="/usereducer" component={UseReducer} />
        <Route path="/usecontext" component={UseContext} />
      </Switch>
    </div>
  );
};

1. the example website can be built with just "useState,useEffect,useRef".

2. problem1: with just 3 hooks, each time when you click favorite icon, entire tist gets rerendered.
3. to improve performance,Global configuration support,cleaner code. use rest of hooks
4. ContextAPI makes it trivial to access context in any of the functional component.avoids prop drilling.
5. useState is built with useReducer under it.useState==UseReducer with only default action type.
6. Reducer is a function (previousState,action)=>newState
7. USECALLBACK memoize/caches a function
8. USEMEMO memoize/caches a value
9. Memoization is an optimization technique for returning cached results
10. usage: eg. in the speakers app if the favorite icon is clicked on one speaker, the entire speakers list rerenders.so this can be memoized.
11. Observations In speakersList App:
    useContext >> gave the ability to pass data, config data in app example, down the component tree without prop drilling.
    useReducer >> gave a nice way to organize state management.
    useCallback >> gave a nice performance gain by not having all a speaker detail pages have to re‑render on every button click of any speaker. useMemo >> to cache some data on the client, saving some compute time on the app, and hopefully making it more responsive in the process.

# Functional vs Class Components

1. useState() -> state={},this.setState({})
2. useRef() -> React.CreateRef()
3. useEffect(()=>{mounting... return{dismounting...}},[]) -> componentDidMount(){'mounting...'},componentDidUpdate(prevState,prevProps){'dependency check'},componentWillUnmount(){'dismounting...'}
4. if th code mutates the DOM in componentDidMount and/or componentDidUpdate, then try useLayoutEffect() instead of useEffect()

useReducer often used to update multiple state values in one call

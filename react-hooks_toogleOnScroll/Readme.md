npm init -y >npm as package manage
npm install react react-dom next
npm run dev

1. name of the page in "pages" directory acts a route to that page.
2. if the name of the page is "index.js" then > Home/Root Page of the app
3. anything in the "public" folder available to base url of the website.

# React Hooks

1. UseState
2. UseRef
3. UseEffect
4. UseContext
5. UseReducer
6. useCallback
7. useMemo

with only first 3 hooks in the app, when you click favorite on one image , all of then get rerendered.causes performance issues.

# React Hooks Rules

1. Only Call Hooks at Top level (not nested)
2. Only Call Hooks from React functional components

## UseRef

Primary used to allow access directly to an element in the DOM.

## UseEffect

useEffect is a way to add 'Side Effects' to functional components(before react hooks its almost never done).often we talk side effects to functional component is a bad thing.In general functional components is free of side effects(calling a function with same parameters over and over again, exact same results are returned) >Pure component.

React UseEffect causes side effects to react function component. specifically after the component is first rendered a function associated with useeffect is executed and when the same functional component unmounts a different function associated with useeffect is executed.

1. useEffect without second parameter means component called on every update.

###### Class Component | Function Component

componentDidMount(){...} | useEffect(()=>{...}))
componentDidUpdate(){...} | useEffect(()=>{...})) with dependents
componentWillUnmount(){...} | useEffect(()=>{...return()=>{...}}))

componentDidMount(){...} | useLayOutEffect()
componentDidUnmount(){...} | useLayOutEffect()

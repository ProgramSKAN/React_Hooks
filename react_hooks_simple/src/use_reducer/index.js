import React, { useState, useReducer } from "react";
//USEREDUCER> used to store state.alternative to useState hook.use it whereever state gets more complex otherwise use useState()

function reducer(state, action) {
  //do not mutate the state inside reducer.eg: state++ mutates the current state.which won't work
  //but immutate state can get complex with nested objects.try immer.js, where "state++" also works unlike here
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD-TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "TOGGLE-TODO":
      return {
        todos: state.todos.map((t, index) =>
          index === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0); //useReducer(reducer,()=>0) initial state could be function
  const [{ todos, todoCount }, todoDispatch] = useReducer(todoReducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState("");

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          todoDispatch({ type: "ADD-TODO", text }); //or payload:text
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <div>TodoCount: {todoCount}</div>
      </form>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => todoDispatch({ type: "TOGGLE-TODO", idx })}
          style={{ textDecoration: t.completed ? "line-through" : "" }}
        >
          {t.text}
        </div>
      ))}
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default UseReducer;

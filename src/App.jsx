import React, { useReducer } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  const initilize = [
    { id: 1, title: "Learn javaScript", completed: false },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Learn Angular", completed: false },
  ];
  function reducer(todoData, { type, payload }) {
    if (type == "DELETE") {
      return todoData.filter((data) => {
        return data.id !== payload.id;
      });
    }

    if (type == "TOGGLE") {
      return todoData.map((data) => {
        if (data.id == payload.id) {
          return { ...data, completed: !data.completed };
        } else {
          return { ...data };
        }
      });
    }

    if (type == "ADD") {
      return [...todoData, payload.newObj];
    }

    return todoData;
  }
  const [todoData, dispatch] = useReducer(reducer, initilize);

  return (
    <div className="app">
      <Form dispatch={dispatch} />
      <Todos todoData={todoData} dispatch={dispatch} />
    </div>
  );
}

export default App;

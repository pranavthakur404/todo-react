import React from "react";
import Todo from "./Todo";

function Todos({ todoData, dispatch }) {
  return (
    <div>
      {todoData.map((data) => {
        return <Todo key={data.id} dispatch={dispatch} {...data} />;
      })}
    </div>
  );
}

export default Todos;

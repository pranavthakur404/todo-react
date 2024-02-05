import React from "react";

function Todo({ id, title, completed, dispatch }) {
  const completeStyle = {
    background: completed ? "green" : "",
  };
  return (
    <div className="todo" style={completeStyle}>
      <p>Id: {id}</p>
      <p>Title : {title}</p>
      <p>complete : {completed ? "True" : "false"}</p>
      <button
        onClick={() => {
          dispatch({
            type: "DELETE",
            payload: { id: id },
          });
        }}
      >
        Delete{" "}
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "TOGGLE",
            payload: { id: id },
          });
        }}
      >
        Toggle Complete
      </button>
    </div>
  );
}

export default Todo;

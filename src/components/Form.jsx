import React, { useState } from "react";

function Form({ dispatch }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      const newObj = {
        id: crypto.randomUUID(),
        title: task,
        completed: false,
      };
      dispatch({
        type: "ADD",
        payload: { newObj: newObj },
      });
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button>Add Task</button>
    </form>
  );
}

export default Form;

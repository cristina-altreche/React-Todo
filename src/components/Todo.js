import React from "react";
import Card from "@material-ui/core/Card";

const Todo = (props) => {
  return (
    <Card className="tasks">
      <div
        onClick={() => props.toggleTask(props.todo.id)}
        className={`todo${props.todo.completed ? " completed" : ""}`}
      >
        <p className="task-todo">{props.todo.task}</p>
      </div>
    </Card>
  );
};

export default Todo;

import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-item mb-4 p-3 d-flex align-items-center">
      {/* <span>{props.id}</span> */}
      <div className="text-left">
        <h4 className="mb-2">
          <strong>{props.title}</strong>
        </h4>
        <p className="mb-0">{props.desc}</p>
      </div>
      <button
        className="btn btn-danger ml-auto"
        onClick={() => props.clickHandler(props.id)}
      >
        <span class="material-icons" style={{ lineHeight: 1.5 }}>
          delete
        </span>
      </button>
    </div>
  );
};

export default TodoItem;

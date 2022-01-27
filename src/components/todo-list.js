import React from "react";
import TodoItem from "./todo-item";

const TodoList = (props) => {
  const deleteContactHandle = (id) => {
    props.getListId(id);
  };

  const renderAllItems = props.renderList.map((oneitme) => {
    return (
      <TodoItem
        key={oneitme.id}
        id={oneitme.id}
        title={oneitme.title}
        desc={oneitme.desc}
        clickHandler={deleteContactHandle}
      />
    );
  });

  return <div className="rendered-list">{renderAllItems}</div>;
};

export default TodoList;

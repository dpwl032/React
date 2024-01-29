import React from "react";
import Buttons from "./Buttons";
import DoneButtons from "./DoneButtons";

const DoLists = ({
  toDoLists,
  items,
  addDoneList,
  removeToDoList,
  ascEventHandler,
}) => {
  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div key={toDoLists.id} className="todo-lists-css">
      <div className="card-list">
        <h2>{items.title}</h2>
        <p>{items.text}</p>
        <p className="date-css">{dateString}</p>
        <div className="buttons">
          <Buttons onClick={() => removeToDoList(items.id)}>Delete</Buttons>
          <DoneButtons onClick={() => addDoneList(items.id)}>Done</DoneButtons>
        </div>
      </div>
    </div>
  );
};

export default DoLists;

import React from "react";
import Buttons from "./Buttons";
import DoneButtons from "./DoneButtons";

const DoneList = ({ doneLists, items, addWorkingList, removeDoneList }) => {
  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div key={doneLists.id} className="todo-lists-css">
      <div className="card-list">
        <h2>{items.title}</h2>
        <p>{items.text}</p>
        <p className="date-css">{dateString}</p>
        <div className="buttons">
          <Buttons onClick={() => removeDoneList(items.id)}>Delete</Buttons>
          <DoneButtons onClick={() => addWorkingList(items.id)}>
            Cancel
          </DoneButtons>
        </div>
      </div>
    </div>
  );
};

export default DoneList;

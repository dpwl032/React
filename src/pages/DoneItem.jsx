import React from "react";
import { useParams } from "react-router-dom";
import Main from "../component/Main";
import { useLocation } from "react-router-dom";

function DoneItem() {
  const params = useParams();
  const { state } = useLocation();
  const todoId = state.items.id;
  const todoTitle = state.items.title;
  const todoText = state.items.text;
  const date = state.items.date;

  return (
    <div>
      제목 : {todoTitle}
      <br />
      내용 : {todoText}
      <br />
      {date}
    </div>
  );
}

export default DoneItem;

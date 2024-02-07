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

  return (
    <div>
      {todoId}
      {todoTitle}
      {todoText}
    </div>
  );
}

export default DoneItem;

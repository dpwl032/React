import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Main from "../component/Main";
import DoLists from "../component/DoLists";

function TodoItem(props) {
  const params = useParams();

  const { state } = useLocation();
  const todoId = state.items.id;
  const todoTitle = state.items.title;
  const todoText = state.items.text;
  console.log(todoId);

  return (
    <div>
      {todoId}
      {todoTitle}
      {todoText}
    </div>
  );
}

export default TodoItem;

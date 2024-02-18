import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailTodo(props) {
  const params = useParams();
  const toDoLists = useSelector((state) => {
    return state.toDoLists; //state도 obj형태기 때문에 .으로 counter로 접근할 수 있다.
  });

  const findData = toDoLists.toDoLists.find(
    (e) => String(e.id) === params.todoId
  );

  return (
    <>
      <h1>상세페이지 입니다</h1>
      {findData.title}
      <br />
      {findData.text}
      <br />
      {findData.deadline}
      <br />
    </>
  );
}

export default DetailTodo;

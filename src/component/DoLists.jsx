import React from "react";
import Buttons from "./Buttons";
import DoneButtons from "./DoneButtons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TodoItem from "../pages/DetailTodo";
import { useDispatch, useSelector } from "react-redux";

const DoLists = ({ items, addDoneList, removeToDoList, ascEventHandler }) => {
  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toDoLists = useSelector((state) => {
    return state.toDoLists; //state도 obj형태기 때문에 .으로 counter로 접근할 수 있다.
  });

  const { id, text, title } = items;

  return (
    <>
      <TodoLists key={toDoLists.id}>
        <CardList>
          <Link
            to={`/${id}`}
            state={{ items: { text, title, id, date: dateString } }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>{title}</h2>{" "}
          </Link>
          <p>{text}</p>
          <StDate>{dateString}</StDate>
          <ButtonCss>
            <Buttons onClick={() => removeToDoList(items.id)}>Delete</Buttons>
            <DoneButtons onClick={() => addDoneList(items.id)}>
              Done
            </DoneButtons>
          </ButtonCss>
        </CardList>
      </TodoLists>
    </>
  );
};

export default DoLists;

const TodoLists = styled.div`
  border: 1px solid rgb(168, 168, 168);
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px gray;
  width: 400px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardList = styled.div`
  width: 80%;
  height: 200px;
`;

const ButtonCss = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;
const StDate = styled.p`
  color: #808080eb;
`;

const StTitle = styled.h2`
  text-decoration: none;
`;

import React from "react";
import Buttons from "./Buttons";
import DoneButtons from "./DoneButtons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DoneList = ({ items, addDoneList, removeToDoList, ascEventHandler }) => {
  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toDoLists = useSelector((state) => {
    return state.toDoLists;
  });

  const { id, text, title } = items;
  return (
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
          <CancelBtn onClick={() => addDoneList(items.id)}>Cancel</CancelBtn>
        </ButtonCss>
      </CardList>
    </TodoLists>
  );
};
//
export default DoneList;

const StDate = styled.p`
  color: #808080eb;
`;

const CardList = styled.div`
  width: 80%;
  height: 200px;
`;

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

const DoneContent = styled.p`
  text-decoration: line-through ${(props) => props.linecolor};
`;

const ButtonCss = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

const CancelBtn = styled.button`
  background-color: rgb(81, 212, 71);
`;

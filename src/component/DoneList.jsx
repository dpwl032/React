import React from "react";
import Buttons from "./Buttons";
import DoneButtons from "./DoneButtons";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  text-decoration: line-through ${(props) => props.lineColor};
`;

const ButtonCss = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

const DoneList = ({ doneLists, items, addWorkingList, removeDoneList }) => {
  const today = new Date(items.deadline);
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { id, text, title } = items;
  return (
    <TodoLists key={doneLists.id}>
      <CardList>
        <Link
          to={`/${id}`}
          state={{ items: { text, title, id, date: dateString } }}
        >
          <h2>{title}</h2>{" "}
        </Link>
        <DoneContent lineColor="yellow">{items.text}</DoneContent>
        <StDate>{dateString}</StDate>
        <ButtonCss>
          <Buttons onClick={() => removeDoneList(items.id)}>Delete</Buttons>
          <DoneButtons onClick={() => addWorkingList(items.id)}>
            Cancel
          </DoneButtons>
        </ButtonCss>
      </CardList>
    </TodoLists>
  );
};
//
export default DoneList;

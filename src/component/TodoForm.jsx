import React from "react";
import styled from "styled-components";

function TodoForm({ newTodoList }) {
  const addTodoListHandler = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const text = e.target.text.value;
    const deadline = e.target.deadline.value;

    if (!deadline || !title || !text) {
      alert("빈 내용없이 입력해주세요!");

      return;
    }

    newTodoList({
      id: crypto.randomUUID(),
      title,
      text,
      deadline,
      idDone: false,
    });
    e.target.reset();
  };

  return (
    <form className="input-contents" onSubmit={addTodoListHandler}>
      &nbsp; 제목&nbsp;
      <StFormInput type="text" name="title" />
      &nbsp; 내용&nbsp;
      <StFormInput type="text" name="text" />
      &nbsp;{" "}
      <StFormInput
        type="date"
        name="deadline"
        min="2024-01-01"
        max="2025-01-01"
      />
      <AddBtn type="submit">추가하기</AddBtn>
    </form>
  );
}

export default TodoForm;

const AddBtn = styled.button`
  border-radius: 10px;
  height: 35px;
  width: 100px;
  border: 3px solid hsla(190, 64%, 39%, 0.821);
  background-color: hsla(190, 64%, 39%, 0.821);
  margin: 5px;
  color: white;
`;

const StFormInput = styled.input`
  border-radius: 10px;
  height: 30px;
  width: 128px;
  border: none;
  /* margin-left: 10px; */
`;

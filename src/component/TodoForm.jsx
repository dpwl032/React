import React from "react";

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
      <input type="text" name="title" />
      &nbsp; 내용&nbsp;
      <input type="text" name="text" />
      &nbsp;{" "}
      <input type="date" name="deadline" min="2024-01-01" max="2025-01-01" />
      <button className="add-button" type="submit">
        추가하기
      </button>
    </form>
  );
}

export default TodoForm;

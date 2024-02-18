import "../App.css";
import Header from "../component/Header";
import { useState } from "react";
import TodoForm from "../component/TodoForm";
import DoLists from "../component/DoLists";
import DoneList from "../component/DoneList";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDoList,
  deleteToDoList,
  changeToDoList,
  sortToDoList,
  sortDoneList,
} from "../redux/modules/Todos";

function Main() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  //redux
  const dispatch = useDispatch();

  //toDoLists 가져오기
  const toDoLists = useSelector((state) => {
    return state.toDoLists;
  });

  //새 todo 추가하기
  const newTodoList = (newTodoList) => {
    dispatch(addToDoList(newTodoList));
  };

  //List item 삭제하기
  const removeToDoList = (id) => {
    dispatch(deleteToDoList(id));
  };

  //todo ↔ done
  const addDoneList = (id) => {
    dispatch(changeToDoList(id));
  };

  //todoList 정렬

  const doListSortHandler = (sort) => {
    dispatch(sortToDoList(sort));
  };

  const doneListSortHandler = (sort) => {
    dispatch(sortDoneList(sort));
  };

  return (
    <>
      <GlobalStyle />
      <StContenWrap>
        <div className="contents">
          <Header />
          <InputWrap>
            <TodoForm newTodoList={newTodoList} />
          </InputWrap>

          <section>
            <StMenu>Working..🔥</StMenu>
            <select
              onChange={(e) => doListSortHandler(e.target.value)}
              DoLists={DoLists}
            >
              <option name="sortOrder" value="asc">
                오름차순{" "}
              </option>
              <option name="sortOrder" value="desc">
                {" "}
                내림차순{" "}
              </option>
            </select>
          </section>
          <WrapWorking>
            {toDoLists.toDoLists.map((items) => {
              return !items.isDone ? (
                <DoLists
                  key={items.id}
                  items={items}
                  addDoneList={addDoneList}
                  removeToDoList={removeToDoList}
                  doListSortHandler={doListSortHandler}
                />
              ) : null;
            })}
          </WrapWorking>
          <section>
            <StMenu>Done..🎉</StMenu>
            <select
              onChange={(e) => doListSortHandler(e.target.value)}
              DoLists={DoLists}
            >
              <option name="sortOrder" value="asc" checked>
                오름차순{" "}
              </option>
              <option name="sortOrder" value="desc">
                {" "}
                내림차순{" "}
              </option>
            </select>
          </section>
          <WrapWorking>
            {toDoLists.toDoLists.map((items) => {
              return items.isDone ? (
                <DoneList
                  key={items.id}
                  items={items}
                  addDoneList={addDoneList}
                  removeToDoList={removeToDoList}
                  doneListSortHandler={doneListSortHandler}
                />
              ) : null;
            })}
          </WrapWorking>
        </div>
      </StContenWrap>
    </>
  );
}

export default Main;
const StContenWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StMenu = styled.h2`
  background-color: rgb(179, 226, 226);
`;

const InputWrap = styled.nav`
  max-width: 1200px;
  min-width: 800px;
  background-color: rgba(96, 91, 91, 0.074);
  border-radius: 10px;
  height: 70px;
  display: flex;
  align-items: center;
`;

const WrapWorking = styled.div`
  /* height: 1200px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 1 rem;
`;

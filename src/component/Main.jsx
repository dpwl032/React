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
} from "../redux/modules/Todos";

function Main() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");

  const dispatch = useDispatch();

  //todoList 목록 가져오기
  const toDoLists = useSelector((state) => {
    return state.toDoLists; //state도 obj형태기 때문에 .으로 counter로 접근할 수 있다.
  });
  //새 todo 추가하기
  const newTodoList = (newTodoList) => {
    dispatch(addToDoList(newTodoList));
  };

  //기존 todo item 삭제하기
  const removeToDoList = (id) => {
    dispatch(deleteToDoList(id));
  };

  //todoList ↔ doneList 변경하기
  const addDoneList = (id) => {
    dispatch(changeToDoList(id));
  };

  //todoList 정렬
  const doListSortHandler = (e) => {
    const newTodoList = [...toDoLists].sort((a, b) => {
      if (e === "asc") {
        return new Date(a.deadline) - new Date(b.deadline);
      }
      return new Date(b.deadline) - new Date(a.deadline);
    });
    // setTodoLists(newTodoList);
    dispatch(sortToDoList(newTodoList));
  };

  // ////////////////////////////////////////////////////
  // //doneList배열 및 state
  // // const [doneLists, setDoneLists] = useState([
  // //   {
  // //     id: 4,
  // //     title: "JS 강의 듣기",
  // //     text: "JS 강의 완강하기",
  // //     deadline: "2024-01-18",
  // //     isDone: true,
  // //   },
  // //   {
  // //     id: 5,
  // //     title: "개인 과제 제출",
  // //     text: "리액트 개인과제",
  // //     deadline: "2024-01-12",
  // //     isDone: true,
  // //   },
  // // ]);

  // //삭제하기(done)
  // const removeDoneList = (id) => {
  //   const newDoneList = doneLists.filter((items) => items.id !== id);
  //   // setDoneLists(newDoneList);
  //   dispatch(deleteDoneList(newDoneList));
  // };

  // //완료버튼시 working->Done

  // //취소버튼시 Done-> working
  // const addWorkingList = (id) => {
  //   // submit 이벤트가 일어나면 새로고침방지. submit 관련 태그 고유의 동작 금지
  //   const cancelDone = doneLists.filter((items) => items.id === id);
  //   const resultList = { ...cancelDone[0] };
  //   resultList.isDone = true;

  //   // setTodoLists([...toDoLists, resultList]);
  //   dispatch(changeToDoList([...toDoLists, resultList]));

  //   const chandDoneList = doneLists.filter((items) => items.id !== id);
  //   // setDoneLists(chandDoneList);
  //   dispatch(deleteToDoList(chandDoneList));
  // };

  // //doneList 정렬
  // const doneListSortHandler = (e) => {
  //   const newDoneList = [...doneLists].sort((a, b) => {
  //     if (e === "asc") {
  //       return new Date(a.deadline) - new Date(b.deadline);
  //     }
  //     return new Date(b.deadline) - new Date(a.deadline);
  //   });

  //   dispatch(sortDoneList(newDoneList));
  // };

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
              return (
                <DoLists
                  key={items.id}
                  items={items}
                  addDoneList={addDoneList}
                  removeToDoList={removeToDoList}
                  doListSortHandler={doListSortHandler}
                />
              );
            })}
          </WrapWorking>
          <section>
            <StMenu>Done..🎉</StMenu>
            <select
              onChange={(e) => doListSortHandler(e.target.value)}
              DoneList={DoneList}
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
          <WrapWorking></WrapWorking>
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

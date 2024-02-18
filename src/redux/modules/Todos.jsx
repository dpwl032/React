const ADD_TODOLIST = "letters/ADD_TODOLIST";
const DELETE_TODOLIST = "letters/DELETE_TODOLIST";
const EDIT_TODOLIST = "letters/EDIT_TODOLIST";
const CHANGE_TODOLIST = "letters/CHANGE_TODOLIST";
const SORT_TODOLIST = "letters/SORT_TODOLIST";
export const addToDoList = (payload) => {
  return { type: ADD_TODOLIST, payload };
};

export const deleteToDoList = (payload) => {
  return { type: DELETE_TODOLIST, payload };
};

export const editToDoList = (payload) => {
  return { type: EDIT_TODOLIST, payload };
};

export const changeToDoList = (payload) => {
  return { type: CHANGE_TODOLIST, payload };
};
export const sortToDoList = (payload) => {
  return { type: SORT_TODOLIST, payload };
};
const initialState = {
  toDoLists: [
    {
      id: 1,
      title: "리액트 입문",
      text: "입문 강의 복습하기",
      deadline: "2024-01-26",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 숙련",
      text: "숙련 강의 듣기",
      deadline: "2024-01-27",
      isDone: false,
    },
    {
      id: 3,
      title: "JS 복습",
      text: "JS 강의 복습하기",
      deadline: "2024-01-23",
      isDone: false,
    },
  ],
};

const toDoLists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      const newTodoList = action.payload;
      return {
        ...state,
        toDoLists: [newTodoList, ...state.toDoLists],
      };
    default:
      return state;
  }
};

export default toDoLists;

//action value
const ADD_TODOLIST = "letters/ADD_TODOLIST";
const DELETE_TODOLIST = "letters/DELETE_TODOLIST";
const CHANGE_TODOLIST = "letters/CHANGE_TODOLIST";
const SORT_TODOLIST = "letters/SORT_TODOLIST";
const SORT_DONELIST = "letters/SORT_DONELIST";

//action creator
export const addToDoList = (payload) => {
  return { type: ADD_TODOLIST, payload };
};

export const deleteToDoList = (payload) => {
  return { type: DELETE_TODOLIST, payload };
};

export const changeToDoList = (payload) => {
  return { type: CHANGE_TODOLIST, payload };
};
export const sortToDoList = (payload) => {
  return { type: SORT_TODOLIST, payload };
};

export const sortDoneList = (payload) => {
  return { type: SORT_DONELIST, payload };
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
    {
      id: 4,
      title: "JS 강의 듣기",
      text: "JS 강의 완강하기",
      deadline: "2024-01-18",
      isDone: true,
    },
    {
      id: 5,
      title: "개인 과제 제출",
      text: "리액트 개인과제",
      deadline: "2024-01-12",
      isDone: true,
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
    case DELETE_TODOLIST:
      const deleteId = action.payload;
      const deleteTodoList = state.toDoLists.filter(
        (items) => items.id !== deleteId
      );
      return { ...state, toDoLists: deleteTodoList };

    case CHANGE_TODOLIST:
      const changeId = action.payload;
      const changeList = state.toDoLists.map((item) => {
        if (item.id == changeId) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return { ...state, toDoLists: changeList };

    case SORT_TODOLIST:
      const toSort = action.payload;

      const sortTodoList = [...state.toDoLists].sort((a, b) => {
        if (toSort === "asc") {
          return new Date(a.deadline) - new Date(b.deadline);
        }
        return new Date(b.deadline) - new Date(a.deadline);
      });
      return { ...state, toDoLists: sortTodoList };

    case SORT_DONELIST:
      const doneSort = action.payload;

      const sortDoneList = [...state.toDoLists].sort((a, b) => {
        if (doneSort === "asc") {
          return new Date(a.deadline) - new Date(b.deadline);
        }
        return new Date(b.deadline) - new Date(a.deadline);
      });
      return { ...state, toDoLists: sortDoneList };

    default:
      return state;
  }
};

export default toDoLists;

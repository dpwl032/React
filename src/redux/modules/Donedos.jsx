const ADD_DONELIST = "letters/ADD_DONELIST";
const DELETE_DONELIST = "letters/DELETE_DONELIST";
const EDIT_DONELIST = "letters/EDIT_DONELIST";
const CHANGE_DONELIST = "letters/CHANGE_DONELIST";
const SORT_DONELIST = "letters/SORT_DONELIST";
export const addDoneList = (payload) => {
  return { type: ADD_DONELIST, payload };
};

export const deleteDoneList = (payload) => {
  return { type: DELETE_DONELIST, payload };
};

export const editDoneList = (payload) => {
  return { type: EDIT_DONELIST, payload };
};

export const changeDoneList = (payload) => {
  return { type: CHANGE_DONELIST, payload };
};
export const sortDoneList = (payload) => {
  return { type: SORT_DONELIST, payload };
};
const initialState = {
  doneLists: [
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

const doneLists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DONELIST:
      return;
    default:
      return state;
  }
};

export default doneLists;

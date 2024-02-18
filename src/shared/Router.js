import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../component/Main";
import DetailTodo from "../pages/DetailTodo";
import DoneItem from "../pages/DoneItem";
import { useState } from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:todoId" element={<DetailTodo />} />
        <Route path="/:doneId" element={<DoneItem />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

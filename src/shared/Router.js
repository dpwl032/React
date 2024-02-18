import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../component/Main";
import DetailTodo from "../pages/DetailTodo";
import { useState } from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:todoId" element={<DetailTodo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

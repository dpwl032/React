import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Main from "../component/Main";
import DoLists from "../component/DoLists";
import styled from "styled-components";

function TodoItem(props) {
  const params = useParams();
  console.log(props);
  return <></>;
}

export default TodoItem;

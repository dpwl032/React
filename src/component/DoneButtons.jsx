import React from "react";
import styled from "styled-components";

const StRestBtn = styled.button`
  background-color: rgb(65, 199, 236);
`;

function DoneButtons(props) {
  //className="rest-button"
  return <StRestBtn onClick={props.onClick}>{props.children}</StRestBtn>;
}

export default DoneButtons;

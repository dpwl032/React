import React from "react";
import styled from "styled-components";

const StCancelBtn = styled.button`
  background-color: rgb(236, 96, 65);
`;

function Buttons(props) {
  //className="cancel-button"
  return <StCancelBtn onClick={props.onClick}>{props.children}</StCancelBtn>;
}

export default Buttons;

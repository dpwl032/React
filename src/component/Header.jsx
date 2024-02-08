import React from "react";
import styled from "styled-components";

const StHeader = styled.header`
  border: 1px solid rgba(77, 72, 72, 0.332);
  border-radius: 1px;
  display: flex;
  justify-content: space-between;
`;
function Header(props) {
  return (
    <>
      <StHeader>
        <h3>My Todo List</h3>
        <h3>React</h3>
      </StHeader>
      {props.children}
    </>
  );
}

export default Header;

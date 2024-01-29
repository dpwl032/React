import React from "react";

function DoneButtons(props) {
  //className="rest-button"
  return (
    <button className="rest-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default DoneButtons;

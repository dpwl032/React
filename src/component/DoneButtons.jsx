import React from 'react'

function DoneButtons(props) {
    return<button className="restButton" onClick={props.onClick}>{props.children}</button>;
}

export default DoneButtons;
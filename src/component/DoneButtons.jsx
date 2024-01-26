import React from 'react'

function DoneButtons(props) {
    return<button className="rest-button" onClick={props.onClick}>{props.children}</button>;
}

export default DoneButtons;
import React from 'react'

function Buttons(props) {


    return <button className="cancelButton" onClick={props.onClick}>{props.children}</button>;
    
}

export default Buttons;
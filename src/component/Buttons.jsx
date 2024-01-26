import React from 'react'

function Buttons(props) {


    return <button className="cancel-button" onClick={props.onClick}>{props.children}</button>;
    
}

export default Buttons;
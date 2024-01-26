import React from 'react'

function Header(props) {
    return (
    <>
    <header className='todo-header'>
        <h3>My Todo List</h3>
        <h3>React</h3>
    </header>
        {props.children}
    </>
    )}

export default Header
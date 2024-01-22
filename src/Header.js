import React from 'react'

function Header(props) {
    return (
    <>
    <header style={
        {
            border : "1px solid gray",
            height:"30px",
        }}>
            <span >My todo List</span>
            <span style={{
                // textAlign:"right"
            }}>React</span>
            </header>
{props.children}
</>
  )
}

export default Header
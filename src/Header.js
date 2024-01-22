import React from 'react'

function Header(props) {
    return (
    <>
    <header style={
        {
            border : "1px solid rgba(77, 72, 72, 0.332)",
            borderRadius : "1px",
            height:"30px",
        }}>
            <div style={{
                display:"flex",
                marginLeft : "20px",
            }}>
           <div style={{
            width : "50%",
           }}>My Todo List</div>
           <div style={{
              width : "50%",
            textAlign: "right",
            marginRight : "20px",
           }}>React</div>
           </div>
            </header>
{props.children}
</>
  )
}

export default Header
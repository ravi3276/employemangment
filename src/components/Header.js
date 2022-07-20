import React from 'react'

function Header({setIsAddItem}) {
  return (
    <div style={{marginLeft:20}}>
        <h1>Employement management system</h1>
        <button onClick={()=>setIsAddItem(true)}>add employee</button>
    </div>
  ) 
}

export default Header
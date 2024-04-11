import React from 'react'

function Header(props) {
  return (
    <div className="relative bg-gradient-to-br from-black to-transparent">
      <div>
        <h1>{props.title}</h1>
        {props.children}
       </div>
    </div>
  )
}

export default Header

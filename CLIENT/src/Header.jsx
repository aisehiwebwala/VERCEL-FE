import React from 'react'
import {Link, Links} from "react-router-dom"
function Header() {
  return (
    <div className='header' style={{display:"flex",gap:"10px",borderBottom:"2px solid black",padding:"5px"}} >
        <Link to={"/"} > Home </Link>
        <Link to={"/about"} > About </Link>
        <Link to={"/ops"} > Operations </Link>
    </div>
  )
}

export default Header
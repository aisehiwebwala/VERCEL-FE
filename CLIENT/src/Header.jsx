import React from 'react'
import {Link, Links} from "react-router-dom"
function Header() {
  return (
    <div className='header' style={{display:"flex",gap:"10px",borderBottom:"2px solid black",padding:"5px"}} >
        ENV : {import.meta.env.VITE_ENV}
        CORS : {import.meta.env.CORS_ENABLED}
        <Link to={"/"} > Home </Link>
        <Link to={"/about"} > About </Link>
        <Link to={"/ops"} > Operations </Link>
    </div>
  )
}

export default Header
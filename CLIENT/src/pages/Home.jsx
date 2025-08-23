import React, { useState } from 'react'
import {getAuthFetch} from "../utils"
function Home() {

const get_list = async()=>{
  try {
    const response = await (await getAuthFetch("/list")).json();
    setLists(response)
  } catch (error) {
    console.log(error)
  }
}

  const [getLists,setLists] = useState([])

  return (
    <div>
      <h1>Lists</h1>
      <button onClick={get_list} >Fetch List</button>
      <ul>
        {getLists.map((val,idx)=>{
          return <li key={"lists"+idx} > {val} </li>
        })}
      </ul>
    </div>
  )
}

export default Home
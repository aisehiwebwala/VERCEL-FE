import React from 'react'
import {getAuthFetch,postAuthFetch} from "../utils"

function Operations() {

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const form_data = new FormData(e.target)
      const response = await postAuthFetch("/list",{"name":form_data.get("name")});
      console.log(await response.text())
    } catch (error) {
      console.log({"error":error})
    }
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}} style={{padding:"10px",margin:"10px", border:"1px solid black",width:"fit-content"}} >
        <input required type="text" placeholder='Enter Name' name='name' />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Operations
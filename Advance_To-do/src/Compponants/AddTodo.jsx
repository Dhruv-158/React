/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function AddTodo(props) {

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [msg,setMsg] = useState("")

  const submit = (e) => {
    e.preventDefault()

    if (!title || !desc)
    {
      let a = <h4 className='text-danger'>please Enter a data in this input fields</h4>
      setMsg(a)
      setTimeout(() => {
        setMsg("");
      }, 1500);
    }
    else{
      props.addTodo(title,desc);
    }
    setTitle("");
    setDesc("");
  }

  return (
    <>
      <div className=' container-lg m-5' onSubmit={submit}>
        <h3>Add a Todo</h3>
        <form>
          <div className="mb-3">
            {msg}
            <label htmlFor='title' className="form-label">Title : </label>
            <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value)} className="form-control  w-75 " id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor='desc' className="form-label">Desc :</label>
            <input type="text" value={desc || ""} onChange={(e) => setDesc(e.target.value)} className="form-control w-75" id="exampleInputPassword1" />
          </div>
          <button type='submit' className="btn btn-primary btn-sm">Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddTodo;

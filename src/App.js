import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = () => {
    fetch('/getname/'+name).then(
        res => res.json()).then(
            data => {
                if (data.success){
                    setLastName(data.name)
                    setMessage("200 Success")
                }
                else {
                    setLastName(data.name)
                    setMessage("404 No such user")
                }
            }
        )
  }

  return (
    <div>
        <h1>Insert Last Name</h1>
        <textarea onChange={(e) => setName(e.target.value)}></textarea>
        <button onClick={onSubmit}>Submit</button>
        <h2>Last name: {lastName}</h2>
        <h2>Message from server: {message}</h2>
    </div>
  )
}

export default App
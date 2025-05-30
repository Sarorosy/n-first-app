import { useState } from 'react'
import './App.css'

function App() {
  const [users , setUsers] = useState([])

  const fetchusers = async() => {
    try{
      const response = await fetch("https://dummyjson.com/users");
      // console.log(response)
      const data = await response.json() 
      console.log(data) 
      setUsers(data.users)

    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={fetchusers}>
        fetch
      </button>
      {users && users.map((u)=>(
        <div style={{display:"flex"}}>
          <p>{u.firstName}</p>
          <p>{u.lastName}</p>
          <p>{u.hair.color}</p>
          <p>{u.company.address.city}</p>
          </div>
        
      ))}

    </div>
  )
}

export default App

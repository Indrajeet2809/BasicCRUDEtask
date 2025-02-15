import axios from 'axios';
import React, { useState } from 'react'

const DeleteProfile= () => {

    
    const [email, setEmail] = useState("");


    const handleSubmit = async(e)=> {
        e.preventDefault();
        try{
            const res= await axios.delete('http://localhost:3000/api/delete', {email});
            console.log(res)
        }catch(error){
            console.log(error)
        }

    }
  return (
    <div>
    <h1>Delete Page</h1>
      <form>
      
        <input type='email' name='email' value={email} placeholder='enter your email' onChange={(e)=> setEmail(e.target.value)} />
      
        
        <button onClick={handleSubmit}>delete Profile</button>
      </form>
    </div>
  )
}

export default DeleteProfile

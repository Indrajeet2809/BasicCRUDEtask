import axios from 'axios';
import React, { useState } from 'react'

const EditProfile = () => {

    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    
    const [phone, setPhone] = useState("");

    const handleSubmit = async(e)=> {
        e.preventDefault();
        try{
            const res= await axios.put('http://localhost:3000/api/edit', {name, email,  phone});
            console.log(res)
        }catch(error){
            console.log(error)
        }

    }
  return (
    <div>
    <h1>Edit Profile Page</h1>
      <form>
        <input type='text' name='name' value={name} placeholder='enter your name' onChange={(e)=> setName(e.target.value)} />
        <input type='email' name='email' value={email} placeholder='enter your email' onChange={(e)=> setEmail(e.target.value)} />
        <input type='number' name='phone' value={phone} placeholder='enter your phone number' onChange={(e)=> setPhone(e.target.value)} />
        
        <button onClick={handleSubmit}>Edit Profile</button>
      </form>
    </div>
  )
}

export default EditProfile

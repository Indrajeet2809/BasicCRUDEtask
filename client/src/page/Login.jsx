import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async(e)=> {
        e.preventDefault();
        try{
            const res= await axios.post('http://localhost:3000/api/login', {email, password,});
            console.log(res)
            
        }catch(error){
            console.log(error)
        }

    }
  return (
    <div>
    <h1>Login Page</h1>
      <form>
       
        <input type='email' name='email' value={email} placeholder='enter your email' onChange={(e)=> setEmail(e.target.value)} />
        
        <input type='password' name='password' value={password} placeholder='enter your password' onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login

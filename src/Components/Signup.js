import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import firebase from '../firebaseConfig';

const Signup = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const navigate = useNavigate();

  const submit = async(e) =>
  {
    e.preventDefault()
    try 
    {
       const user = await firebase.auth().createUserWithEmailAndPassword(email, pass)
       if(user)
       {
        toast.success('Signup successful!');
         navigate("/Login")
       }
    } 
    catch (error) 
    {
        alert(error)
    }
  }
  return (
    <div>
      <div className="main_container_signup">
        <div className="header">
            <h2>Signup</h2>
        </div>
        <div className="box">
            <input type="text" value={name} placeholder="Username" onChange={(e)=> setName(e.target.value)}></input>
        </div>
        <div className="box">
            <input type="text" value={email} placeholder="E-Mail" onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
        <div className="box">
            <input type="password" value={pass} placeholder="Password" onChange={(e)=> setPass(e.target.value)}></input>
        </div>
        <p>Already Have an Account? <Link to="/Login"><>Login Now</></Link> </p>
        <a href="/Home">
        <button onClick={submit}>Signup</button>
        </a>
      </div>
    </div>
  )
}

export default Signup

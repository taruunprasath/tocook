// Login.js
import React, { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Update the import
import firebase from '../firebaseConfig';
import { toast } from 'react-toastify';
const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the useAuth hook

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
      if (user) {
        login(user); // Call the login function from useAuth
        navigate('/Home');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="main_container_signup">
        <div className="header">
          <h2>Login</h2>
        </div>
        <div className="box">
          <input type="text" value={email} placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="box">
          <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)}></input>
        </div>
        <p>
          Don't Have an Account? <Link to="/Signup">Create Account</Link>
        </p>
        <button onClick={submit}>Login</button>
      </div>
    </div>
  );
};

export default Login;

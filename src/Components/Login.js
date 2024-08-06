// Login.js
import React, { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import firebase from '../firebaseConfig';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      if (user) {
        login(user); 
        navigate('/Home');
      }
    } catch (error) {
      toast.error("Invalid Login");
    }
  };

  return (
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          <h2>Login</h2>
          <form onSubmit={submit} className="form">
            <div className="form__field">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form__field">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form__field">
              <input type="submit" value="Login" />
            </div>
          </form>
          <p>Don't have an account? <Link to="/Signup"><span>Create Account</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    // Your login logic here
    
    setUser(userData);
    toast.success('Login successful!');
  };

  const logout = () => {
    // Your logout logic here
    setUser(null);
    toast.info('Logged out successfully.');
    navigate("/Login")

  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
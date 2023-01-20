import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState();
  
  const handleSignup = async (param) => {
    console.log('param:', param);
    
  }
  
  const handleLogin = async (param) => {
    console.log('param:', param);
    
  }
  
  const handleLogout = async (param) => {
    console.log('param:', param);
    
  }
  
  return (
    <AuthContext.Provider value={{auth, handleSignup, handleLogin, handleLogout}}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
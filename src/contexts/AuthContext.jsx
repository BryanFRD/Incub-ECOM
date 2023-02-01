import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import API from '../api/Api';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState();
  
  useEffect(() => {
    API.get('v1/auth/renew')
      .then(resp => setAuth(resp?.data))
      .catch(() => setAuth());
  }, []);
  
  const handleSignup = (param) => {
    return API.post('v1/auth/register', param)
      .catch(() => Promise.reject('Erreur lors de l\'inscription'));
  }
  
  const handleLogin = (param) => {
    return API.post('v1/auth/authenticate', param)
      .then((resp) => {
        console.log('resp:', resp);
        setAuth(resp?.data);
      })
      .catch(() => Promise.reject('Erreur lors de la connexion'));
  }
  
  const handleLogout = (param) => {
    return API.get('v1/auth/logout', param)
      .catch(() => Promise.reject('Erreur lors de la déconnexion'))
      .finally(() => setAuth());
  }
  
  return (
    <AuthContext.Provider value={{auth, handleSignup, handleLogin, handleLogout}}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
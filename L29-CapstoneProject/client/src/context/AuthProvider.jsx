import React, { createContext, useContext, useState } from "react";
import axios from '../services/axios';

const AuthContext = createContext({
  currentUser: null,
  signIn: () => {},
  signUp: () => {},
});

export const useAuth = useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = () => {};
  const signUp = () => {};

  return (
    <AuthContext.Provider value={{currentUser, signIn, signUp}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

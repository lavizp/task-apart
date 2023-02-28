import React, { useContext, useState, useEffect } from "react";
import * as api from '../api/index'
const AuthContext = React.createContext<any | null>(null);


export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  async function signUp(userData: any) {
      await api.signUp(userData);
  }

 async function login(username:string, password:string) {
  const userDatas: any = {
    "username": username,
    "password": password
  }
    const user: any = await api.login(userDatas)
    setCurrentUser(user.data._id)
    localStorage.setItem("user", user.data._id)
  }
  function signOut() {
    setCurrentUser(null);
  }

  useEffect(() => {
    let userValue: any = localStorage.getItem("user")
    if(userValue){
      setCurrentUser(userValue)
      return
    }
    setCurrentUser(null)
  }, []);

  const value : any= {
    currentUser,
    login,
    signUp,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
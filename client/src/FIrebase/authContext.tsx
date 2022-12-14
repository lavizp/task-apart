import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app"
import React, { useContext, useState, useEffect } from "react";
import * as api from '../api/index'
import { auth } from "./firebase"
const AuthContext = React.createContext<any | null>(null);


export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});

  async function signUp(username: string, email: string, password: string, role: string) {
    await auth.createUserWithEmailAndPassword(email, password);
    if(auth.currentUser)
    setDoc(doc(db, "users", auth.currentUser.uid), {
      username,
      email,
      password,
      role,
      tasks: {
    "BackLog": [
      ],
      "To-Do": [
      ],
      "In-Process": [
      ],
      "Completed": [
      ]
  },
    });
  }

 async function login(username:string, password:string) {
  const userDatas: any = {
    "username": username,
    "password": password
  }
  console.log(userDatas)
    const user: any = await api.login(userData)
    setCurrentUser(user)

  }
  function signOut() {
    setCurrentUser(null);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
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
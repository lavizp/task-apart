import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app"
import React, { useContext, useState, useEffect } from "react";

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

  function login(email:string, password:string) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signOut() {
    console.log("Sign Out");
    window.location.reload();
    return auth.signOut();
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
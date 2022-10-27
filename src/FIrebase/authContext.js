import db from "../FIrebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";

import { auth } from "../FIrebase/firebase"
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});

  async function signUp(username, email, password) {
    await auth.createUserWithEmailAndPassword(email, password);
    setDoc(doc(db, "users", auth.currentUser.uid), {
      username,
      email,
      password,
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

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signOut() {
    console.log("Sign Out");
    window.location.reload(false);
    return auth.signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
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
import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
} from "firebase/auth";
import db from "./firebase";
import { addDoc, doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [componentMounted, setComponentMounted] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    const user = window.localStorage.getItem("user");
    console.log(JSON.parse(user));
    user && setCurrentUser(JSON.parse(user));
    setComponentMounted(true);
  }, []);

  async function signup(name, username, email, password, userPhoto = null) {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: userPhoto,
      });

      setDoc(doc(db, "users", auth.currentUser.uid), {
        name,
        email,
        username,
        userPhoto,
        posts: [],
        stories: [],
        likedPosts: [],
        comments: [],
      });
    });
  }
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signOut() {
    return fbSignOut(auth);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      window.localStorage.setItem("user", JSON.stringify(user));
    });
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {componentMounted && children}
    </AuthContext.Provider>
  );
}

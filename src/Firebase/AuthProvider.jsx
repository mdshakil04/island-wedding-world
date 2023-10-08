/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "./firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleSignIn = (value) => {
    return signInWithPopup(auth, googleProvider);
  };
  const AuthInfo = {
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../components/firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   crate new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login 
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };

  // logout user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // unscribe
  useEffect(() => {
    const unscrirbe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture", currentUser);
      setLoading(false);
    });

    return () => {
      unscrirbe();
    };
  }, []);

  // auth passs
  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    singInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

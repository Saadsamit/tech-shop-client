import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";
import toast from "react-hot-toast";
const MyContext = createContext(null);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] =useState(true)
  const registration = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const Logout = () => {
    setIsLoading(true)
     return signOut(auth)
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false)
    });
  }, []);
  const MyObj = { googleLogin, user, Logout, registration, login, isLoading };
  return <MyContext.Provider value={MyObj}>{children}</MyContext.Provider>;
};
AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, MyContext };

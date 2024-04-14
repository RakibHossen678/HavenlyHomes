import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const UnSubscribe=onAuthStateChanged(auth, currentUser => {
        // console.log('current user',currentUser)
         setUser(currentUser);
    });
    return ()=>{
        UnSubscribe()
    }
  }, []);
//   console.log('state',user)

  const AuthInfo = {
    user,
    createUser,
    signIn,
    logOut
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
Authprovider.propTypes = {
  children: PropTypes.node,
};
export default Authprovider;

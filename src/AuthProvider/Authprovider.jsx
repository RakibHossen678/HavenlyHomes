import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider, 
  GithubAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)
  const GoogleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }
  const googleLogin=()=>{
    setLoading(true)
   return signInWithPopup(auth,GoogleProvider)
  }
  const githubLogin=()=>{
    setLoading(true)
   return signInWithPopup(auth,githubProvider)
  }
  const facebookLogin=()=>{
    setLoading(true)
   return signInWithPopup(auth,facebookProvider)
  }

  useEffect(() => {
    const UnSubscribe=onAuthStateChanged(auth, currentUser => {
        // console.log('current user',currentUser)
         setUser(currentUser);
         setLoading(false)
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
    logOut,
    googleLogin,
    githubLogin,
    facebookLogin,
    loading
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
Authprovider.propTypes = {
  children: PropTypes.node,
};
export default Authprovider;

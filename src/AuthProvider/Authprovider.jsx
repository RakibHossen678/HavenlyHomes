import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const AuthInfo={
        user,
        createUser,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Authprovider.propTypes={
    children:PropTypes.node
}
export default Authprovider;
import { createContext, useState } from "react";

const AuthContext=createContext(null)
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const AuthInfo={
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
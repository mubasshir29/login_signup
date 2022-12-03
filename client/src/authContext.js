import { createContext, useContext, useState } from "react";

const authContext = createContext(null);

const AuthProvider = (props)=>{
    const [user,setUser] = useState();

    const login = (user)=>{
        setUser(user)
    }
    const logout = () =>{
        setUser(null)
    }

    return(
        <authContext.Provider value={{user, login, logout}}>
            {props.children}
        </authContext.Provider>
    )
}

export {authContext, AuthProvider};
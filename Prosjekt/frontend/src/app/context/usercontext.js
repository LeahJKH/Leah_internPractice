"use client"

import {createContext, useContext, useState, useEffect } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [load, setload] = useState(false)

    useEffect(() => {
        const currUserData = sessionStorage.getItem("Userinfo")
        if (currUserData) {
            setUser(JSON.parse(currUserData))
        }
        setload(true)
    },[])

    useEffect(() => {
        if(load) {
            if(user) {
                sessionStorage.setItem("Userinfo",JSON.stringify(user))
            } else {
                console.log("nouser")
            }
        }
        setload(true)
    },[user, load])
    
    if(!load) {
        return null
    }

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export function useUser() {
    return useContext(userContext);
}
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext.ts";

export const useAuth = ()=>{
    const {user, setUser} = useContext(UserContext)
    const [isUserLogin, setIsUserLogin] = useState(false)

    useEffect(() => {
        setIsUserLogin(!!user)
    }, [user]);
    return {user, setUser, isUserLogin}
 }
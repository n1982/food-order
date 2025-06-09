import {createContext, type FC, type ReactNode, useState} from "react";

export interface User{
    isAuthenticated: boolean, userName?: string
}



export interface UserContextType {
    user: User;
    toggleUser: () => void
}
interface UserContextProviderProps {
    children: ReactNode;
}
const UserContext = createContext<UserContextType >({
    user: {isAuthenticated: false},
    toggleUser: ()=>{}
});

export const UserContextProvider: FC<UserContextProviderProps> = ({children})=>{
    const [user, setUser]= useState<User>({isAuthenticated: false});

    const toggleUser = () => {
        if (user.isAuthenticated) {
            setUser({isAuthenticated: false});
        } else {
            setUser({isAuthenticated: true, userName: 'Nick'});
        }
    }

    return <UserContext value={{user, toggleUser}}>{children}</UserContext>;
}

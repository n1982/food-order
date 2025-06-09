import {type FC, type ReactNode, useState} from "react";
import {type User, UserContext} from "./UserContext.ts";

interface UserContextProviderProps {
    children: ReactNode;
}


export const UserContextProvider: FC<UserContextProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>({isAuthenticated: false});

    const toggleUser = () => {
        if (user.isAuthenticated) {
            setUser({isAuthenticated: false});
        } else {
            setUser({isAuthenticated: true, userName: 'Nick'});
        }
    }

    return <UserContext value={{user, toggleUser}}>{children}</UserContext>;
}

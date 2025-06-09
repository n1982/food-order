import {createContext} from "react";

export interface User {
    isAuthenticated: boolean,
    userName?: string
}

interface UserContextType {
    user: User;
    toggleUser: () => void
}

export const UserContext = createContext<UserContextType>({
    user: {isAuthenticated: false},
    toggleUser: () => {
    }
});
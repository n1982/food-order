import {createContext, type Dispatch, type SetStateAction} from "react";

export interface UserContextType {
    user: string | null;
    setUser: Dispatch<SetStateAction<null>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

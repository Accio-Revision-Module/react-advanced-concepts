import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            name: "John",
            email: "john@example.com"
        })
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}
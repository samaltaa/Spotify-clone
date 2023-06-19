'use client';

import { MyUserContextProvider } from "@/public/Hooks/useUser";

interface userProviderProps{
    children: React.ReactNode;
}

const UserProvider: React.FC<userProviderProps> = ({children}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
};

export default UserProvider;
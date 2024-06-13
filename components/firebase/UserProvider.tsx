
import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface User {
    id: string;
    type?: number;
    nick?: string;
    nickSlug?: string;
    assignedPediatricianNickname?: string;
}

type UserContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    setUserType: (type: number) => void;
    setUserNick: (nick: string) => void;
    setUserNickSlug: (nickSlug: string) => void;
}

const AppContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (user) {
            localStorage.setItem('Datos', JSON.stringify(user))
        } else {
            const saved = localStorage.getItem('Datos')

            if (saved) {
                setUser(JSON.parse(saved))
            }
        }
    }, [user])

    const setUserType = (type: number) => {
        setUser((prevUser) => prevUser ? { ...prevUser, type } : null);
    };
    const setUserNick = (nick: string) => {
        setUser((prevUser) => prevUser ? { ...prevUser, nick } : null);
    };
    const setUserNickSlug = (nickSlug: string) => {
        setUser((prevUser) => prevUser ? { ...prevUser, nickSlug } : null);
    };

    return (
        <AppContext.Provider value={{ user, setUser, setUserType, setUserNick,setUserNickSlug }}>
            {children}
        </AppContext.Provider>
    );
};

export default UserProvider;

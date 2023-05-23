import React, { createContext } from 'react';

interface Main {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    theme: "light" | "dark";
}

const MainContext = createContext<Main>({
    loggedIn: false,
    setLoggedIn: () => {},
    theme: "light"
})

export default MainContext;
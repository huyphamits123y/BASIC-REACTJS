import React, { createContext, useState, useEffect } from "react";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        fetch('https://reqres.in/api/users/2')
            .then((res) => res.json())
            .then((res) => {
                setUserData(res.data)
            }


            )
    }, [])
    return <AppContext.Provider value={{ userData, test: 'abc' }}>
        {children}
    </AppContext.Provider>
}
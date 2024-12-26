/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvide = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUserData = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await response.json();
            // console.log("This is the data : ",data);
            // console.log("userName = ",data.name)
            setUser(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUserData(1);
    }, []);

    return <UserContext.Provider value={{ user ,fetchUserData }}>{children}</UserContext.Provider>;
};

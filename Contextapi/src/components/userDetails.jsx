/* eslint-disable no-unused-vars */

import React, { useContext, } from 'react'
import { UserContext } from '../context/UserContext'
import { ThemeContext } from '../context/TheameContext';

function UserDetails() {

    const { user, fetchUserData } = useContext(UserContext)
    const { theme } = useContext(ThemeContext);

    if (user) {
        return (
            <>
                <section style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    height: '50%',
                    backgroundColor: theme === "light" ? "#fff" : "#1b1b1b",
                    color: theme === "light" ? "#1b1b1b" : "#fff",
                    borderRadius: '5px',
                    padding: '20px',
                    marginTop: '40px',
                }}>
                    <h2>UserDetails</h2>
                    <p>User ID :{user.id}</p>
                    <p>Name :{user.name}</p>
                    <p>Email :{user.email}</p>
                    <p>Phone :{user.phone}</p>
                    <button onClick={() => fetchUserData(Math.floor(Math.random() * 10) + 1)}>Fetch Another User</button>
                </section>
            </>
        )
    }
    else {
        return(
            <>
            <section style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    height: '50%',
                    backgroundColor: theme === "light" ? "#fff" : "#1b1b1b",
                    color: theme === "light" ? "#1b1b1b" : "#fff",
                    borderRadius: '5px',
                    padding: '20px',
                    marginTop: '40px',
                }}>
                    <span>User not found</span>
            </section>
            </>
        )
    }

}

export default UserDetails
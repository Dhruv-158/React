/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Profile from './Profile'
import { UserContext } from '../context/UserContext'
import { ThemeContext } from '../context/TheameContext'

function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                height: '10vh',
                backgroundColor: theme === "light" ? "#fff" : "#1b1b1b",
                color: theme === "light" ?  "#1b1b1b" : "#fff",
                border: '1px solid #fff',
                borderRadius: '5px',
                padding: '0 20px',
                marginTop: "40px",
            }}>
                <h1>LOGO</h1>
                <Profile />
                <button onClick={toggleTheme}>Theme</button>
            </nav>
        </>
    )
}

export default Navbar
/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Header(props) {

    // const [username, setusername] = useState('')

    // if(!data){
    //     setusername("Admin")
    // }else{
    //     setusername(data.firstName)
    // }

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
        // window.location.reload()
    }

    return (
        <><div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> {props.data?.firstName || 'Admin'} 🖐</span> </h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm '>Log Out</button>
        </div></>
    )
}

export default Header
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {

    const { user }= useContext(UserContext)
    // console.log("fdujgdfjgfisdufgjsbifgjdbfjdbvidfgdifugdsi")
    // console.log(user)

    if(!user){
    return <span>Login</span>
    }
    else{
    return <span>{user.name}</span>
    }
}

export default Profile
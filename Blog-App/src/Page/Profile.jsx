/* eslint-disable no-unused-vars */
import React from 'react'

function Profile() {

    const userName = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <div className=' container-lg text-center' style={{ height: '60vh', marginTop: '80px' }}>
                <h1>Profile</h1>
                <p>{userName.username}</p>
            </div>

        </>
    )
}

export default Profile
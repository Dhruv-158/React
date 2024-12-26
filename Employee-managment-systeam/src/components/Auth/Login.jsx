/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className='flex h-screen w-screen items-center justify-center '>
                <div className='border-2 rounded-xl border-emerald-600 p-20'>
                    <form onSubmit={(e) =>  submitHandler(e) } className='flex flex-col items-center justify-center'>
                        <input
                        required
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        className='text-white outline-none bg-black border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400'
                        type='email'
                        placeholder='Enter your email'
                        />
                        <input
                        required
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        className='text-white outline-none bg-black border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3' 
                        type='password'
                        placeholder='Enter password'
                        />
                        <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();


    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');


    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!emailOrUsername || !password) {
            setErrorMessage('Please enter your Email or Username and Password.');
            return;
        }
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (!savedUser) {
            setErrorMessage('No user found, please register.');
            return;
        }
        if (
            (savedUser.username === emailOrUsername || savedUser.email === emailOrUsername) &&
            savedUser.password === password
        ) {
            localStorage.setItem("loggedin", true)
            setErrorMessage('Welcome to Blog');
            navigate('/');
        } else {
            setErrorMessage('Invalid credentials.');
        }
    };

    return (
        <div className="container-md mx-auto" style={{ marginTop: '80px', minHeight: '60vh' }} id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100%' }}>
                <form className="w-100" style={{ maxWidth: '400px' }} onSubmit={handleLogin}>
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="loginName">Email or Username</label>
                        <input
                            type="text"
                            id="loginName"
                            className="form-control"
                            value={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                        <input
                            type="password"
                            id="loginPassword"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="loginCheck" />
                            <label className="form-check-label" htmlFor="loginCheck">Remember me</label>
                        </div>
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>

                    {errorMessage && (
                        <div className="alert alert-danger mb-3" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary w-100 mb-3">Log in</button>
                    <div className="text-center">
                        <p>Not a member? <Link to="/signin">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

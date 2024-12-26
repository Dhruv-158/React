/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputField({ id, type, label, value, onChange }) {
    return (
        <>
            <div className="form-outline mb-3">
                <label className="form-label m-2" htmlFor={id}>{label}</label>
                <input
                    type={type}
                    id={id}
                    className="form-control"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

function Signin() {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });


    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const handleSignIn = (e) => {
        e.preventDefault();


        if (!formValues.name || !formValues.username || !formValues.email || !formValues.password || !formValues.repeatPassword) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (formValues.password !== formValues.repeatPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }


        const user = {
            username: formValues.username,
            email: formValues.email,
            password: formValues.password
        };
        localStorage.setItem('user', JSON.stringify(user));

        setErrorMessage('');
        navigate('/login');
    };

    return (
        <div style={{ height: "80vh", marginTop: '100px' }} className="container-md p-10 mx-auto" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form onSubmit={handleSignIn}>
                <InputField id="name" type="text" label="Name" value={formValues.name} onChange={handleInputChange} />
                <InputField id="username" type="text" label="Username" value={formValues.username} onChange={handleInputChange} />
                <InputField id="email" type="email" label="Email" value={formValues.email} onChange={handleInputChange} />
                <InputField id="password" type="password" label="Password" value={formValues.password} onChange={handleInputChange} />
                <InputField id="repeatPassword" type="password" label="Repeat password" value={formValues.repeatPassword} onChange={handleInputChange} />

                <div className="form-check d-flex justify-content-center mb-3">
                    <input className="form-check-input me-2" type="checkbox" id="registerCheck" aria-describedby="registerCheckHelpText" />
                    <label className="form-check-label" htmlFor="registerCheck">
                        I have read and agree to the terms
                    </label>
                </div>

                {errorMessage && (
                    <div className="alert alert-danger mb-3" role="alert">
                        {errorMessage}
                    </div>
                )}

                <button type="submit" className="btn btn-primary btn-lg mb-3">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Signin;

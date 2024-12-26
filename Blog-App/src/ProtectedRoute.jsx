/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('loggedin');

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

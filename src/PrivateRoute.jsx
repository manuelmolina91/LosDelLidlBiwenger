import React from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from "./AuthProvider";

export const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" replace />;
};
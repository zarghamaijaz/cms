import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => false;

const  PublicRoute = () => {
    const auth = useAuth();
    return auth ?  <Navigate to="/signin"/> : <Outlet/>
}

export default PublicRoute;
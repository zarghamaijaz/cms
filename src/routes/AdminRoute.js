import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import Layout from "../components/Layout";

const useAuth = () => false;

const  AdminRoute = () => {
    const auth = useAuth();
    return auth ? <Layout><Outlet/></Layout> : <Navigate to="/signin"/>
}

export default AdminRoute;
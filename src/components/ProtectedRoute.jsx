import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function ProtectedRoute() {
    const isAuthenticated = useSelector((state) => state.user.isLoggedIn)
    console.log(isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('token');
        if (!data) {
            navigate('/login')
        }

    }, [navigate])



    return <Outlet />

    // if (isAuthenticated) {
    //     return (
    //         <div>
    //             <Header />
    //             <Outlet />
    //         </div>
    //     )
    // }

    // return <Navigate to={'/login'} replace />
}

export default ProtectedRoute
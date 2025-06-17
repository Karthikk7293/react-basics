import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const isAuthenticated = useSelector((state) => state.user.isLoggedIn)
    console.log(isAuthenticated);


    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace />

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
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='h-screen w-full '>
            <Header />
            <main className=' min-h-screen h-full pt-20 '>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

function Dashboard() {
    const location = useLocation();
    const selected = location.pathname; 
    console.log(selected)// Obtener la ruta actual
    return (
        <>
            {/*'Container Dashboard'*/}
            <div className='bg-background-light grid grid-cols-1 md:grid-cols-12'>
                <Navbar selected={selected} />
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard
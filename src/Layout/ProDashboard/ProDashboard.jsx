import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ProNavbar from '../../Components/ProNavbar/ProNavbar';

function ProDashboard() {
    const location = useLocation();
    const selected = location.pathname; 
    console.log(selected)// Obtener la ruta actual
    return (
        <>
            {/*'Container Dashboard'*/}
            <div className='bg-background-light grid grid-cols-1 md:grid-cols-12'>
                <ProNavbar selected={selected} />
                <Outlet />
            </div>
        </>
    )
}

export default ProDashboard
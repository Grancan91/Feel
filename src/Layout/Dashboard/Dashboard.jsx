import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Dashboard() {

    return (
        <>
            {/*'Container Dashboard'*/}
            <div className='bg-background-light grid grid-cols-1 md:grid-cols-12'>
                <Navbar selected={''} />
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard
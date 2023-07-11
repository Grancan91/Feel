import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <>
        <div className='grid grid-cols-12 bg-background-light'>
        
        {/*'Navcontainer'*/}
        <div className='col-span-12 md:col-span-1 md:w-full'><Navbar option='Home'/></div>
        
        <div>
            <Outlet/>
        </div>
        <div>Col 3</div>
        
        </div>
        
        </>
    )
}

export default Dashboard
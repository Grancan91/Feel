import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Dashboard() {

    return (
        <>
            
            {/*'Container Dashboard'*/}
            <div className='bg-red grid grid-cols-1 md:grid-cols-12'>
            <Navbar selected={''}/> 
            <Outlet/>            
            </div>
           
           {/*  <Navbar selected={'Record'} /> */}
        
            {/* <div className='grid grid-cols-12 h-screen w-screen bg-red'>
               
                    <Outlet />
               

            </div> */}


        </>
    )
}

export default Dashboard
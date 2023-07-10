import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='w-screen flex flex-col my-2 items-center'>
    <div className='p-4 lg:w-3/4 md:p-8'>
        <h1 className='text-2xl p-2 md:text-5xl md:p-8 text-center'>Create New Account</h1>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {/* Column 1 */}
        <div className="h-40 md:h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("../../src/assets/feeling.jpg")' }}>
        </div>       
      {/* Column 2 */}
        <div className="border border-gray-light rounded-lg p-2 md:p-4">
        <h2 className='text-center text-lg my-2 md:text-2xl'>Personal Data</h2>
      {/* Form */}
        <form action="" className=''>

          <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Name</label>
          <input type="text" className='w-full border border-gray-light p-2 md:p-4 rounded-md my-2' />

          <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Age</label>
          <input type="text" className='w-full border border-gray-light p-2 md:p-4 rounded-md my-2' />

          <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Email</label>
          <input type="text" className='w-full border border-gray-light p-2 md:p-4 rounded-md my-2' />

          <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Password</label>
          <input type="text" className='w-full border border-gray-light p-2 md:p-4 rounded-md my-2' />

          <h2 className='text-center my-2 text-lg md:text-2xl'>Would you like to send the reports?</h2>

          <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Email of Health Profesional</label>
          <input type="text" className='w-full border border-gray-light p-2 md:p-4 rounded-md my-2' />

        </form>
      
      </div>
    </div>
    </div>
      <Link to={'/signup'}>
        <button className='antialiased bg-blue-dark rounded-full inline-block p-6 py-3 text-white'>Go Loggin</button>
      </Link>
    </div>
  )
}

export default Signup

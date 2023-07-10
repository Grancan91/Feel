import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { isEmail, isPassword, styleEmail, styleName, stylePassword } from '../../Services/validations_service'


function Signup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleForm = (e) => {
    if(isEmail(email) && isPassword(password)){
      doLogin()
    }
  }

  const doLogin = async () => {
    try {
      //await userLogin(email, password)
     //navigate('/dashboard')
    } catch (error) {
      
    }
  }
  
  return (
    <div className='w-screen flex flex-col my-2 items-center'>
      <div className='p-4 lg:w-3/5 md:p-8'>
        <h1 className='text-2xl p-2 md:text-5xl md:p-8 text-center'>Welcome Back</h1>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Column 1 */}
          <div className="h-40 md:h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("../../src/assets/emotion-brain.jpg")' }}>
          </div>
          {/* Column 2 */}
          <div className="border border-gray-light rounded-lg p-2 md:p-4">
            <h2 className='text-center text-lg my-2 md:text-2xl'>Your Login Data</h2>
            {/* Form */}
            <form action="" className=''>
              <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Email *</label>
              <input type="text" className={`w-full border border-gray-light p-2 md:p-4 rounded-md my-2 ${styleEmail(email)}`}
                onChange={handleEmail} />

              <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Password *</label>
              <input type="text" className={`w-full border border-gray-light p-2 md:p-4 rounded-md my-2 ${stylePassword(password)}`}
                onChange={handlePassword} />
            </form>

        <button className='w-full antialiased bg-blue-dark rounded-full inline-block p-6 py-3 my-4 text-white'
          onClick={handleForm}>
          SignUp</button>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Signup

import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { isAge, isEmail, isName, isPassword, styleEmail, styleName, stylePassword } from '../../Services/validations_service'
import { userSignup } from '../../Services/auth_service'

function Signup() {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [proEmail, setProEmail] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleAge = (e) => {
    setAge(isAge(e.target.value))
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleProEmail = (e) => {
    setProEmail(e.target.value)
  }

  const handleForm = (e) => {
    if(isName(name) && isEmail(email) && isPassword(password)){
      doSignup()
    }
  }

  const doSignup = async () => {
    try {
      if(await userSignup(name, age, email, password, proEmail)){
        navigate('/login')
      }
    } catch (error) {
      
    }
  }
  
  return (
    <div className='w-screen flex flex-col my-2 items-center'>
      <div className='p-4 lg:w-3/5 md:p-8'>
        <h1 className='text-2xl p-2 md:text-5xl md:p-8 text-center'>Create New Account</h1>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Column 1 */}
          <div className="h-40 md:h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("../../src/assets/feeling.jpg")' }}>
          </div>
          {/* Column 2 */}
          <div className="border border-gray-light rounded-lg p-2 md:p-8">
            <h2 className='text-center text-lg my-2 md:text-2xl'>Personal Data</h2>
            {/* Form */}
            <form action="" className=''>

              <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Name *</label>
              <input type="text" className={`w-full border border-gray-light p-2 md:p-4 rounded-md my-2 ${styleName(name)}`}
                onChange={handleName} />

              <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Age</label>
              <input type="number" value={age} max='100' className='w-full border border-gray-light p-2 md:p-4 rounded-md my-2'
                onChange={handleAge} />

              <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Email *</label>
              <input type="text" className={`w-full border border-gray-light p-2 md:p-4 rounded-md my-2 ${styleEmail(email)}`}
                onChange={handleEmail} />

              <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Password *</label>
              <input type="text" className={`w-full border border-gray-light p-2 md:p-4 rounded-md my-2 ${stylePassword(password)}`}
                onChange={handlePassword} />

              <h2 className='text-center my-2 text-lg md:text-2xl'>Would you like to send the reports?</h2>

              <label htmlFor="" className='text-lg text-gray md:text-2xl antialiased'>Email of Health Profesional</label>
              <input type="text" className={`w-full border border-gray-light p-2 md:p-4 rounded-md my-2 ${styleEmail(proEmail)}`}
                onChange={handleProEmail} />

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

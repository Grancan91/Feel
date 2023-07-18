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
  const [emailLabel, setEmailLabel] = useState('Email*')
  const [password, setPassword] = useState('')
  const [proEmail, setProEmail] = useState('')


  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleAge = (e) => {
    setAge(isAge(e.target.value))
  }

  const handleEmail = (e) => {
    setEmailLabel('Email*')
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
      const res = await userSignup(name, age, email, password, proEmail)
      console.log(proEmail)
      if (res.code === 11000){
        setEmailLabel(res.error)
        setEmail(res)
      } else if (res){
        navigate('/intro1')
      }
      
    } catch (error) {
      console.log(`doSignup Error ${error}`)
    }
  }
  
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>

      <div className='p-4 lg:w-3/5 md:p-20'>
        <h1 className='text-xl p-2 md:text-3xl md:p-8 text-center'>Create New Account</h1>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Column 1 */}
          <div className="h-40 md:h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("../../src/assets/feeling.jpg")' }}>
          </div>
          {/* Column 2 */}
          <div className="shadow-xl rounded-lg p-1 md:p-8 bg-slate-100">
            <h2 className='text-lg my-2 md:text-xl'>Personal Data</h2>
            {/* Form */}
            <form action="" className=''>

              <label htmlFor="" className='text-sm text-gray md:text-lg antialiased'>Name *</label>
              <input type="text" className={`w-full border border-gray-light p-1 md:p-2 rounded-md my-2 ${styleName(name)}`}
                onChange={handleName} />

              <label htmlFor="" className='text-sm text-gray md:text-lg antialiased'>Age</label>
              <input type="number" value={age} max='100' className='w-full border border-gray-light p-1 md:p-2 rounded-md my-2'
                onChange={handleAge} />

              <label htmlFor="" className='text-sm text-gray md:text-lg antialiased'>{`${emailLabel}`}</label>
              <input type="text" className={`w-full border border-gray-light p-1 md:p-2 rounded-md my-2 ${styleEmail(email)}`}
                onChange={handleEmail} />

              <label htmlFor="" className='text-sm text-gray md:text-lg antialiased'>Password *</label>
              <input type="password" className={`w-full border border-gray-light p-1 md:p-2 rounded-md my-2 ${stylePassword(password)}`}
                onChange={handlePassword} />

              <h2 className='my-2 text-sm md:text-lg'>Would you like to send the reports?</h2>

              <label htmlFor="" className='text-sm text-gray md:text-lg antialiased'>Email of Health Profesional</label>
              <input type="text" className={`w-full border border-gray-light p-1 md:p-2 rounded-md my-2 ${styleEmail(proEmail)}`}
                onChange={handleProEmail} />

            </form>

        <button className='w-full antialiased bg-blue-dark rounded-full inline-block p-6 py-3 my-4 text-white  hover:bg-blue'
          onClick={handleForm}>
          SignUp</button>
            <Link to={'/login'}>
            <p className='text-center underline cursor-pointer mb-2 md:mb-0'>Have account? Login here.</p>
            </Link>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Signup

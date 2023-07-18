import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom';

function Welcome() {

  const handleClick = () => {
    
  }

  return (
    <>
    {/* Container */}
    <div className='flex flex-col w-screen h-screen items-center md:justify-center'>

    {/* Title and Cards Container */}
      {/* Title */}
      <h1 className="antialiased text-2xl text-center font-bold mt-8 md:text-5xl lg:text-6xl">Key Features of the Application</h1>

        {/* Card Container */}
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3 md:p-4 md:mx-8 lg:mx-32 text-center">
          {/* Card 1 */}
          <div className="p-6 rounded-lg md:p-1 lg:p-6">
          <div className="bg-cover bg-center h-96 rounded-lg md:h-48 lg:h-96" style={{ backgroundImage: 'url("../../src/assets/feeling.jpg")' }}></div>       
          <h2 className="antialiased my-4 mx-12 text-xl font-bold mb-2 md:mx-2">Take care of your mental well-being</h2>
          <p className="antialiased text-gray">Find time to relax, engage in activities you enjoy, and prioritize your mental health</p>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-lg md:p-1 lg:p-6">
          <div className="bg-cover bg-center h-96 rounded-2xl md:h-48 lg:h-96" style={{ backgroundImage: 'url("../../src/assets/emotion-brain.jpg")' }}></div>  
          <h2 className="antialiased my-4 mx-12 text-xl font-bold mb-2 md:mx-2">Recognize emotional patterms</h2>
          <p className="antialiased text-gray">Develop the ability to identify and understand recurring emotional patterns within yourself and others. </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 rounded-lg md:p-1 lg:p-6">
          <div className="bg-cover bg-center h-96 rounded-2xl md:h-48 lg:h-96" style={{ backgroundImage: 'url("../../src/assets/doctor.jpg")' }}></div>  
          <h2 className="antialiased my-4 mx-12 text-xl font-bold mb-2 md:mx-2">Work with your doctor to help yuorself</h2>
          <p className="antialiased text-gray">Collaborate with your healthcare provider to actively participate in your own well-being</p>
          </div>
        </div>
      <Link to={'/signup'}>
      <button className='antialiased cursor-pointer bg-blue-dark rounded-full inline-block p-6 py-3 text-white hover:bg-blue'>Go Loggin</button>
      </Link>
    </div>
    </>
  )
}

export default Welcome

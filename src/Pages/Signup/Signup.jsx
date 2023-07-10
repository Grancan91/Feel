import React from 'react'

function Signup() {
  return (
    
    <div className='flex flex-col w-full justify-center items-center'>

          <h1 className="antialiased my-4 mx-12 text-4xl font-bold mb-2 md:mx-2">Create a new account</h1>
    <div className="flex columns-2 gap-4 p-6 text-center">
      {/* Card Container */}
          {/* Card 1 */}
          <div className="p-6 rounded-lg cursor-pointer md:p-1 lg:p-6">
          <div className="bg-cover bg-center h-96 w-96 rounded-2xl czursor-pointer" style={{ backgroundImage: 'url("../../src/assets/emotion-brain.jpg")' }}></div>  
          <p className="antialiased text-gray">Develop the ability to identify and uners. </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-lg cursor-pointer md:p-1 lg:p-6">
            <div class="mb-3">
                <label for="email" className="text-sm text-navy-700 dark:text-white font-bold">Your Name</label>
                <input type="text" id="name" placeholder="Pepito Palotes" className=""/>
            </div>
          <p className="antialiased text-gray">Develop the ability to identify and uners. </p>
          </div>
  </div>  
    
    </div>
    
        
  )
}

export default Signup

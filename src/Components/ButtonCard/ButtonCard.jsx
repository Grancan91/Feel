import React from 'react'

function ButtonCard() {
  return (
    <div className='bg-green rounded-md w-2/3 md:flex'>
    <div className='flex p-2 justify-center w-1/3'>
    <img className='h-14 w-14 md:w-32 md:h-32' src='https://openmoji.org/data/color/svg/270D-1F3FB.svg'/>
    </div>
    <div className='p-2 w-3/3'>
    <h3 className='text-white mb-2 text-md'>Añadir Registro</h3>
    <p className='text-white text-sm'>Every large design company whether it’s a multi-national 
    branding corporation or a regular.</p>
    </div>
    <div className='flex items-end p-4 md:w-1/3'>
    <button className='bg-white text-green w-fit h-fit  p-4 rounded-lg'>New Registry</button>
    </div>
    </div>
  )
}

export default ButtonCard

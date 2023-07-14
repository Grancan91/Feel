import React from 'react'
import { Link } from 'react-router-dom'

function ButtonCard({Button_text = 'Button_text', Title_text = 'Title_text', Detail_text = 'Detail_text', Route}) {
  return (
    <>
      {/*Container*/}
      <div className='bg-green rounded-md md:h-36 md:w-2/3 flex flex-col items-center md:flex-row md:justify-between justify-center'>
        {/*Container IMG & Text*/}
        <div className='flex justify-start'>
        {/*Container IMG*/}
        <div className='p-4 w-fit hidden md:block'>
          <img className='h-28 w-28' src='https://openmoji.org/data/color/svg/270D-1F3FB.svg' />
        </div>
        {/*Container Text*/}
        <div className='p-2 mx-2 w-fit md:block'>
          <h3 className='text-white my-4 text-2xl md:text-3xl'>{Title_text}</h3>
          <p className='text-white text-lg'>{Detail_text}</p>
        </div>
        </div>
       
        {/*Container Button*/}
        <div className='flex justify-end items-end p-4 md:w-3/5'>
          <Link to={`${Route}`}>
            <button className='bg-white md:text-xl text-green md:mt-12 w-fit h-fit  p-4 rounded-lg hover:border hover:border-white hover:text-red'>{Button_text}</button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default ButtonCard

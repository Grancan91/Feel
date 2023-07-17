import React from 'react'

function DetailCard({Detail}) {

    return (
        <>
        <div className='md:w-1/2 h-12 p-4 m-4 bg-red flex items-center rounded-md md:rounded-xl'>
                <h3 className='text-white text-xl'>{Detail}</h3>
        </div>
        </>
    )
}

export default DetailCard
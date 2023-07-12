import React from 'react'

function Home() {
    return (
        <>
        {/*Container*/}
        <div className='col-span-11 h-screen p-2 md:p-0 md:mr-8'>
                {/*Header*/}
                <div className='bg-blue flex items-center h-14 md:h-28'>
                    <h1 className='text-xl antialiased font-bold text-gray-dark md:text-4xl'>My Registers</h1>
                </div>
                {/*Section Emotions */}
                <div className='shadow-2xl bg-white border rounded-2xl md:h-1/3'>
                    <h1 className='p-2 text-xl'>¿How do you feel?</h1>
                    {/*Emotions Cards*/}
                    <div className='bg-happy bg-cover'>
                        <h2>Happy</h2>
                    </div>

                </div>
                {/*Header*/}
                <div className='bg-green h-1/3'></div>
        </div>
        </>
    )
}

export default Home
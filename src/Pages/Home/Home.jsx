import React, { useState } from 'react'
import ButtonCard from '../../Components/ButtonCard/ButtonCard'
import './Home.css'
import ProgressCard from '../../Components/ProgressCard/ProgressCard';
function Home() {

    return (
        <>
            {/*Container*/}
            <div className='col-span-12 md:col-span-11 h-screen p-8'>
                {/*Header*/}
                <div className='items-center h-20 my-4'>
                    <h1 className='text-xl antialiased font-bold md:text-4xl'>My Registers</h1>
                </div>
                {/*Container Stats*/}
                <div className='h-fit my-8 md:flex justify-between gap-4'>
                    {/*Cards*/}
                    <div className='w-full h-full'>

                        <ProgressCard Variant={'bg-green'} />

                    </div>
                    <div className='w-full h-full '>
                        <div className='w-full h-full bg-violet'>
                            <ProgressCard Variant={'bg-red'} />
                        </div>

                    </div>
                    <div className='w-full h-full '>
                        <ProgressCard Variant={'bg-blue-dark'} />

                    </div>

                </div>
                {/*Container Button Card*/}
                <div>
                    <div className="w-full p-2">
                        <ButtonCard Button_text='Create new record' Title_text='Crear nuevo registro de sentimientos' Detail_text='¡Comienza a registrar tus sentimientos y obtén una visión más profunda de tu mundo emocional!' Route={'/dashboard/NewRecord'} />
                    </div>
                    <div className="w-full p-2">
                        <ButtonCard Button_text='Create new record' Title_text='Export Report' Detail_text='¡Comienza a registrar tus sentimientos y obtén una visión más profunda de tu mundo emocional!' Route={'/dashboard/NewRecord'} variant={2} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
import React, { useState } from 'react'
import EmotionCard from '../../Components/EmotionCard/EmotionCard'
import { Link } from 'react-router-dom'
import CauseList from '../../Components/CauseList/CauseList'

function Home() {

    const [emotion, setEmotion] = useState('')
    const handleEmotion = (emotion) => {
        setEmotion(emotion)
    }

    return (
        <>
        {/*Container*/}
        <div className='col-span-11 h-screen p-2 md:p-0 md:mr-8'>
                {/*Header*/}
                <div className='flex items-center h-14 md:h-20'>
                    <h1 className='text-xl antialiased font-bold text-gray-dark md:text-4xl'>My Registers</h1>
                </div>
                {/*Section Emotions */}
                <div className='shadow-sm bg-white rounded-2xl'>
                    <h1 className='p-2 text-xl text-center md:text-4xl'>¿How have you been feeling?</h1>
                    {/*Container Emotions Cards*/}
                    <div className='flex p-2 gap-4 justify-center'>
                        {/*Emotions Cards*/}                      
                        <EmotionCard selector={1} handleEmotion={handleEmotion}/>
                        {/*Emotions Cards*/}
                        <EmotionCard selector={2} handleEmotion={handleEmotion} />
                        {/*Emotions Cards*/}
                        <EmotionCard selector={3} handleEmotion={handleEmotion} />
                        {/*Emotions Cards*/}
                        <EmotionCard selector={4} handleEmotion={handleEmotion} />
                        {/*Emotions Cards*/}
                        <EmotionCard selector={5} handleEmotion={handleEmotion} />
                    </div>
                </div>
                {/*Sections Container - Causes, Symptom, Strategy*/}
                <div className='bg-white md:h-1/3 md:flex my-4 shadow-sm rounded-2xl'>
                <CauseList/>
                <CauseList />
                <CauseList />



                </div>
                {/*Sections Container - Causes, Symptom, Strategy*/}
                <div className='bg-white h-1/6 my-4 shadow-sm rounded-2xl'>




                </div>
        </div>
        </>
    )
}

export default Home
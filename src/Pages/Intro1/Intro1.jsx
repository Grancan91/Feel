import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Intro1() {

    const navigate = useNavigate()
    const [reminderDay, setReminderDay] = useState('')

    const handleDay = () => {
        setReminderDay(1)
        //Aqui servicio guardar ReminderDay

        navigate('/intro2')

    }

    const handleWeek = () => {
        setReminderDay(7)
        //Aqui servicio guardar ReminderDay

        navigate('/intro2')
    }

    const handleMonth = () => {
        setReminderDay(30)
        //Aqui servicio guardar ReminderDay

        navigate('/intro2')
    }

    return (
        <>
            {/* Container */}
            <div className='flex flex-col w-screen h-screen items-center md:justify-center'>

                {/* Title and Cards Container */}
                {/* Title */}
                <h1 className="antialiased text-2xl text-center font-bold my-8 md:text-5xl lg:text-6xl">Select Record Frequency of Reminders</h1>
                {/* Step Container */}
                <div className='flex gap-16'>
                    <div className='w-10 h-10 border rounded-full flex justify-center items-center bg-blue-dark text-white'>
                        <p>1</p>
                    </div>
                    <div className='w-10 h-10 border rounded-full flex justify-center items-center'>
                        <p>2</p>
                    </div>
                </div>
                {/* Card Container */}
                <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3 md:p-4 md:mx-8 lg:mx-32 text-center">
                    {/* Card 1 */}

                    <div className="p-6 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border" onClick={handleDay}>
                        <div className="bg-cover bg-top h-96 rounded-lg md:h-48 lg:h-96" style={{ backgroundImage: 'url("../../src/assets/calendar1.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-xl font-bold mb-2 md:mx-2">Daily Diary Register</h2>
                        <p className="antialiased text-gray">Keep track of your daily activities and important information with the Daily Register feature.</p>
                        <button className='antialiased  hover:bg-blue bg-blue-dark rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border" onClick={handleWeek}>
                        <div className="bg-cover bg-top h-96 rounded-2xl md:h-48 lg:h-96 cursor-pointer" style={{ backgroundImage: 'url("../../src/assets/calendar2.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-xl font-bold mb-2 md:mx-2">Weekly Diary Register</h2>
                        <p className="antialiased text-gray">Develop the ability to identify and understand recurring emotional patterns within yourself and others. </p>
                        <button className='antialiased  hover:bg-blue bg-blue-dark rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </div>
                    {/* Card 3 */}
                    <div className="p-6 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border" onClick={handleMonth}>
                        <div className="bg-cover bg-top h-96 rounded-2xl md:h-48 lg:h-96 cursor-pointer" style={{ backgroundImage: 'url("../../src/assets/calendar3.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-xl font-bold mb-2 md:mx-2">Monthly Diary Register</h2>
                        <p className="antialiased text-gray">Collaborate with your healthcare provider to actively participate in your own well-being</p>
                        <button className='antialiased bg-blue-dark  hover:bg-blue rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro1
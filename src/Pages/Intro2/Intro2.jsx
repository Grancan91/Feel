import React from 'react'
import { useNavigate } from 'react-router-dom'
import { updateReminder } from '../../Services/user_service'
import { motion } from 'framer-motion';

function Intro2() {

    const navigate = useNavigate()

    const handleMorning = () => {
        localStorage.setItem('reminder_time', '9:00')
        updateReminder(localStorage.getItem('reminder_freq'), localStorage.getItem('reminder_time'))
        navigate('/dashboard/home')
    }

    const handleAfternoon = () => {
        localStorage.setItem('reminder_time', '15:00')
        updateReminder(localStorage.getItem('reminder_freq'), localStorage.getItem('reminder_time'))
        navigate('/dashboard/home')
    }

    const handleNight = () => {
        localStorage.setItem('reminder_time', '21:00')
        updateReminder(localStorage.getItem('reminder_freq'), localStorage.getItem('reminder_time'))
        navigate('/dashboard/home')
    }
    return (
        <>
            {/* Title and Cards Container */}
            <div className='flex flex-col w-screen h-screen items-center md:justify-center'>


                {/* Title */}
                <h1 className="antialiased text-lg text-center font-bold my-4 md:text-lg lg:text-2xl">When would you prefer the registration to take place?</h1>

                {/* Step Container */}
                <div className='flex gap-16'>
                    <div className='w-8 h-8 md:w-10 md:h-10 border rounded-full flex justify-center items-center'>
                        <p>1</p>
                    </div>
                    <div className='w-8 h-8 md:w-10 md:h-10 border rounded-full flex justify-center items-center bg-blue-dark text-white'>
                        <p>2</p>
                    </div>
                </div>

                {/* Card Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:p-4 md:mx-8 lg:mx-3 text-center">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border" onClick={handleMorning}>
                        <div className="bg-cover bg-top h-96 rounded-lg md:h-48 lg:h-96" style={{ backgroundImage: 'url("../../src/assets/morning.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-lg font-bold mb-2 md:mx-2">Remember at Morning</h2>
                        <button className='antialiased  hover:bg-blue bg-blue-dark rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }} className="p-4 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border" onClick={handleAfternoon}>
                        <div className="bg-cover bg-top h-96 rounded-2xl md:h-48 lg:h-96 cursor-pointer" style={{ backgroundImage: 'url("../../src/assets/afternoon.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-lg font-bold mb-2 md:mx-2">Remember at Afternoon</h2>
                        <button className='antialiased  hover:bg-blue bg-blue-dark rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }} className="p-4 rounded-lg cursor-pointer md:p-1 lg:p-6 hover:border" onClick={handleNight}>
                        <div className="bg-cover bg-top h-96 rounded-2xl md:h-48 lg:h-96 cursor-pointer" style={{ backgroundImage: 'url("../../src/assets/night.jpg")' }}></div>
                        <h2 className="antialiased my-4 mx-12 text-lg font-bold mb-2 md:mx-2">Remember at Night</h2>
                        <button className='antialiased bg-blue-dark  hover:bg-blue rounded-full inline-block p-6 my-4 py-3 text-white'>Select</button>
                    </motion.div>
                    <p className="col-span-1 md:col-span-3 antialiased text-gray">The app will recognize the times you usually do the registration and will send you a reminder at the most convenient time for you within the chosen range.</p>
                </div>
            </div>
        </>
    )
}

export default Intro2
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import PatientCard from '../../Components/PatientCard/PatientCard';
import { loadUsers } from '../../Services/user_service';

function MyPatients() {

    const [patients, setPatients] = useState()
    //https://openmoji.org/data/color/svg/1F468-200D-1F9B2.svg
    const Patient = {
        "name": "Abel",
        "email": "abl.lopper@gmail.com",
    }
    
    useEffect(()=> {
        const handleUsers = async () => {
            const data = await loadUsers()
           setPatients(data)
        }
        handleUsers()
    },[])

    const handleCheck = () => {
        console.log(first)
    }

    return (
        <div className='col-span-12 md:col-span-11 h-screen p-8'>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                className='flex items-center h-20'>
                <h1 className='text-xl ml-4 antialiased font-bold text-gray-dark md:text-4xl'>My Patients</h1>
            </motion.div>

            {/* Patients container */}
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 1 }}
                className='flex items-center h-20 my-8 p-4'>

                {/* Patient Cards */}
                {patients && patients.length > 0 ? (
                    patients.map((patient, index) => (
                        <PatientCard key={index} Patient={patient} onClick={() => { handleCheck(patient.id) }} />
                    ))
                ) : (
                    <p>No users</p>
                )}

            </motion.div>
        </div>

    )
}

export default MyPatients
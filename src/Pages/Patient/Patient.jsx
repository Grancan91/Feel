import React, { useEffect, useState } from 'react'
import PatientCard from '../../Components/PatientCard/PatientCard';
import ProgressCard from '../../Components/ProgressCard/ProgressCard'
import { motion, AnimatePresence } from 'framer-motion';
import { loadPatientRecords } from '../../Services/record_service';
import ButtonCard from '../../Components/ButtonCard/ButtonCard';
import DetailCard from '../../Components/DetailCard/DetailCard';


function Patient() {
    const [records, setRecords] = useState([]);
    const [showPatient, setShowPatient] = useState(false);

    const [average, setAverage] = useState()


    useEffect(() => {

        setShowPatient(true);
        const loadData = async () => {
            const data = await loadPatientRecords()
            
            setAverage(data)
        }
        loadData()
    }, [])
    



    return (
        <>
            {/*Container*/}
            <div className='col-span-12 md:col-span-11 h-screen p-8'>
                {/*Header*/}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 1.0 }}
                    className='flex items-center h-20'>
                    <h1 className='text-4xl antialiased font-bold text-gray-dark'>{`${localStorage.getItem('patient_name')} Reports`}</h1>
                </motion.div>

                {/*Container of Records*/}
                <AnimatePresence>
                    {showPatient && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5 }}
                            className='grid grid-cols-1 md:grid-cols-3 gap-4'
                        >
                            <motion.div className='w-full h-full'>
                                {average && <ProgressCard
                                    TopList={average.emotions}
                                    Img={1}
                                    Variant={'bg-green'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />}
                            </motion.div>
                            <motion.div className='w-full h-full'>
                                <motion.div className='w-full h-full bg-violet' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    {average && <ProgressCard
                                        TopList={average.causes}
                                        Img={2}
                                        Variant={'bg-red'}
                                        initial={{ x: -100 }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.5 }}
                                    />}
                                </motion.div>
                            </motion.div>
                            <motion.div className='w-full h-full'>
                                {average && <ProgressCard
                                    TopList={average.strategies}
                                    Img={3}
                                    Variant={'bg-blue-dark'}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    <div>
                        <h2 className='text-2xl font-bold p-4'>Details of Logs</h2>
                    </div>
                    {showPatient && (
                        <motion.div
                            initial={{ opacity: 0, y: 500 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5 }}
                        >
                            {
                                average && average.details.map((detail, index) => {
                                    return detail !== '' && <DetailCard Detail={detail} />
                                })
                            }



                        </motion.div>
                    )}
                </AnimatePresence>



            </div>
        </>
    );
}

export default Patient
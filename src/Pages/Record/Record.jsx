import { useEffect, useState } from "react"
import ButtonCard from "../../Components/ButtonCard/ButtonCard"
import RecordCard from "../../Components/RecordCard/RecordCard"
import { loadRecords } from "../../Services/record_service"
import { motion, AnimatePresence } from 'framer-motion';

function Record() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await loadRecords();
            setRecords(data);
        };

        loadData();
    }, []);

    console.log(records);

    return (
        <>
            {/*Container*/}
            <div className='col-span-12 md:col-span-11 h-screen'>
                {/*Header*/}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 1.0 }}
                    className='flex items-center h-10 md:h-20 mt-2 p-4 '>
                    <h1 className='text-xl antialiased font-bold text-gray-dark md:text-3xl'>My Registers</h1>
                </motion.div>
                {/*Container Button Card*/}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full p-4">
                    <ButtonCard Button_text='Create new record' Detail_text="Start keeping track of your emotions and gain a deeper understanding of your emotional world!" Title_text='Create a new feelings log' Route={'/dashboard/NewRecord'} />
                </motion.div>
                {/*Container of Records*/}
                <AnimatePresence>
                    {records.length > 0 ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="box-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4"
                        >
                            {records.map((record, index) => (
                                <RecordCard key={index} Record={record} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex justify-center items-center h-1/2"
                        >
                            <div className="bg-red p-12 rounded text-white text-4xl">
                                Don't have records
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Record;

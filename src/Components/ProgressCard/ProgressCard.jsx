import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { loadAverageEmotions } from '../../Services/record_service';

function ProgressCard({ Title, TopList, Variant, Img }) {

    const VARIANT = {
        'bg-green': 'bg-green-xlight',
        'bg-red': 'bg-red-light',
        'bg-blue-dark': 'bg-blue-light'
    }

    const IMG = {
        1:'https://em-content.zobj.net/thumbs/160/apple/354/anatomical-heart_1fac0.png',
        2:'https://em-content.zobj.net/thumbs/120/apple/354/magnifying-glass-tilted-right_1f50e.png',
        3:'https://em-content.zobj.net/thumbs/120/apple/354/memo_1f4dd.png'
    }

    const [keys, setKeys] = useState();
    const [values, setValues] = useState();

    useEffect(() => {
        if (TopList) {
            setKeys(Object.keys(TopList));
            setValues(Object.values(TopList));
        }
    }, [TopList]);

    useEffect(() => {
        console.log(keys);
        console.log(values);
    }, [keys, values]);



    return (
        <>
            {/*Cards*/}
            <div className='rounded-xl p-4 bg-white'>
                <div className='flex items-center'>
                    <div className='w-fit h-fit p-2 rounded-full bg-slate-200'>
                        <img className='w-20' src={`${IMG[Img]}`} alt="" />
                    </div>
                    <div className='mx-4 text-2xl font-semibold'>{Title}</div>
                </div>
                {/*Cards*/}
                <div className='flex mt-4 justify-between'>
                    <div className=''>{keys && keys.length > 0 ? keys[0] : 'Loading'}</div>
                    <div>{values && values.length > 0 ? values[0] : 'Loading'}</div>
                </div>
                <div className={`w-full h-3 bg-gray-300 rounded-full ${VARIANT[Variant]} mt-2`}>
                    <motion.div
                        className={`h-full ${Variant} rounded-full`}
                        style={{ width: '0%' }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${values && values.length > 0 ? values[0] : '0%'}` }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                    
                </div>
                {/*Cards*/}
                <div className='flex mt-4 justify-between'>
                    <div className=''>{keys && keys.length > 0 ? keys[1] : 'Loading'}</div>
                    <div>{values && values.length > 0 ? values[1] : 'Loading'}</div>
                </div>

                <div className={`w-full h-3 bg-gray-300 rounded-full ${VARIANT[Variant]} mt-2`}>
                    <motion.div
                        className={`h-full ${Variant} rounded-full`}
                        style={{ width: '0%' }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${values && values.length > 0 ? values[1] : '0%'}` }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                </div>
                {/*Cards*/}
                <div className='flex mt-4 justify-between'>
                    <div className=''>{keys && keys.length > 0 ? keys[2] : 'Loading'}</div>
                    <div>{values && values.length > 0 ? values[2] : 'Loading'}</div>
                </div>
                <div className={`w-full h-3 bg-gray-300 rounded-full ${VARIANT[Variant]} mt-2`}>
                    <motion.div
                        className={`h-full ${Variant} rounded-full`}
                        style={{ width: '0%' }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${values && values.length > 0 ? values[2] : '0%'}` }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                </div>

            </div>

        </>
    )
}

export default ProgressCard
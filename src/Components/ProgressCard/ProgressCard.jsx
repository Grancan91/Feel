import React from 'react'

function ProgressCard({Title, TopList, Variant}) {

    const VARIANT = {
        'bg-green':'bg-green-xlight',
        'bg-red' :'bg-red-light',
        'bg-blue-dark':'bg-blue-light'
    }


    return (
        <>
            {/*Cards*/}
            <div className='rounded-xl p-4 bg-white'>
            <div className='flex items-center'>
            <div className='w-fit h-fit p-2 rounded-full bg-slate-200'>
                    <img className='w-20' src="https://openmoji.org/data/color/svg/2665.svg" alt="" />
            </div>
                    <div className='mx-4 text-2xl font-semibold'>Emotions</div>
            </div>
            {/*Cards*/}
                <div className='flex mt-4 justify-between'>
                <div className=''>Top Emotion 1</div>
                <div>60%</div>
                </div>
                <div className={`w-full h-3 bg-gray-300 rounded-full ${VARIANT[Variant]} mt-2`}>
                    <div className={`h-full ${Variant} rounded-full`} style={{ width: '60%' }}></div>
                </div>
                {/*Cards*/}
                <div className='mt-4'>Top Emotion 2</div>
                <div className={`w-full h-3 bg-gray-300 rounded-full ${VARIANT[Variant]} mt-2`}>
                    <div className={`h-full ${Variant} rounded-full`} style={{ width: '30%' }}></div>
                </div>
                {/*Cards*/}
                <div className='mt-4'>Top Emotion 3</div>
                <div className={`w-full h-3 bg-gray-300 rounded-full ${VARIANT[Variant]} mt-2`}>
                    <div className={`h-full ${Variant} rounded-full`} style={{ width: '20%' }}></div>
                </div>

            </div>

        </>
    )
}

export default ProgressCard
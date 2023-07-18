import React from 'react'

function PatientCard({Patient}) {

    console.log(Patient.name)

    return (
        <>
            {/*Patient Card*/}
            <div className='cursor-pointer mr-16'>
                <div className="w-28 h-28  rounded-full overflow-hidden">
                    <img className='object-cover border w-full h-full' src={`${Patient.img}`} alt=""/>
                </div>
                <div className='flex justify-center'>
                    <h3>{Patient.name}</h3>
                </div>
            </div>

        </>
    )
}

export default PatientCard
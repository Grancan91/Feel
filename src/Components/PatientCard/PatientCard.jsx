import React from 'react'

function PatientCard({Patient}) {

    console.log(Patient.name)

    return (
        <>
            {/*Patien Card*/}
            <div className='mr-16'>
                <div className={`w-fit h-fit p-2 rounded-full bg-slate-600`}>
                    <img className='w-20' src={`${Patient.img}`} alt="" />
                </div>
                <div className='flex justify-center'>
                    <h3>{Patient.name}</h3>
                </div>
            </div>

        </>
    )
}

export default PatientCard
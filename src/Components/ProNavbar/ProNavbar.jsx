import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function ProNavbar({selected = 'Home'}) {

    {/* Style to apply when is Active */ }
    const selectedStyle = 'opacity-100 bg-green rounded-full'

    {/* Set the Style when is Active */}
    const [home, setHome] = useState('opacity-50')
    const [record, setRecord] = useState('opacity-50')
    const [stats, setStats] = useState('opacity-50')
    const [diary, setDiary] = useState('opacity-50')
    const [settings, setSettings] = useState('opacity-100')
    const navigate = useNavigate()
    //const [changeListener, setChangeListener] = useState()



    //Pendiente capturar evento de cambio para establecer array de dependencia.

    const switchStyle = () => {
        if (selected === '/prodashboard/MyPatients'){
            setHome(selectedStyle)
                
        } else {
            setHome('opacity-50')
        }
        if (selected === '/dashboard/record' || selected === '/prodashboard/Patient') {
            setRecord(selectedStyle)
        } else {
            setRecord('opacity-50')
        }
        

        
    }
    const handleHome = () => {
        localStorage.removeItem('patient_id')
        localStorage.removeItem('patient_name')
        navigate('/prodashboard/MyPatients')
    }
    
    useEffect(()=>{
        switchStyle()
    },[selected])

    const handleExit = () =>{
        localStorage.clear()
        navigate('/login')
    }

    return (   

            <>
        
            <div className='flex bg-white md:rounded-tr-[30px] items-center md:flex-col md:h-screen md:w-32'>

                {/*'App Icon'*/}
                
                <div className='w-fit h-fit p-2 my-0 mx-2 divide-y md:my-6 md:p-10'>
                    <svg className="w-6 h-6 md:w-10 md:h-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                    </svg>
                </div>
                <hr className='md:w-full bg-gray-dark' />

                {/*'Home Button'*/}
               
                <div onClick={handleHome} className={`${home} w-fit h-fit p-2 my-2 mx-2 md:w-fit md:p-4 md:my-8 md:mx-0`}>
                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 20 18">
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                </div>
          
              

        
                <div className='w-full h-full'></div>
                {/*'Options Button'*/}
                <div onClick={handleExit} className={`${settings} w-fit h-fit p-2 my-2 mx-2 md:w-fit md:p-14 md:mx-0 cursor-pointer`}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                        <path stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                    </svg>
                    <div className='text-xl my-2'>Exit</div>
                </div>
            </div>
        </>
    )
}

export default ProNavbar
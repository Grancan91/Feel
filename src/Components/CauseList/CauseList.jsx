import React, { useEffect, useState } from 'react'
import { loadCauses } from '../../Services/cause_service'

function CauseList() {

    const [causes, setCauses] = useState([])
    const [selected, setSelected] = useState([])
    const [title, setTitle] = useState('Title')

    const arrCauses = []
    
    const onLoad = async () => {
        const data = await loadCauses()
        setCauses(data)
    }

    //onLoad()
    
    useEffect(()=>{
        onLoad()
    },[])
    console.log(causes)



    //Segun tipo de lista llamar al servicio que cargue los datos: 



    //comprobar si la causa esta en selected, y si lo esta devolver true
    const isSelected = () => {
        
    }

    return (
        <>
        {/*Container*/}
        <div className='border w-full'>
            {/*Title*/}
            <div>
                <h2 className='text-xl md:text-4xl'>{title}</h2>
            </div>
                {/*ListContainer*/}
                <div>
                    {/*List-Item*/}
                    <div className='flex justify-between p-4 border border-green cursor-pointer hover:bg-green-light'>
                        {arrCauses.map((cause)=>{
                        <>
                        {console.log('concha')}
                        <p>{cause}</p>
                        <input type="checkbox" id="" name="" value="" checked/>
                        </>
                    })}
                    </div>
                
                </div>
        </div>
        </>
    )
}

export default CauseList
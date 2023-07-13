import React, { useEffect, useState } from 'react'
import { loadCauses } from '../../Services/cause_service'
import { loadSymptoms } from '../../Services/symptom_service'
import { loadStrategy } from '../../Services/strategy_service'

function ListCard({ ListOf }) {

    const [listItem, setListItem] = useState([])
    const [selectedItem, setSelectedItem] = useState([])

    // 1. Listar causas, Sintomas y Estrategias en la bd segun el tipo de 
    // List que queremos cargar (Pasar por props)
    // 2. Al Seleccionar Causa
    //Guardar en array Selected
    //Aplicar Estilo Selected

    // Opción 2:  Enviar Array de elementos seleccionados al padre.
    //Llamar al servicio en el padre.


    const LIST = {
        'Causes': loadCauses(),
        'Symptoms': loadSymptoms(),
        'Strategies': loadStrategy(),
    };

    const loadList = async () => {
        let items = await LIST[ListOf]
        setListItem(items)
    }

    useEffect(() => {
        loadList()
    }, [])

    const handleCheck = (item) => {
        //Add to selectedItem when click.
        //If allready exist, delete from selectedItem
        if(selectedItem.indexOf(item) === -1){
            setSelectedItem([...selectedItem, item])
        } else {
            const arr = [...selectedItem]
            arr.splice(arr.indexOf(item), 1)
            setSelectedItem(arr)
        }
    }

    const handleButton = () => {
        //Add new
        console.log(selectedItem)
    }
    const styleSelected = () => {

        return 'visible'
    }

    return (
        <>
            {/*Container*/}
            <div className='w-full h-5/6 p-2'>
                {/*ListContainer*/}
                <div className='p-2 h-full simplebar scroll-auto md:scroll-y-contain overflow-auto md:hover:scroll-auto'>
                    {/*Title*/}
                    <h2 className='text-xl p-2 md:text-4xl'>{ListOf}</h2>
                    {/*List-Item*/}
                    {listItem.map((item, index) => (
                        <div
                            key={index} // Assuming each cause object has a unique 'id' property
                            className="flex justify-between p-4 border my-2  border-green cursor-pointer hover:bg-green-light"
                            onClick={()=> {handleCheck(item)}}
                        >
                            <p>{item.name}</p>
                            <div className={`w-fit h-fit ${styleSelected()}`}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='w-full antialiased bg-green-light rounded-full inline-block p-6 py-3 text-white hover:bg-green'
                    onClick={handleButton}>
                    Add New</button>
            </div>
        </>
    )
}

export default ListCard
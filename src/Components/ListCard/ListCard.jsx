import React, { useEffect, useState } from 'react'
import { loadCauses } from '../../Services/cause_service'
import { loadSymptoms } from '../../Services/symptom_service'
import { loadStrategy } from '../../Services/strategy_service'

function ListCard({ ListOf, handleData }) {

    const [listItem, setListItem] = useState([])
    const [selectedItem, setSelectedItem] = useState([])

    //Enviar Array de elementos seleccionados al padre.

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
        handleData(selectedItem)
    }, [selectedItem])

    const handleCheck = (item) => {
        //Add to selectedItem when click
        if (selectedItem.indexOf(item._id) === -1) {
            setSelectedItem([...selectedItem, item._id])
        } else {
            //If allready exist, delete from selectedItem
            const arr = [...selectedItem]
            arr.splice(arr.indexOf(item._id), 1)
            setSelectedItem(arr)
        }
    }
    //Add a new Cause/Symptom/Emotion
    const handleButton = () => {

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
                            className={`flex justify-between p-4 my-2 border border-gray-light rounded-lg cursor-pointer hover:bg-green-light ${selectedItem.includes(item._id) ? 'border rounded-lg border-green bg-lime-200' : ''}`}
                            onClick={() => { handleCheck(item) }}
                        >
                            <p>{item.name}</p>
                            <div className={`w-fit h-fit ${selectedItem.includes(item._id) ? 'visible':'invisible'}`}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                <button className='w-1/3 antialiased bg-green-light rounded-full inline-block p-6 py-3 text-white hover:bg-green'
                    onClick={handleButton}>
                    Add New</button>
                        </div>
            </div>
        </>
    )
}

export default ListCard
import React, { useEffect, useState } from 'react'
import EmotionCard from '../EmotionCardOld/EmotionCard'
import { loadEmotions } from '../../Services/emotion_service'

function ListEmotions({handleEmotions}) {

    //Enviar al padre los elementos seleccionados

    const [listEmotions, setListEmotions] = useState([])
    const [selectedItem, setSelectedItem] = useState([])

    const loadList = async () => {
        const data = await loadEmotions()
        setListEmotions(data)
    }
    useEffect(() => {
        loadList()
        handleEmotions(selectedItem)
    }, [selectedItem])
    
    const handleCheck = (item) => {
        //Add to selectedItem when click
        if (selectedItem.indexOf(item.id) === -1) {
            setSelectedItem([...selectedItem, item._id])
        } else {
            //If allready exist, delete from selectedItem
            const arr = [...selectedItem]
            arr.splice(arr.indexOf(item._id), 1)
            setSelectedItem(arr)
        }

    }

    return (
        <div className='flex p-2 gap-4 justify-center'>
            {listEmotions.map((item, index) => (
                <div key={index} 
                className={`w-1/6 cursor-pointer border border-gray-light md:p-2 rounded-2xl
                hover:bg-green-light ${selectedItem.includes(item._id) ? 'border border-green bg-lime-200': "" }`} onClick={() => { handleCheck(item) }}>
                    <h3 className='text-center md:text-4xl dark:text-gray-dark'>{item.name}</h3>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    )
}

export default ListEmotions
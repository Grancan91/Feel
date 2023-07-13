import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function EmotionCard({ selector, handleEmotion }) {

    const IMG = {
        1: "https://openmoji.org/data/color/svg/1F600.svg", //Happy
        2: "https://openmoji.org/data/color/svg/1F92C.svg", //Angry
        3: "https://openmoji.org/data/color/svg/1F628.svg", //Fear
        4: "https://openmoji.org/data/color/svg/1F622.svg", //Sad
        5: "https://openmoji.org/data/color/svg/1F615.svg", //Dont Know
    };

    const EMOTION = {
        1: "Happy", 
        2: "Angry", 
        3: "Fear", 
        4: "Sad", 
        5: "Dont Know", 
    };

    const [listEmotion, setListEmotion] = useState('')
    const [selectedEmotions, setSelectedEmotions] = useState('')

    const handleClick = () => {
        setListEmotion[EMOTION[selector]]
        
    }
    
    // handleEmotion(selectedEmotions)

    const handleCheck = (item) => {
        //Add to selectedItem when click.
        //If allready exist, delete from selectedItem
        if (selectedItem.indexOf(item) === -1) {
            setSelectedItem([...selectedItem, item])
            return false
        } else {
            const arr = [...selectedItem]
            arr.splice(arr.indexOf(item), 1)
            setSelectedItem(arr)
            return true
        }
    }


    return (
        <>
            <div className={`w-1/6 cursor-pointer border border-gray-light md:p-2 rounded-2xl hover:bg-green-light `} onClick={handleClick}>
            <h3 className='text-center md:text-4xl dark:text-gray-dark'>Happ</h3>
                <img src={IMG[selector]} alt="" />
        </div>
        </>
    )
}

export default EmotionCard
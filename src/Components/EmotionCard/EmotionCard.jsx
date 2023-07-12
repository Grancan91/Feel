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

    const [emotion, setEmotion] = useState('')

    const handleClick = () => {
        setEmotion[EMOTION[selector]]
        handleEmotion(emotion)
    }

    return (
        <>
            <div className='w-1/6 cursor-pointer border border-gray-light md:p-2 rounded-2xl hover:bg-green-light' onClick={handleClick}>
            <h3 className='text-center md:text-4xl dark:text-gray-dark'>Happy</h3>
                <img src={IMG[selector]} alt="" />
        </div>
        </>
    )
}

export default EmotionCard
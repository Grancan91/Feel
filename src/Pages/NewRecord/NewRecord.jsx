import React, { useEffect, useState } from 'react'
import ListCard from '../../Components/ListCard/ListCard'
import ListEmotions from '../../Components/ListEmotions/ListEmotions'
import { saveRecord } from '../../Services/record_service'

function NewRecord() {

    const [emotions, setEmotions] = useState([])
    const [causes, setCauses] = useState([])
    const [symptoms, setSymptoms] = useState([])
    const [strategies, setStrategies] = useState([])
    const [details, setDetails] = useState('')
    const [record, setRecord] = useState({})


    //Handle emotions from child ListEmotions
    const handleEmotions = (emotion) => {
        setEmotions(emotion)
    }
    //Handle causes from child ListCard
    const handleCauses = (cause) => {
        setCauses(cause)
    }
    //Handle symptoms from child ListCard
    const handleSymptoms = (symptoms) => {
        setSymptoms(symptoms)
    }
    //Handle strategies from child ListCard
    const handleStrategies = (strategies) => {
        setStrategies(strategies)
    }
    //Handle strategies from child ListCard
    const handleDetails = (input) => {
        setDetails(input.target.value)
    }

    const handleCancel = () => {
        //Go to back
    }
    const handleSave = () => {
        console.log(emotions, causes, symptoms, strategies)

        //Call to services to save.
        setRecord({
            "detail": details,
            "emotions": emotions,
            "causes": causes,
            "symptoms": symptoms,
            "strategies": strategies
        })
    
    }

    const handleRefresh = () =>{
        if (record.emotions) {
            const save = async () =>{
                await saveRecord(record)
        }
        save()
        }
    }
    
    useEffect(()=>{
        handleRefresh()
    },[record])

    

    return (
        <>
            {/*Container*/}
            <div className='col-span-11 h-screen md:p-0 md:mr-8'>
                {/*Header*/}
                <div className='flex items-center h-14 md:h-20'>
                    <h1 className='text-xl antialiased font-bold text-gray-dark md:text-4xl'>New Record</h1>
                </div>
                {/*Container Emotions Cards*/}
                <div className='shadow-sm bg-white rounded-2xl h-2/12'>
                    <h1 className='p-2 text-xl text-center md:text-4xl'>¿How have you been feeling?</h1>
                    <ListEmotions handleEmotions={handleEmotions} />
                </div>
                {/*Sections Container - Causes, Symptom, Strategy*/}
                <div className='bg-white my-4 md:h-2/4 md:flex shadow-sm rounded-2xl'>
                    <ListCard ListOf='Causes' handleData={handleCauses}/>
                    <ListCard ListOf='Symptoms' handleData={handleSymptoms} />
                    <ListCard ListOf='Strategies' handleData={handleStrategies} />
                </div>
                {/*Sections Container - Causes, Symptom, Strategy*/}
                <div className='bg-white md:h-fit my-4 p-2 md:p-10 gap-2 shadow-sm rounded-2xl md:flex'>

                    <input onChange={handleDetails} type="text" className='w-full md:w-2/3 border border-gray rounded-md my-2 md:text-4xl' />
                    {/*Button Container*/}
                    <div className='flex md:w-1/3 justify-between'>
                        <button className='md:w-1/2 antialiased text-red md:text-4xl border-red border rounded-xl p-6 py-3 md:mx-4 hover:bg-rose-200'
                            onClick={handleCancel}>
                            Cancel</button>

                        <button className='w-1/2 antialiased bg-green-light rounded-xl p-6 py-3 text-white md:text-4xl hover:bg-green'
                            onClick={handleSave}>
                            Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRecord
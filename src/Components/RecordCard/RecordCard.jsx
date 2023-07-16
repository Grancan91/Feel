import React from 'react'
import dayjs from 'dayjs';

function RecordCard({Record}) {

    const jsDate = new Date(Record.record_date);
    const formattedDate = dayjs(jsDate).format('D MMMM YYYY');

    //Cargar emociones del array y obtener las imagenes


    const handleClick = ()=>{
        console.log(Record)
    }

    return (
        <>
            {/*Container Card*/}
            <div className='p-2 bg-white border border-gray rounded-md md:rounded-xl '>

                {/*Header Card Container*/}
                <div className='flex items-center p-2 ' onClick={handleClick}>
                    <div className='text-xl md:text-2xl mr-2 md:mr-4'>{formattedDate}</div>
                    {/*IMG Meter div por imagen*/}
                    <div className=' flex h-10 w-10 md:w-12 md:h-12'>
                        <img src="" alt="" />
                        {Record.emotions.map((emotion, index) => {
                            return <img key={index} src={`${emotion.img}`} alt="" />
                        })}
                    </div>
                    {/*IMG Meter div por imagen*/}
                </div>
                <div className='p-0 md:text-xl'>{Record.detail}</div>
                {/*Grid for List*/}
                <div className='grid grid-cols-3 p-2'>
                    <div className=''><b>Causes</b>
                        {Record.causes.map((cause, index)=>{
                            return <div key={index}>{cause.name}</div>
                        })}
                    </div>
                    <div><b>Symptoms</b>
                        {Record.symptoms.map((symptom, index) => {
                            return <div key={index}>{symptom.name}</div>
                        })}
                    </div>
                    <div><b>Strategies</b>
                        {Record.strategies.map((strategy, index) => {
                            return <div key={index}>{strategy.name}</div>
                        })}
                    </div>

                </div>

            </div>
        </>
    )
}

export default RecordCard
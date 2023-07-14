import { useEffect, useState } from "react"
import ButtonCard from "../../Components/ButtonCard/ButtonCard"
import RecordCard from "../../Components/RecordCard/RecordCard"
import { loadRecords } from "../../Services/record_service"

function Record() {

    const [records, setRecords] = useState([])

    useEffect(() => {

        const loadData = async () => {
            const data = await loadRecords()
            setRecords(data)

        }

        loadData()

    }, [])

    const handleClick = () => {
    }
console.log(records)
    if (records.length > 0) {
        return (
            <>
                {/*Container*/}
                <div className='col-span-12 md:col-span-11 h-screen'>
                    {/*Header*/}
                    <div className='flex items-center h-20'>
                        <h1 className='text-xl antialiased font-bold text-gray-dark md:text-4xl'>My Registers</h1>
                    </div>
                    {/*Container Button Card*/}
                    <div className="w-full p-2">
                        <ButtonCard Button_text='Create new record' Title_text='Crear nuevo registro de sentimientos' Detail_text='¡Comienza a registrar tus sentimientos y obtén una visión más profunda de tu mundo emocional!' Route={'/dashboard/NewRecord'} />
                    </div>
                    {/*Container of Records*/}
                    <div className="box-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
                        {records.map((record, index) => {
                            return <RecordCard key={index} Record={record} />
                        })}

                    </div>
                    <button onClick={handleClick}>asdasdasd</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                {/*Container*/}
                <div className='col-span-12 md:col-span-11 h-screen'>
                    {/*Header*/}
                    <div className='flex items-center h-20'>
                        <h1 className='text-xl antialiased font-bold text-gray-dark md:text-4xl'>My Registers</h1>
                    </div>
                    {/*Container Button Card*/}
                    <div className="w-full p-2">
                        <ButtonCard Button_text='Create new record' Title_text='Crear nuevo registro de sentimientos' Detail_text='¡Comienza a registrar tus sentimientos y obtén una visión más profunda de tu mundo emocional!' Route={'/dashboard/NewRecord'} />
                    </div>
                    {/*Container of Records*/}
                    <div className="flex justify-center items-center h-1/2">
                        <div className="bg-red p-12 rounded text-white text-4xl">
                        Dont have record's
                        </div>
                    </div>

                </div>
            </>
        )
    }

}

export default Record
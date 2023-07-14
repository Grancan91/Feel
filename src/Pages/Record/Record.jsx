import ButtonCard from "../../Components/ButtonCard/ButtonCard"
import RecordCard from "../../Components/RecordCard/RecordCard"

function Record() {
 

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
                    <ButtonCard Button_text='Return to Records' Title_text='Crear nuevo registro de sentimientos' Detail_text='¡Comienza a registrar tus sentimientos y obtén una visión más profunda de tu mundo emocional!' Route={'/dashboard/NewRecord'} />
                </div>
                {/*Container of Records*/}
                <div className=" w-full p-2 flex flex-wrap">
                    <RecordCard/>
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />

                </div>
            </div>
        </>
    )
}

export default Record
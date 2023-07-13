import ButtonCard from "../../Components/ButtonCard/ButtonCard"

function Record() {
 

    return (
        <>
            {/*Container*/}
            <div className='col-span-11 h-screen p-2 md:p-2'>
                {/*Header*/}
                <div className='flex items-center h-20'>
                    <h1 className='text-xl antialiased font-bold text-gray-dark md:text-4xl'>My Registers</h1>
                </div>
                {/*Container Button Card*/}
                <div>
                <ButtonCard/>
                </div>
            </div>
        </>
    )
}

export default Record
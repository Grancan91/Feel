import React from 'react'
import ButtonCard from '../../Components/ButtonCard/ButtonCard'

function SavedRecord() {
    return (
        <div className='col-span-11 h-screen'>

            {/*Container*/}
            <div className='w-full h-full my-2 md:my-0 flex justify-center items-center'>
                {/*Container Button*/}
                <div className=' w-full md:w-2/3 h-1/3 flex justify-center items-center'>
                    <ButtonCard Button_text='Return to Records' Title_text='Record Saved' Detail_text='Your Record have been saved correctly' Route={'/dashboard/Record'} />
                </div>


            </div>


        </div>
    )
}

export default SavedRecord
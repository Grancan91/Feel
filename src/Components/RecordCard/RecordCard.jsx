import React from 'react'

function RecordCard() {
    return (
        <>
            {/*Container Card*/}
            <div className='md:w-1/3 p-2 bg-white border border-gray rounded-md md:rounded-xl'>

                {/*Header Card Container*/}
                <div className='flex items-center p-2 '>
                    <div className='text-xl md:text-4xl mr-2 md:mr-4'>16/06/2023</div>
                    {/*IMG Meter div por imagen*/}
                    <div className=' flex h-10 w-10 md:w-12 md:h-12'>
                        <img src="https://openmoji.org/data/color/svg/1F92C.svg" alt="" />
                        <img src="https://openmoji.org/data/color/svg/1F92C.svg" alt="" />
                        <img src="https://openmoji.org/data/color/svg/1F92C.svg" alt="" />
                    </div>
                    {/*IMG Meter div por imagen*/}
                </div>
                <div className='p-2 md:text-xl'>Texto de los detalles, toma heroma detalle con paloma. Pa que lo goze y toa la traca
                    no es el lugar, pero asadero la semana q viene pa relax with cafe con leche.
                </div>
                {/*Grid for List*/}
                <div className=' grid grid-cols-3 p-2'>
                    <div>col1
                        <div>List Item 1</div>
                    </div>
                    <div>col1
                        <div>List Item 1</div>
                    </div>
                    <div>col1
                        <div>List Item 1</div>
                        <div>List Item 1</div>
                        <div>List Item 1</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default RecordCard
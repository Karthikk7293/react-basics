import React, { useEffect } from 'react'

const Banner = () => {

    useEffect(() => {


        return () => {
            console.log();
        }

    }, [])

    const handlePing = useCallback(() => {
        first
    },
        [second])


    // const handlePing = () => {

    //     // alert("clicked")
    // }

    const handleFocus = () => {
        // alert("focused")
    }

    const handleLeave = () => {
        // alert("leave")
    }
    return (
        <div className=' bg-slate-200 h-auto pt-32  '>
            <div className="sm:w-3/4  mx-auto flex  justify-around   flex-col-reverse sm:flex-row    ">

                <div className=" w-5/6 mx-auto py-3 ">
                    <h3 className='sm:text-2xl text-xl text-center sm:text-start text-green-400 capitalize'>see whats am doing!</h3>
                    <h1 className='sm:text-5xl text-4xl text-center sm:text-start text-blue-950 font-bold pt-3 pb-5'>Hi Am <span className='text-red-600'>K</span>arthik </h1>
                    <p className='text-blue-950 italic text-center sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur dolore eligendi fugiat, minima ratione quis doloribus amet itaque incidunt ipsa numquam ab quidem, harum modi. Soluta, adipisci? Distinctio, magnam.</p>
                    <div className='text-center pt-5'>
                        <button onMouseEnter={(() => handleFocus())} onClick={(() => handlePing())} className='border shadow rounded-sm px-3 py-1 uppercase text-xs border-green-300 bg-green-400 text-white'>ping me</button>
                    </div>
                </div>
                <div className="  mx-auto flex justify-center items-center w-full ">
                    <img onMouseLeave={handleLeave} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YXoZKi6l7P0Lm952zHtLWLvLdiZxrhyjuQ&s" alt="banner" />
                </div>

            </div>


        </div>
    )
}

export default Banner

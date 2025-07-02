import React, { useEffect, useState } from 'react'

function ProfilePage() {
    const [image, setImage] = useState(null)

    useEffect(() => {
        let data = localStorage.getItem('imageFile')
        if (data) {
            setImage(JSON.parse(data))
        }
    }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center '>
            <img className='w-1/3 h-auto' src={image} alt="" />
        </div>
    )
}

export default ProfilePage
import React from 'react'
import { useState } from 'react'

function HomePage() {
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s")

  const handleChange = (event) => {
    const imageFile = event.target.files[0]
    if (imageFile) {
      const reader = new FileReader()
      reader.onload = () => {
        const imageResult = reader.result
        setImage(imageResult)
      }
      reader.readAsDataURL(imageFile)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('imageFile', JSON.stringify(image))
    alert("image file handled successfully!")


  }
  return (
    <div className=' w-full h-screen bg-green-200   flex justify-around items-center'>
      <div className=" w-1/3 h-1/2 border border-green-500 flex flex-col justify-center items-center">
        <div className='border border-red-400'>

          <img className='w-full h-[15rem]' src={image} alt="" />
        </div>
        <form onSubmit={handleSubmit} className=' w-full py-3 text-center  ' action="">
          <input onChange={handleChange} type="file" className=' ' />
          <button className='border rounded shadow-md bg-red-400 px-3 mt-5 text-white uppercase'>submit</button>
        </form>
      </div>
      <div className=" w-1/3 h-1/2 border border-blue-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati in illo reiciendis dolorum autem quod consectetur ad, sit vel repellat quo recusandae, omnis deleniti. Id accusamus consectetur assumenda dolores?
      </div>
    </div>
  )
}

export default HomePage

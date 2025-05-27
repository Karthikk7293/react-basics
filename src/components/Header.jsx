import React, { useState } from 'react'

function Header() {

  const [data, setData] = useState(0)
  const [name, setName] = useState('karthik')

  const handleClick = () => {
    console.log("clicked");
    setData(5)
    setName("some name")
  }

  return (
    <div className=' fixed w-full   my-5 flex justify-around items-center'>
      <div className="border  sm:rounded-md bg-blue-200 border-blue-400  w-full py-2 sm:w-3/4 h-full flex justify-between sm:justify-center items-center">

        <div className="w-1/3  flex justify-center items-center ">
          <span className='  '>
            <img width={40} src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png" alt="avatar" className='' />
          </span>
          <p className='text-blue-800 text-xs'>think different</p>
        </div>

        <div className="w-1/3  sm:flex justify-between items-center hidden">
          <a className='text-sm uppercase text-green-500' href="">Home</a>
          <a className='text-sm uppercase text-green-500' href="">Home</a>
          <a className='text-sm uppercase text-green-500' href="">{name}</a>
        </div>
        <div className="  flex justify-center gap-3 items-center w-1/3">
          <button onClick={handleClick} className='border bg-green-400 hover:bg-green-600 text-white shadow-lg py-1 px-3 rounded-sm uppercase text-xs'>login</button>
          <span className='border  rounded-full'>
            <img width={40} height={40} src="https://static.vecteezy.com/system/resources/previews/048/216/761/non_2x/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="avatar" className='' />
          </span>
          <span>{data}</span>
        </div>


      </div>
    </div>
  )
}

export default Header

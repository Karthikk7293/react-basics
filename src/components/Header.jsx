import React from 'react'

function Header() {
  return (
    <div className='w-100 h-10 border border-y-pink-600 mb-5 flex justify-around items-center'>
      <div className="border w-1/3 ">
        image
      </div>
      <div className=" border border-blue-500 w-1/2 flex justify-center items-center gap-2">
        <a className='text-red-300 hover:text-red-600' href="">Home</a>
        <a className='text-red-300 hover:text-red-600' href="">About</a>
        <a className='text-red-300 hover:text-red-600' href="">Service</a>
        <a className='text-red-300 hover:text-red-600' href="">Contact</a>
      </div>
    </div>
  )
}

export default Header

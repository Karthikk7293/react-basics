import React from 'react'

function Footer() {
  return (
    <div className='w-100 h-10 border fixed bottom-0 w-full border-y-pink-600 mb-5 flex justify-around items-center'>
      <div className="border w-1/3 ">
        image
      </div>
      <div className=" border border-blue-500 w-1/2 flex justify-center items-center gap-2">
        <a className='text-red-300 hover:text-red-600' href="">Home</a>
        <a className='text-red-300 hover:text-red-600' href="">About</a>
        <a className='text-red-300 hover:text-red-600' href="">Service</a>
        <a className='text-red-300 hover:text-red-600' href="">Contact</a>
      </div>
      <Button>
        hello
      </Button>
    </div>
  )
}

export default Footer

const Button = ({ children }) => {
  return (
    <div>
      <button className='border px-5 py-2 bg-green-400 text-white uppercase hover:bg-green-600 hover:border-blue-500 rounded-full '>{children}</button>
    </div>
  )
}
export const FooterButton = Button

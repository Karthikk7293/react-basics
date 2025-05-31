import React, { useEffect, useState } from 'react'

function AboutPage() {

  const [state, setState] = useState(null)


  const fetchData = async () => {
    const json = await fetch('https://fakestoreapi.com/products/1')
    const res = await json.json()
    setState(res)

  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 3000);
  }, [])

  if (!state) {
    return (
      <div className='w-full h-screen flex justify-center items-center bg-blue-600'>
        not found!
      </div>
    )

  } else {
    return (
      <div className='border w-full h-screen border-red-500 bg-red-200  flex justify-around items-center'>
        <div className=" w-1/3 h-1/2 border border-green-500">
          <img src={state?.image} alt="" />

        </div>
        <div className=" w-1/3 h-1/2 border border-blue-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati in illo reiciendis dolorum autem quod consectetur ad, sit vel repellat quo recusandae, omnis deleniti. Id accusamus consectetur assumenda dolores?
        </div>

      </div>
    )
  }



}

export default AboutPage

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductsPage = () => {

    const { name, isLoggedIn } = useSelector((state) => state.user)

    const [products, setProducts] = useState([])
    const handleFetchProducts = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products')
            const response = await data.json()
            console.log(response);

            setProducts(response)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        if (isLoggedIn) {

            handleFetchProducts()
        }
    }, [isLoggedIn])

    return (
        <div className='w-full  bg-red-400'>
            <div className="">
                <h2>{name}</h2>
                <p className='text-blue-500 text-3xl text-center font-bold pt-10 '>All Products</p>
            </div>
            <div className="grid grid-cols-3">
                {products.map((item, index) => (
                    <Link to={`/product/${item.id}`} key={index}>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={item.image} alt="Sunset in the mountains" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{item.title}</div>
                                <p class="text-gray-700 text-base">
                                    {item.descrption} </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProductsPage
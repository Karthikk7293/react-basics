import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const { productId } = useParams()
    const [productDetails, setProductDetails] = useState({})

    console.log(productId);

    const getProductDetails = async (id) => { // decleration --parameter
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`)
            const response = await data.json()
            console.log(response);
            setProductDetails(response)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (productId) {
            getProductDetails(productId)// involk or call --aurgument 
        }

    }, [productId])



    return (
        <div className='h-full w-full '>
            <div className="grid grid-cols-2 gap-2 p-10">
                <div className=" shadow-2xl rounded-xl flex justify-center items-center p-4 border ">
                    <img width={300} src={productDetails?.image} alt="" />
                </div>
                <div className="border rounded-xl p-5">
                    <p className='text-4xl'>{productDetails?.title}</p>
                    <p className='text-xl'>{productDetails?.description}</p>
                    <p className=''>{productDetails?.category}</p>
                    <p className='text-green-600'>$ {productDetails?.price}</p>
                    <p className=''> rating: <span className='text-green-600'>{productDetails?.rating?.rate}</span> count:<span className='text-green-600'>{productDetails?.rating?.count}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
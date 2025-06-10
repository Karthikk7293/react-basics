import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductWithId } from '../api/products'

function ProductPage() {
    const { productId } = useParams()
    const { productDetails } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(fetchProductWithId(productId))
        }

    }, [productId, dispatch])



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
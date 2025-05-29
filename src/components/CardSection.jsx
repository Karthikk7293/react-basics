import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';

function CardSection() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0)

    const handleInc = () => {
        setCount((prev) => prev + 1)
    }

    const handleFetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setData(json)
            })

        // axios.get('https://fakestoreapi.com/products').then((res) => {
        //     console.log(res);
        //     setData(res.data)

        // })
    }


    useEffect(() => {
        handleFetchData()
        return () => {
            console.log("hello");
        }
    }, [])





    return (
        <div className='border py-5 border-gray-900 '>
            <button onClick={handleInc} className='border'>click me,</button>
            count:{count}

            <div className="">
                {data?.map((item, index) => (
                    <Card tile={item.title} image={item.image} description={item.description} key={index} />
                ))}
            </div>
        </div>
    )
}

export default CardSection

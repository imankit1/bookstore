import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
 
import{ Link } from "react-router-dom"

function Course() {
    return (
        <>
            <div className='`max-w-screen-2xl continer mx-auto md:px-20 px-4'>
                <div className="mt-28 item-center justify-center text-center">
                    <h1 className='text-2xl font-semibold md:text-4xl'>
                        We're delighted to have you {" "}<span className='text-green-700'>Here :)</span></h1>
                    <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis sint modi unde atque voluptates consectetur ea recusandae molestiae eaque repudiandae libero nostrum voluptatem aut expedita in, quasi fuga deserunt?</p>
                   <Link to="/">
                   <button className=' mt-6 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300'>Back</button>
                   </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {list.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Course
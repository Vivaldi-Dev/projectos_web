import React, { useState } from 'react'
import { data } from '../data/data.js'

function Food() {
    console.log(data)
    const[foods,setfoods] = useState(data)
    return (

        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center '> Top Reted Menu Items</h1>


            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700 '>Filter Type</p>
                    <div className='flex justify-center flex-wrap'>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>All </button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Burguer</button>
                        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Pizza</button>
                        <button className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Salads</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Chicken</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>All</button>
                    </div>

                </div>

                <div>
                    <p className='font-bold text-gray-700 '>Filter Price</p>
                    <div className='justify-between max-w-[390px] w-full'>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>All </button>
                        <button  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>$</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>$$</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>$$$</button>
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>$$$$</button>
                    </div>


                </div>
            </div>

            <div className='grid grid-cols-2  lg:grid-cols-4  gap-6 pt-4'>
                {
                    foods.map((item,index)=> (
                        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' key={index}>
                          <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt="{item.image}" />   
                          <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</p>
                            </div>   
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Food

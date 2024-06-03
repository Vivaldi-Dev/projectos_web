import React from 'react'


import img1 from '@assets/product/p-1.jpg';
import img2 from '@assets/product/p-2.jpg';
import img3 from '@assets/product/p-3.jpg';
import img4 from '@assets/product/p-4.jpg';
// import img5 from '@assets/product/p-5.jpg';
// import img6 from '@assets/product/p-6.jpg';
// import img7 from '@assets/product/p-7.jpg';

const ProductsData = [

  {
    id: 1,
    image: img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },

  {
    id: 2,
    image: img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },

  {
    id: 3,
    image: img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    image: img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  }



]


function Products() {
  return (
    <div>

      <div className='container'>

        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2 '>
          <h1 className='text-3xl font-bold'> Our Products</h1>
          <p className='text-x5 text-gray-400'>Explore Our Produts</p>

        </div>

        <div className='mb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'> {/* Card section */}
            {
              ProductsData.map((data) => (
                <div className='group' key={data.id}>
                  <div className='relative'>
                    <img className='h-[180px] w-[260px] object-cover rounded-md' src={data.image} alt="" />

                    {/* hover button */}
                    <div className='hidden group-hover:flex absolute 
                    top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
                    h-full w-full text-center
                     group-hover:backdrop-blur-sm justify-center items-center duration-1000'>

                      <button className='bg-red-500 text-white px-2 rounded-full p-1'> Add to cart</button>
                    </div>

                  </div>



                  <div className='leading-7'>
                    <h2 className='font-semibold'>{data.title}</h2>
                    <h2 className='font-bold'>{data.price}</h2>
                  </div>
                </div>

                
              ))
            }
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'> {/* Card section */}
            {
              ProductsData.map((data) => (
                <div className='group' key={data.id}>
                  <div className='relative'>
                    <img className='h-[180px] w-[260px] object-cover rounded-md' src={data.image} alt="" />

                    {/* hover button */}
                    <div className='hidden group-hover:flex absolute 
                    top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
                    h-full w-full text-center
                     group-hover:backdrop-blur-sm justify-center items-center duration-1000'>

                      <button className='bg-red-500 text-white px-2 rounded-full p-1'> Add to cart</button>
                    </div>

                  </div>



                  <div className='leading-7'>
                    <h2 className='font-semibold'>{data.title}</h2>
                    <h2 className='font-bold'>{data.price}</h2>
                  </div>
                </div>

                
              ))
            }
          </div>
        </div>


      </div>

    </div>
  )
}

export default Products

import React from 'react'

import Image2 from '@assets/category/gaming.png';
import Image3 from '@assets/category/vr.png';
import Image4 from '@assets/category/speaker.png';

function Category_2() {
  return (
    <div className='py-8'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

           {/* primeiro card */}
           <div className='col-span-2  py-10 pl-5 bg-gradient-to-br from-gray-300/90
           to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Laptop</p>
                <button className='text-white-500 bg-red-500 px-4 rounded-full p-1 duration-500 hover:p-2'>
                  Browse
                </button>
              </div>

            </div>
            <img src={Image2} alt="" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' />
          </div>

          {/* Segudo card */}

          <div className='py-10 pl-5 bg-gradient-to-br from-black/90
           to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gadget</p>
                <button className='text-yellow-500 bg-white px-4 rounded-full p-1 '>
                  Browse
                </button>
              </div>

            </div>
            <img src={Image3} alt="" className='w-[320px] absolute -right-4 lg:top-[40px]' />
          </div>

         

          <div className='py-10 pl-5 bg-gradient-to-br from-black/90
           to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex  items-start'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                <button className='text-brandBlue bg-primary px-4 rounded-full p-1 '>
                  Browse
                </button>
              </div>

            </div>
            <img src={Image4} alt="" className='w-[200px] absolute bottom-0 right-0' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Category_2



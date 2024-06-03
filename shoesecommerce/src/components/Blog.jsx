import React from 'react'

import img1 from '@assets/blogs/blog-1.jpg';
import img2 from '@assets/blogs/blog-2.jpg';
import img3 from '@assets/blogs/blog-3.jpg';


const BlogData=[
  {
    title:"How to choose perfect smartwatch",
    subtitle:"minini facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis mariores molestiae laudantim.Porro",
    published:"Jan 20, 2024 by Dilshad ",
    image:img1,
  },
  {
    title:"How to choose perfect gadget",
    subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudatium. Porro? ",
    published:"Jan 20, 2024 by Satya",
    image:img2,
  },

  {
    title:"How to choose perfect VR headeset",
    subtitle:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudatium. Porro? ",
    published:"Jan 20, 2024 by Satya",
    image:img3,
  },
]

function Blog() {
  return (
    <div>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2 '>
          <h1 className='text-3xl font-bold'>Recent News</h1>
          <p className='text-x5 text-gray-400'>Explore Our Produts</p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
         gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {
            BlogData.map((data)=>(
              <div key={data.id}>
                  <div className='overflow-hidden rounded-2xl mb-2'>
                    <img className='w-full h-[200px] object-cover rounded-2xl hover:scale-105 duration-500' src={data.image} alt="" />
                  </div>
                  <div>
                    <p className='text-xs text-gray-500'>{data.published}</p>
                    <p className='font-bold line-clamp-1'>{data.title}</p>
                    <p className='line-clamp-2 text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blog

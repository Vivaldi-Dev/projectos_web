
import React from 'react'
import Image1 from '@assets/hero/headphone.png';

const BannerData = [
    {
        discount: "30% OFF",
        title: "Fine Smile",
        date: "10 jan to 28 jan",
        image: Image1,
        title2: "Air solo bass",
        title3: "Winter sale",
        title4: "Lorem ipsum, dolor sit consectetur adipisicing elit Eaque reiciendis",
        bgcolor: "#f42c37",
    }
];


function Banner() {
    return (
        <div className='min-h-[550px] flex justify-center items-center mt-5'>
            <div className='container'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl  bg-red-500 ">
                    <div className='p-6 sm:p-8'>
                        {
                            BannerData.map((data) => (
                                <div key={data.id}>
                                    <p>{data.discount}</p>
                                    <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                                    <p className='text-sm'>{data.date}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className='h-full flex justify-center items-center  '>
                        {
                            BannerData.map((data) => (
                                <div key={data.id}>
                                    <img src={data.image} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto 
                               drop-shadow 2xl object-cover' />
                                </div>
                            ))
                        }

                    </div>

                    <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                        {
                            BannerData.map((data) => (
                                <div key={data.id}>

                                    <p className='font-bold text-xl'>{data.title2}</p>
                                    <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                                    <p className='text-sm tracking-wide leading-5'>{data.title4}</p>

                                    <button className=' text-white py-2 px-4 rounded bg-red-600 mt-2 rounded-full'>
                                        Shop Now
                                    </button>

                                </div>

                            ))

                        }


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner

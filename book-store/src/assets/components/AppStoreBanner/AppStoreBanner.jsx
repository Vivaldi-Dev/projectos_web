import React from 'react'
import BoardImg from "../../website/board.png"
import playstore from "../../website/play_store.png"
import appstore from "../../website/app_store.png"

const bannerImg = {

    backgroundImage: `url(${BoardImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",

}
const AppStoreBanner = () => {
    return (
        <div className='py-10  dark:bg-gray-900'>
            <div className='bg-gray-100 dark:bg-gray-800 text-white py-10 ' style={bannerImg}>
                <div className='container'>
                    <div className='text-2xl text-center sm:text-4xl font-semibold'>
                        <h1>Read Book at your fingertips</h1>
                        <div className='flex flex-wrap justify-center items-center gap-4'>
                            <a href="#">
                                <img src={playstore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                            </a>

                            <a href="#">
                                <img src={appstore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AppStoreBanner

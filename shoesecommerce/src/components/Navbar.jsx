
import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';



const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "shop",
        link: "/#shop",
    },

    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Blog",
        link: "/#Blog",
    },
]

function Navbar() {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container flex justify-between gap-4'>
                    {
                        <div className='flex  items-center gap-4'>
                            <a href="" className='text-primary font-semibold 
                tracking-widest text-2xl uppercase sm:text-3xl'>Eshop</a>
                            <div className='hidden lg:block'>
                                <ul className='flex items-center gap-4'>
                                    {
                                        MenuLinks.map((data, index) => (
                                            <li key={index}>
                                                <a className='inline-block px-4 font-semibold
                                                 text-gray-500 hover:text-black' href={data.link}>
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    }

                    {/* Right section*/}
                    <div className='flex justify-between items-center gap-4 '>
                        <div className='relative group hidden sm:block'>
                            <input className='search-bar' placeholder='Search' type="text" name="" id="" />
                            <IoMdSearch className='text-xl text-gray-600 dark:text-gray-600 
                            group-hover:text-primary duration-200 absolute top-1/2 -translate-y-1/2 right-3' />

                        </div>

                        <button className='relative p-3'>
                            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute
                             top-0 right-0 items-center justify-center text-xs '>
                                    4
                            </div>
                        </button>
                    </div>

                    {/* Dark mod*/}
                    <div>
                        <DarkMode/>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Navbar

import React from 'react'
import Logo from "../../assets/website/logo.png";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#services"
    }

];

const DropDownLinks = [
    {
        name: "Trending Books",
        link: "/#"
    },
    {
        name: "Best Selling",
        link: "/#"
    },
    {
        name: "Authors",
        link: "/#"
    }

];

function Navbar() {
    return (
        <div className='shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200'>
            <div className='container py-3 sm:py-0'>
                <div className="flex justify-between items-center">
                    <div>
                        <a className='font-bold text-2xl sm:text-3xl flex gap-2' href="">
                            <img className='w-10' src={Logo} alt="" />
                            books
                        </a>

                    </div>
                    <div className='flex items-center justify-between gap-4 '>
                        
                        <ul className='items-center gap-4  hidden sm:flex sm:text-[10px] md:text-[15px]'>
                            {
                                Menu.map((menu, index) => (
                                    <li key={index}>
                                        <a className='inline-block py-4 px-4 hover:text-primary duration-200' href={menu.link} key={index}>
                                            {
                                                menu.name
                                            }
                                        </a>
                                    </li>
                                ))
                            }
                            <li className='group relative cursor-pointer'>
                                <a className='flex h-[72px] items-center gap-[2px]' href="">Quick Links
                                    <span>
                                        <FaCaretDown className='transition duration-300 group-hover:rotate-180' />
                                    </span>
                                </a>
                                {/* Dropdown */}
                                <div className='absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]'>
                                    <ul>

                                        {
                                            DropDownLinks.map((data, index) => (
                                                <li key={index}>
                                                    <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20' href={data.link}>
                                                        {
                                                            data.name
                                                        }
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </li>

                        </ul>

                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 
                        py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>
                            Order
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                        </button>

                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
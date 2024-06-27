import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import footerlogo from "../../website/logo.png"

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className='py-10  dark:bg-gray-950'>
            <div className='container'>
                <div className='grid md:grid-cols-3 py-5'>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Books Store</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque eligendi
                            et dolor tenetur voluptatibus fugit eveniet odio eius corrupti similique?
                        </p>
                        <br />
                        <div className='flex items-center gap-3 mt-2'>
                            <FaLocationArrow />
                            <p>Vladimir Lenine</p>
                        </div>

                        <div className='flex items-center gap-3 mt-4'>
                            <FaMobileAlt />
                            <p>+91 123456789</p>
                        </div>

                        <div className='flex items-center gap-3 mt-4'>
                            <a href="">
                                <FaInstagram className='text-3xl' />
                            </a>

                            <a href="">
                                <FaFacebook className='text-3xl' />
                            </a>

                            <a href="">
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data,index)=>(
                                            <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-black-300'>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                               
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data,index)=>(
                                            <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-black-300'>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                               
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data,index)=>(
                                            <li className='cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-black-300'>
                                                <span>&#11162;</span>
                                                <span>{data.title}</span>
                                               
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer

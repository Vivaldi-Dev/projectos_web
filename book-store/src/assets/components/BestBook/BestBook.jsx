import React from 'react'
import Book1 from "../../books/book1.jpg";
import Book2 from "../../books/book2.jpg"
import Book3 from "../../books/book3.jpg"
// import Book2 from "../../assets/books/book2.jpg";
// import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
    {
        id: 1,
        img: Book1,
        title: "Who's there",
        rating: 5.0,
        author: "Someone",
    },
    {
        id: 2,
        img: Book2,
        title: "His Life",
        rating: 4.5,
        author: "John",
    },
    {
        id: 3,
        img: Book3,
        title: "Lost boys",
        rating: 4.7,
        author: "Lost Girl",
    },

];

const BestBook = () => {
    return (
        <div className='py-10  dark:bg-gray-900'>
            <div className='container'>
                <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Trending Books</p>
                    <h1 className='text-3xl'>Best Books</h1>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta nisi optio officiis
                        a unde similique provident temporibus dolorum fuga.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center'>

                    {
                        booksData.map((data, index) => (
                            <div className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                             dark:hover:bg-primary hover:text-white relative shadow-xl duration group max-w-[300px]'>
                                <div className='h-[100px] w-[250px]'>
                                    <img src={data.img} alt="" className='max-w-[100px] block mx-auto transform -translate-y-1/4 group-hover:scale-105 duration-300 shadow-md' />
                                </div>
                                <div className='p-4 text-center'>
                                    <div className='w-full flex items-center justify-center'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.rating}</p>
                                    <button className=' bg-gradient-to-r from-primary to-secondary
                                     text-white px-4 py-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>
                                        Order Now
                                    </button>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default BestBook

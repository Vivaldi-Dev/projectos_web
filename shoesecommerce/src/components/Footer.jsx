import React from 'react'
import { FaLocationArrow, FaInstagram ,FaFacebook,FaLinkedin,FaMobileAlt} from 'react-icons/fa'

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
]

function Footer() {
  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
          <div className='py-8 px-4'>
            <a className='text-primary font-semibold tracking-widest 
                    text-2xl uppercase sm:text-3xl' href="#">Eshop</a>
            <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p className='text-gray-600 mt-4'>Made with by the Coding Journey </p>
          </div>

          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a className='text-gray-500 hover:text-black duration-300' href={data.link}>
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* second col */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Link</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a className='text-gray-500 hover:text-black duration-300' href={data.link}>
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* second col */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Adress</h1>
              <div className=''>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow className='text-3xl hover:text-primary duration-300'/>
                  <p>Noida,Uttar Pradesh</p>
               
                </div>

                <div className='flex items-center gap-3 mt-6'>
                  <FaMobileAlt  className='text-3xl hover:text-primary duration-300'/>
                  <p>+91 123456789</p>
                </div>

                <div className='flex items-center gap-3 mt-6'>
                  <a href="">
                    <FaInstagram  className='text-3xl hover:text-primary duration-300'/>
                  </a>

                  <a href="">
                    <FaFacebook  className='text-3xl hover:text-primary duration-300'/>
                  </a>

                  <a href="">
                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                  </a>
                </div>

              </div>




            </div>




          </div>




        </div>
      </div>
    </div>
  )
}

export default Footer

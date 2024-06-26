import { useState } from 'react'
import './index.css'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero/Hero'
import BestBook from './assets/components/BestBook/BestBook'
import Banner from './assets/components/Banner/Banner'
import AllBooks from './assets/components/AllBooks/AllBooks'
import AppStoreBanner from './assets/components/AppStoreBanner/AppStoreBanner'


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <BestBook />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
      </div>
    </>
  )
}

export default App

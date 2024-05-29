import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HeadlineCards from './components/HeadlineCards.jsx'
import Food from './components/Food.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
    <HeadlineCards/>
    <Food/>


  </React.StrictMode>,
)

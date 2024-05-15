import React from 'react'
import '../styles/home.css'
import bgVideo from '../assets/video.mp4'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar color={"rgba(255,255,255,0.34)"} link={"#fff"}/>
      <div className='home'>
      <video muted autoPlay loop id="video">
        <source src={bgVideo}></source>
      </video>
      <div className="content">
        <h1>Welcome to,</h1>
        <h1>Aditya's Code Carnival.</h1>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home

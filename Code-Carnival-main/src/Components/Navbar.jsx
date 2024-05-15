import React from 'react'
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = ({ color, link }) => {
  const [isOpen,setOpen] = useState(false);
  const handleClick=()=>{
    setOpen(!isOpen)
  }
  const menu =
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
  const close =
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
  return (
    <div className='navbar' style={{ backgroundColor: color }}>
      <header>
        <div className='nav-head'>
        <Link to='/'>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src={logo} height={"40px"} width={"40px"}/>
          <h2>ACC.</h2>
          </div>
        </Link>
        <div onClick={handleClick} className='nav-res'>
        {isOpen?close:menu}
        </div>
        </div>
        <nav style={{ color: link }} className={isOpen?"nav-active":"nav"}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/coding">EVENT REPORTS</Link>
          <Link to="/questions">QUESTIONS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/news">ANNOUNCEMENTS</Link>
         
        </nav>
      </header>
    </div>
  )
}

export default Navbar

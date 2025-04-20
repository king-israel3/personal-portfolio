import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
    
  const showNavBar=()=> setIsOpen(!isOpen)
    
  return (
    <section className='header'>
      <div className='logo'>
        <a href=''>Home</a>
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#footer'>Contact</a></li>
        </ul> 
      </nav>
      <div className='menu-container' onClick={showNavBar}>
        {isOpen ? <FaTimes className='menu-icon'/> : <FaBars className='menu-icon'/>}
      </div>
    </section>
  )
}

export default Header

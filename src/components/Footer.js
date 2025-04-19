import React from 'react'
import { FaXTwitter, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <section className='footer' id='footer'>
      <main className="footer-links">
        <div>
            <h3>Akpoyovware Ovie Israel</h3>
            <p>Frontend Web Developer</p>
            <p>Delta, Nigeria</p>
        </div>

        <div>
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About Me</a></li>
                {/* <li><a href="#projects">Projects</a></li> */}
                <li><a href="/My_CV.docx" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
        </div>

        <div>
            <h4>Contact & Socials</h4>
            <ul>
                <li>Email: <a href="mailto:israellogan@gmail.com">israellogan@gmail.com</a></li>
                <li>Phone: <a href="tel:+2347048460309">+2347048460309</a></li>
                <ul className='footer-socials'>
                    <li><a href=''><FaXTwitter/></a></li>
                    <li><a href='www.linkedin.com/in/israel-akpoyovware-239351246'><FaLinkedin/></a></li>
                    <li><a href='https://wa.me/+2347048460309'><FaWhatsapp/></a></li>
                    <li><a href='https://www.instagram.com/king_israel6/'><FaInstagram/></a></li>
                </ul>
            </ul>
        </div>
      </main>

      <main className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Akpoyovware Ovie Israel. All rights reserved.</p>
        <p>Designed by <b><a href='/'>Akpoyovware Ovie Israel</a></b></p>
      </main>
    </section>
  )
}

export default Footer
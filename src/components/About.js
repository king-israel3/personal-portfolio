import React from 'react'
import portfolioImg from '../assets/me/portfolio-img.jpg'

function About() {
  return (
    <section className='about' id='about'>
      <h2 className='heading-text' data-aos="fade-down">About <span>Me</span></h2>
      <main className='about-details'>
        <div data-aos="fade-right">
          <img src={portfolioImg} className="about-img" alt="Israel - Full Stack MERN Developer"/>
        </div>
        <div className='about-details-text' data-aos="fade-left">
          <p>I'm a full-stack web developer from Nigeria who enjoys building sleek, mobile-responsive web applications with MongoDB, Express, React, Node.js, and CSS.</p>

          <p>My coding journey began through platforms like FreeCodeCamp, where I earned my first Responsive Web Design certificate in February 2024. Since then, I've continued learning and building real-world projects through hands-on practice and mentorship.</p>

          <p>I value clean, reusable code and user-focused design. Outside of coding, I enjoy exploring UI trends, watching movies, playing video games, and keeping up with football and tech content.</p>

          {/* <a href="/My_CV.docx" className="cta-button" download>📄 Download My resume (Word)</a> */}
        </div>
      </main>
    </section>
  )
}

export default About

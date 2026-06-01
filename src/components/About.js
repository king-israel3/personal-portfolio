import React from 'react'
import portfolioImg from '../assets/me/portfolio-img.jpg'

function About() {
  return (
    <section className='about' id='about'>
      <h2 className='heading-text'>About <span>Me</span></h2>
      <main className='about-details'>
        <div>
          <img src={portfolioImg} className="about-img" alt="Israel - Full Stack MERN Developer"/>
        </div>
        <div className='about-details-text'>
          <p>I'm a full-stack web developer from Nigeria with a strong foundation in frontend development and growing experience in backend technologies. I enjoy turning ideas into sleek, mobile-responsive web applications using MongoDB, Express, React, Node.js, and CSS</p>

          <p>I began my coding journey through online platforms like FreeCodeCamp, where I earned my first certificate in Responsive Web Design in February 2024. Since then, I've been building, and learning one project at a time, guided by both hands-on practice and mentorship.</p>

          <p>I write clean, reusable code and design with the user in mind. Outside of coding, I enjoy exploring UI trends, improving my design skills, watching movies, playing video games and occasionally catching up on football highlights or tech YouTube channels.</p>

          {/* <a href="/My_CV.docx" className="cta-button" download>📄 Download My resume (Word)</a> */}
        </div>
      </main>
    </section>
  )
}

export default About

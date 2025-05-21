import React from 'react'
import me from '../assets/me.png'

function About() {
  return (
    <section className='about' id='about'>
      <h2 className='heading-text'>About <span>Me</span></h2>
      <main className='about-details'>
        <div className='about-details-imgBx'>
          <div className="image-wrapper">
            <div className="shape shape-blue"></div>
            <div className="shape shape-red"></div>
            <div className="shape shape-white"></div>
            <img src={me} alt="About Me" className="about-img" />
          </div>
        </div>
        <div className='about-details-text'>
            <p>I'm a self-taught web developer from Nigeria with a strong focus on frontend development. I enjoy turning ideas into clean, responsive interfaces using HTML, CSS, and JavaScript.</p>

            <p>I started my coding journey through online platforms like FreeCodeCamp, where I earned my first certificate in Responsive Web Design in Feb, 2024. Since then, I've been building, and learning — one project at a time.</p>

            <p>I write clean, reusable code and design with the user in mind. Outside of coding, I love exploring UI trends, improving my design sense, watching movies, playing video games and occasionally catching up on football highlights or tech YouTube channels.</p>

            <a href="/My_CV.docx" className="cta-button" download>📄 Download My resume (Word)</a>
        </div>
      </main>
    </section>
  )
}

export default About

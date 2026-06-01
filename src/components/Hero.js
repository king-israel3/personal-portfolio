import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <main className='intro'>
        <h1>Hi, I'm Israel</h1>
        <h2>A Full-Stack MERN Developer</h2>
        <p style={{marginBottom: '1.2rem'}}>I build sleek, mobile-responsive full-stack web applications using MongoDB, Express, React, Node.js, and CSS.</p>
        <a href="#projects" className="cta-button">View My Works</a>
      </main>
    </section>
  )
}

export default Hero

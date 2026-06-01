import React from 'react'
import './Style.css'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Header from './Header'
import Footer from './Footer'

function Home(){
    return(
        <section className='home'>
            <Header/>
            <Hero/>
            <About/>
            <Projects/>
            <Skills/>
            {/* <Testimonials/> */}
            <Footer/>
        </section>
    )
}

export default Home
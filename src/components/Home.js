import React from 'react'
import './Style.css'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
// import Testimonials from './Testimonials'
import Footer from './Footer'

function Home(){
    return(
        <section>
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
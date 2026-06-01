import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa';

import realEstateWebsiteProjectDesktop from "../assets/my-works/real-estate-website.jpg"
import musicWebsiteProjectDesktop from "../assets/my-works/music-website.png"
import restaurantWebsiteProjectDesktop from "../assets/my-works/restaurant-website2.png"

import comingSoon from "../assets/my-works-mockup/coming-soon-background-illustration-template-design-free-vector1.jpg"
import telegramBotDashboardProject from "../assets/my-works-mockup/telegram-bot/projects-mockup.jpg"
import twitterVideoDownloaderProject from "../assets/my-works-mockup/twitter-video-downloader/projects-mockup.jpg"
import quizWebsiteGlimpse from "../assets/my-works-mockup/quiz-website/Screenshot(1979).png"

function Projects() {
  const navigate = useNavigate()
  return (
    <section className='projects' id='projects'>
      <h2 className='heading-text'>My Works</h2>
      <p className='projects-subtext'>Below are my recent projects, with more currently in development.</p>
            {/* <div className='all-projects-column-caption desktop-view-projects-caption'>
              <p>desktop view of a blogging website</p>
              <p>album countdown for a music website</p>
              <p>sponsors and footer of music website</p>
              <p>replicated mobile view of <a href='https://www.jumia.com.ng/'>Jumia's</a> landing page</p>
              <p>real estate website</p>
            </div> */}
      
      <main className='all-projects-grids'>
        <div className='project-card'>
          <img src={quizWebsiteGlimpse} alt='quiz-website'/>
          <div className='project-details'>
            <h2>Quiz Website</h2>
            <p>A full-stack quiz website where you partake in questions & answers. You can also view your history & compete with other users to climb up the leaderboard</p>
            <div className='used-langs-container'>
              <span className='used-langs'>mongoDB</span>
              <span className='used-langs'>Express</span>
              <span className='used-langs'>React</span>
              <span className='used-langs'>Node.js</span>
              <span className='used-langs'>CSS</span>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={twitterVideoDownloaderProject} alt='twitter-video-downloader-website'/>
          <div className='project-details'>
            <h2>Twitter video downloader Website</h2>
            <p>A full-stack website to download X (Twitter) videos, with captions. Fast, free, and secure — no login or app required</p>
            <div className='used-langs-container'>
              <span className='used-langs'>mongoDB</span>
              <span className='used-langs'>express</span>
              <span className='used-langs'>react</span>
              <span className='used-langs'>Node.js</span>
              <span className='used-langs'>CSS</span>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={realEstateWebsiteProjectDesktop} alt='real-estate-website'/>
          <div className='project-details'>
            <h2>Real Estate Website</h2>
            <p>A frontend-only website that shows the available houses, both for sale and rent, with dynamic routing and pagination</p>
            <div className='used-langs-container'>
              <span className='used-langs'>react</span>
              <span className='used-langs'>CSS</span>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={telegramBotDashboardProject} alt='telegram-bot-dashboard-website'/>
          <div className='project-details'>
            <h2>Telegram Bot + Dashboard</h2>
            <p>A Telegram moderation bot featuring user verification, scheduled messaging, activity logging, and a web-based admin dashboard.</p>
            {/* <p>A telegram bot that welcomes users and verifies them. If they fail the verification question - with an attempts range or don't answer on time, they get kicked out. The bot can also mute & unmute users, ban & unban users, as well as kick out & warn users. Admins can keep an eye on the group via logging into the dashboard as well as send scheduled messages e.g rules reminder for all newly verified users</p> */}
            <div className='used-langs-container'>
              <span className='used-langs'>CSS</span>
              <span className='used-langs'>React</span>
              <span className='used-langs'>Node.js</span>
              <span className='used-langs'>Express</span>
              <span className='used-langs'>PostgreSQL</span>
              <span className='used-langs'>Redis</span>
              <span className='used-langs'>pgAdmin 4</span>
            </div>
            {/* <button onClick={() => window.open("https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID", "_blank")} className='cta-button'><FaPlay/> Watch Demo</button> */}
          </div>
        </div>
        <div className='project-card'>
          <img src={comingSoon} alt='coming-soon'/>
          <div className='project-details'>
            <h2>Something nice is coming</h2>
            <p>Anticipate!</p>
            {/* https://www.youtube.com/playlist?list=PL4cUxeGkcC9g4YJeBqChhFJwKQ9TRiivY */}
            {/* <div className='used-langs-container'>
              <span className='used-langs'>mongoDB</span>
              <span className='used-langs'>Express</span>
              <span className='used-langs'>React</span>
              <span className='used-langs'>Node.js</span>
              <span className='used-langs'>CSS</span>
            </div> */}
          </div>
        </div>
      </main>
      {/* <button className='cta-button'>See More</button> */}
    </section>
  )
}

export default Projects
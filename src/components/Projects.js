import React from 'react'
import realEstateWebsiteProjectDesktop from "../assets/my-works/real-estate-website.jpg"
import realEstateWebsiteProjectMobile from "../assets/my-works/real-estate-website(responsive).png"
import jumiaRePlicaWebsiteProjectDesktop from "../assets/my-works/jumia-replica-website.png"
import jumiaRePlicaWebsiteProjectMobile from "../assets/my-works/jumia-replica-website(responsive).png"
import musicWebsiteProjectDesktop from "../assets/my-works/music-website.png"
import musicWebsiteProjectMobile from "../assets/my-works/music-website(responsive).png"
import restaurantWebsiteProjectDesktop from "../assets/my-works/restaurant-website2.png"
import blogWebsiteProjectDesktop from "../assets/my-works/blog-website.png"

function Projects() {
  return (
    <section className='projects' id='projects'>
      <h2 className='heading-text'>My <span>Works</span></h2>
      <main className='all-projects'>
        <div className='all-projects-column'>
          <div className='all-projects-column-img-text'>
            <div className="desktop-view-wrapper">
              <img src={realEstateWebsiteProjectDesktop} className="desktop-view-projects"/>
            </div>
            <div className='all-projects-column-caption desktop-view-projects-caption'>
              <p>desktop view of real estate website that shows the available houses with dynamic routing</p>
            </div>
          </div>
          <div className='all-projects-column-img-text'>
            <img src={realEstateWebsiteProjectMobile}/>
            <div className='all-projects-column-caption'>
              <p>mobile view of real estate website that shows the available houses with dynamic routing and pagination</p>
            </div>
          </div>
          <div className='all-projects-column-img-text'>
            <img src={restaurantWebsiteProjectDesktop} className="desktop-view-projects"/>
            <div className='all-projects-column-caption desktop-view-projects-caption'>
              <p>desktop view of a restaurant website</p>
            </div>
          </div>
        </div>
        <div className='all-projects-column'>
          <div className='all-projects-column-img-text'>
            <img src={jumiaRePlicaWebsiteProjectMobile}/>
            <div className='all-projects-column-caption'>
              <p>replicated mobile view of <a href='https://www.jumia.com.ng/'>Jumia's</a> landing page</p>
            </div>
          </div>
          <div className='all-projects-column-img-text'>
            <img src={jumiaRePlicaWebsiteProjectDesktop}/>
            <div className='all-projects-column-caption'>
              <p>replicated desktop view of <a href='https://www.jumia.com.ng/'>Jumia's</a> landing page</p>
            </div>
          </div>
        </div>
        <div className='all-projects-column'>
          <div className='all-projects-column-img-text'>
            <img src={musicWebsiteProjectDesktop}/>
            <div className='all-projects-column-caption'>
              <p>sponsors and footer of music website</p>
            </div>
          </div>
          <div className='all-projects-column-img-text'>
            <img src={musicWebsiteProjectMobile}/>
            <div className='all-projects-column-caption'>
              <p>album countdown for a music website</p>
            </div>
          </div>
          <div className='all-projects-column-img-text'>
            <img src={blogWebsiteProjectDesktop} className="desktop-view-projects"/>
            <div className='all-projects-column-caption desktop-view-projects-caption'>
              <p>desktop view of a blogging website</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Projects
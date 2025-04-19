import React from 'react'
import client1 from '../assets/clients/Ellipse4.png'
import client2 from '../assets/clients/Ellipse5.png'
import client3 from '../assets/clients/client3.jpg'

function Testimonials() {
  return (
    <section className='testimonials' id='testimonials'>
      <h2 className='heading-text'>client <span>reviews</span></h2>
        <main className='skillsets'>
            <div className='skillsets-column'>
                <div className='skillset'>
                    <div class="client-profile">
                        <img src={client1} alt="" class="client-img"/>
                        <div class="client-data">
                            <h3>Asuquo James</h3>
                            <span>asuquojames29@gmail.com</span>
                        </div>
                    </div>
                    
                    <p>CSS3 is where I bring designs to life. I'm confident in styling responsive device layouts, implementing animations, and using modern techniques like Flexbox and Grid to create visually appealing, user-friendly interfaces.</p>
                </div>
                <div className='skillset'>
                    <div class="client-profile">
                        <img src={client2} alt="" class="client-img"/>
                        <div class="client-data">
                            <h3>Alisigwe Joy</h3>
                            <span>alisigwejoy@gmail.com</span>
                        </div>
                    </div>
                    
                    <p>CSS3 is where I bring designs to life. I'm confident in styling responsive device layouts, implementing animations, and using modern techniques like Flexbox and Grid to create visually appealing, user-friendly interfaces.</p>
                </div>
                <div className='skillset'>
                    <div class="client-profile">
                        <img src={client3} alt="" class="client-img"/>
                        <div class="client-data">
                            <h3>Nwokwo Bobby</h3>
                            <span>bobbybadoo@gmail.com</span>
                        </div>
                    </div>
                    
                    <p>CSS3 is where I bring designs to life. I'm confident in styling responsive device layouts, implementing animations, and using modern techniques like Flexbox and Grid to create visually appealing, user-friendly interfaces.</p>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Testimonials
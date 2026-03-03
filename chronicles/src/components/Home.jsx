import React from 'react'
import './style.css'
import video from '../assets/background-video.mp4'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from '../assets/images/img9.jpg'
import img2 from '../assets/images/img10.jpg'
import img3 from '../assets/images/img11.jpg'
import img4 from '../assets/images/img12.jpg'
import img5 from '../assets/images/img13.jpg'
import img6 from '../assets/images/img14.jpg'
import img7 from '../assets/images/img15.jpg'
import img8 from '../assets/images/img16.jpg'
import img9 from '../assets/images/img18.jpg'

function Home() {
  return (
    <div>
        <div className="video-background">
            <div>
                <Navbar/>
            </div>
            <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4"/>
            </video>
            <div className='home-main-container'>
                <h1>Your Life, Framed in Art.</h1>
                <p>
                  "Life is a collection of fleeting moments, and I’m here to make sure they stick. From the quiet, unscripted glances to the high-energy milestones that define your journey, I blend technical precision with an artist’s eye for emotion. Whether we’re capturing the intimacy of a portrait, the vibrancy of a global destination, or the raw energy of the streets, my goal is to create more than just images—I want to craft a visual legacy that feels as real as the moment it was taken. Welcome to a space where your story is the masterpiece."
                </p>
                <div className='home-main-container-button-flex'>
                <button>view portfolio</button>
                <button>book a session</button>
                </div>
            </div>
        </div>
        <div className='home-second-container'>
          <h1>Recent Works</h1>
          <div  className='home-second-container-flex1'>
          <div><img src={img1} alt="" /></div>
          <div><img src={img3} alt="" /></div>
          <div><img src={img5} alt="" /></div>
          </div>
          <div className='home-second-container-buttons'>
            <button>Love Chronicles </button>
            <button>World Chronicles</button>
            <button>Fashion chronicles</button>
          </div>
          <div className='home-second-container-flex2'>
          <div><img src={img2} alt="" /></div>
          <div><img src={img4} alt="" /></div>
          <div><img src={img6} alt="" /></div>
          </div>
        </div>
        <div className='home-third-container'>
          <h1>About Me </h1>
          <div className='home-third-container-flex'>
            <p>
             "I’ve always believed that a camera is more than just a tool; it’s a way to see the world through the lens of your joy. I don’t want to just document what you look like—I want to capture who you are to the people who love you most.

              Based in Kerala and traveling wherever stories take me, it is a massive privilege to be invited into your most sacred spaces and trusted with your most vulnerable moments. I'm here to ensure the heartbeat of your story is never forgotten. 
            </p>
            <div><img src={img9} alt="" /></div>
          </div>    
        </div>        
            {/* <div>
              <Footer/>
            </div> */}
    </div>
  )
}

export default Home
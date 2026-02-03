import React from 'react'
import Navbar from './Navbar'
import video from '../assets/background-video.mp4'
import Footer from './Footer'
import './style.css'
function Reviews() {
  return (
    <div className='review-container'>
        <div className='video-background3'>
        <div>
            <Navbar/>
        </div>
        <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4"/>
        </video> 
        </div>

    </div>
  )
}

export default Reviews
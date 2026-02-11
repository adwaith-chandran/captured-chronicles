import React from 'react'
import axios from 'axios';
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
        <h1>rsrdtffjgcugcugcgcucg</h1>
        <h2>hjgkhggjbhkjjkjjhlj</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore enim dolorem saepe recusandae suscipit et doloremque nam iusto in totam. Quam reiciendis numquam nostrum ipsam aliquid possimus dolore impedit eligendi?</p>
        </video> 
        </div>
    </div>
  )
}

export default Reviews
import React from 'react'
import './style.css'
import video from '../assets/background-video.mp4'
import Navbar from './Navbar'
import img1 from '../assets/images/img22.jpg'
import img2 from '../assets/images/img23.jpg'
import img3 from '../assets/images/img24.jpg'
import img4 from '../assets/images/img25.jpg'
import img5 from '../assets/images/img26.jpg'
import img6 from '../assets/images/img27.jpg'
import img7 from '../assets/images/img28.jpg'
import img8 from '../assets/images/img29.jpg'
import img9 from '../assets/images/img30.jpg'
import img10 from '../assets/images/img31.jpg'
import img11 from '../assets/images/img32.jpg'
import img12 from '../assets/images/img33.jpg'
import img13 from '../assets/images/img34.jpg'
import img14 from '../assets/images/img35.jpg'
import img15 from '../assets/images/img36.jpg'
import img16 from '../assets/images/img37.jpg'
import img17 from '../assets/images/img38.jpg'
import img18 from '../assets/images/img39.jpg'
function Portfolio() {
  return (
    <div className='portfolio container'>
        <div className='video-background2'>
            <div>
                <Navbar/>
            </div>
            <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4"/>
            </video>
            <div className='portfolio-main-container'>
              <h1>"Moments that matter, documented for a lifetime."</h1>
              <p>Welcome to the gallery of Captured Chronicles. To me, photography is about more than just a perfectly composed frame; it’s about the feeling that lives within it. Whether I am blending into the background to capture a candid, fleeting smile or meticulously directing a stylized scene to perfection, my goal remains the same: to create honest, timeless visuals that tell your story exactly as it felt.</p>
            </div>
         </div>   
            <div className='portfolio-second-container'>
              <h1>LOVE CHRONICLES</h1>
              <div className='portfolio-second-container-flex1'>
                <div><img src={img1} alt="" /></div>
                <div><img src={img2} alt="" /></div>
                <div><img src={img3} alt="" /></div>
              </div>
              <div className='portfolio-second-container-flex2'>
                <div><img src={img4} alt="" /></div>
                <div><img src={img5} alt="" /></div>
                <div><img src={img6} alt="" /></div>  
              </div> 
            </div>
            <div className='portfolio-third-container'>
              <h1>STYLE CHRONICLES</h1>
              <div className='portfolio-third-container-flex1'>
                <div><img src={img7} alt="" /></div>
                <div><img src={img8} alt="" /></div>
                <div><img src={img9} alt="" /></div>
              </div>
              <div className='portfolio-third-container-flex2'>
                <div><img src={img10} alt="" /></div>
                <div><img src={img11} alt="" /></div>
                <div><img src={img12} alt="" /></div>  
              </div> 
            </div>   
            <div className='portfolio-fourth-container'>
              <h1>WORLD CHRONICLES</h1>
              <div className='portfolio-fourth-container-flex1'>
                <div><img src={img13} alt="" /></div>
                <div><img src={img14} alt="" /></div>
                <div><img src={img15} alt="" /></div>
              </div>
              <div className='portfolio-fourth-container-flex2'>
                <div><img src={img16} alt="" /></div>
                <div><img src={img17} alt="" /></div>
                <div><img src={img18} alt="" /></div>  
              </div> 
            </div>
            <div className='portfolio-fifth-container'>
              <h1>The Technical & Professional Standard</h1>
              <h2>The Toolkit</h2>
              <p> While the eye behind the lens is what creates the story, I believe in using industry-leading technology to ensure every frame is delivered with the highest clarity and color accuracy. <br />

                  <h3>Primary System:</h3> Professional-grade Sony full-frame mirrorless systems. <br />

                  <h3>Optics:</h3> A curated collection of G-Master prime lenses for that signature "Captured Chronicles" bokeh and sharpness. <br />

                  <h3>Lighting:</h3> Portable, high-speed strobe kits for consistent results in any environment, from dark landscapes to bright commercial sets. <br />

                  <h3>Post-Processing:</h3> Every image is individually hand-edited to ensure a timeless, high-end finish.
              </p>
              <button>Book a Session</button>
            </div>                     
    </div>
  )
}

export default Portfolio
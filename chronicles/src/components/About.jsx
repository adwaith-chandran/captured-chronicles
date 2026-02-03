import React from 'react'
import Navbar from './Navbar'
import video from '../assets/background-video.mp4'
// import img from '../assets/img1.jpg'
import Footer from './Footer'
function About() {
  return (
<div>
    <div className="video-background3">
            <div>
                <Navbar/>
            </div>
            <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4"/>
            </video>
        <div className='about-main-container'>
            <h1>ABOUT US</h1>
            <p>Captured Chronicles is driven by passion—a passion for artistic expression, telling stories, and preserving life's precious memories. <br />

            <br />
                Memories can fade, but photographs let moments live on. At Captured Chronicles, we create an experience making <br /> you feel relaxed and taken care of throughout the process. We will be there from our initial meeting <br /> and planning stages to selecting images for your wall and album. I want you to relive and feel what <br /> you felt years from now every time you look at your album or glance at your stunning wall art from <br /> that special day.
            </p>
            <button>Book A Session</button>
        </div>
    </div>
        <div className='about-bg1'>
        <div className='about-second-container'>
                
                <h2>About Captured Chronicles</h2>
                <p>
                    "Life isn't one-dimensional, and neither is my photography."
                    Welcome to Captured Chronicles. I am Adwaith Chandran, the photographer and storyteller behind the lens.

                    I founded Captured Chronicles with a simple belief: the world is too beautiful to limit how we see it. Whether it is the raw emotion of a wedding, the striking geometry of architecture, the polished elegance of fashion, or the untouched beauty of nature—I am driven to document it all.

                <h3>The Holistic Approach</h3>
                    Many photographers stick to one lane, but I find that my diverse experience makes me a better artist.

                    Nature taught me patience and how to work with unpredictable light.

                    Fashion taught me direction, posing, and the art of style.

                    Events taught me to anticipate moments before they happen.

                    When you hire Captured Chronicles, you aren't just getting a "wedding photographer" or a "travel photographer." You are getting a visual artist who brings a complete toolkit of skills to your unique project.
                </p>
        </div>
        </div>  
        <div className='about-bg2'>      
        <div className='about-third-container'>
                <p>
                <h3>My Chronicles: What I Capture</h3>
                    I specialize in a wide spectrum of photography genres, bringing a consistent, high-quality aesthetic to each:

                <h4> The Love Chronicles (Weddings & Events):</h4> Documenting your celebrations with a blend of candid emotion and cinematic grandeur. I capture the tears, the laughter, and the legacy.

                <h4>The Style Chronicles (Fashion & Portraits):</h4> Editorial-style shoots that highlight personality, branding, and beauty. From high-fashion concepts to professional headshots.

                <h4>The World Chronicles (Travel & Nature):</h4> Freezing the majesty of landscapes and the vibrancy of street life. Bringing the textures of the world into focus.
                </p>
        </div>
        </div>
        <div className='about-bg3'>
        <div className='about-fourth-container'>
                <p>
                <h2>Adwaith S Chandran</h2>
                    Based in [Kerala, India], I am a student of light and a keeper of memories.

                    For me, photography is a discipline of observation. It is about seeing what others might ignore. Whether I am trekking a mountain for the perfect sunrise or navigating a crowded banquet hall to find the bride's grandmother smiling, my commitment remains the same: Technical excellence and emotional authenticity.

                    When I put down the camera, I am usually [exploring new places / curating photo books / experimenting with film], always looking for new inspiration to bring back to my work.
                <h3>Let's Create Together</h3>
                    No matter the subject, I am ready to frame it.

                    Planning a Wedding?

                    Launching a Fashion Line?

                    Need Stunning Travel Imagery?

                    Let's discuss how we can turn your vision into a lasting chronicle.

                    [Contact Adwaith] | [Explore the Full Portfolio]
                </p>
                <button>BOOK NOW</button>
        {/* <div><Footer/></div>         */}
        </div>
        </div>

                
                
</div>
  )
}

export default About
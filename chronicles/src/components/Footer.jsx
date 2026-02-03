import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        {/* Top Section: Navigation & Info */}
      <div className="footer-top">
        <div className="footer-column-one">
          <h3>NAVIGATE</h3>
          <a href="/">home</a>
          <a href="/about">about</a>
          <a href="/blog">blog</a>
          <a href="/proofing">client proofing</a>
        </div>

        <div className="footer-column">
          <h3>FIND US</h3>
          <p>Adwaith chandran<br />Parimath villa,Soyus lane</p>
          <p>224567578869</p>
          <a href="adwaithschandran09@gmail.com">adwaithschandran09@gmail.com</a>
        </div>

        <div className="footer-column">
          <h3>Let's Talk</h3>
          <a href="/contact" className="action-link">Click Here</a>
        </div>

        <div className="footer-column">
          <h3>Book Now</h3>
          <a href="/book" className="action-link">Click Here</a>
        </div>
      </div>

      {/* Middle Section: Text & Locations */}
      <div className="footer-middle">
        <p>406 Photo: Timeless Wedding Photography &nbsp;|&nbsp; Member Wedding & Portrait Photographers International</p>
        <p className="locations">Bozeman • Big Sky • Livingston • National • International</p>
      </div>

      {/* Bottom Section: Logos */}
      <div className="footer-logos">
        {/* Replace src with your actual image paths */}
        <img src="https://placehold.co/100x60?text=WPPI" alt="WPPI" />
        <img src="https://placehold.co/150x60?text=PPA" alt="PPA" />
        <div className="circle-logo">
          <img src="https://placehold.co/100x100?text=The+Knot" alt="The Knot" />
        </div>
        <img src="https://placehold.co/200x60?text=WeddingWire" alt="Wedding Wire" />
      </div>
      
      <div className="footer-copyright">
        <p>crafted by photobiz</p>
      </div>
    </div>
  )
}

export default Footer
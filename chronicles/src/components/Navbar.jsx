import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className='logo'>
                <h1>Captured Chronicles</h1>
                <h4>Cochin . Kerala . India</h4>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="navlist"><a href="/" className="nav-link">Home</a></li>
                    <li className="navlist"><a href="/about" className="nav-link">About</a></li>
                    <li className="navlist"><a href="/portfolio" className="nav-link">portfolio</a></li>
                    {/* <li className="navlist"><a href="/blog" className="nav-link">Blog</a></li> */}
                    <li className="navlist"><a href="/reviews" className="nav-link">Reviews</a></li>
                    <li className="navlist"><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
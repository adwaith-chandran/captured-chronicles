import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-column">
          <h3>NAVIGATE</h3>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <Link to="/admin">admin access</Link>
        </div>

        <div className="footer-column">
          <h3>FIND US</h3>
          <p>Adwaith S. Chandran<br />Kadavanthara, Ernakulam</p>
          <p>Soyus Lane, Near Devi Temple</p>
          <a href="mailto:adwaithschandran09@gmail.com">adwaithschandran09@gmail.com</a>
        </div>

        <div className="footer-column">
          <h3>Let's Talk</h3>
          <Link to="/contact" className="action-link">Click Here</Link>
        </div>

        <div className="footer-column">
          <h3>Captured Chronicles</h3>
          <p className="brand-subtext">Visualizing stories through a cinematic lens.</p>
        </div>
      </div>

      <div className="footer-middle">
        <p>Lifestyle Portraits • Commercial Food • Event Coverage • Dark Landscape Art</p>
        <p className="locations">Kadavanthara • Ernakulam • Kerala • International</p>
      </div>
      
      <div className="footer-copyright">
        <p>© 2026 Captured Chronicles | Developed by Adwaith S. Chandran</p>
      </div>
    </footer>
  );
}

export default Footer;
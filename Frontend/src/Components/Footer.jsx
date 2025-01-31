import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import yt from '../assets/yt.png';
import wp from '../assets/wp.svg';
import insta from '../assets/insta.svg';
import facebook from '../assets/facebook.svg';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: 'white' }} className="py-5">
      <div className="container">
        <div className="row text-center">
          {/* About Us Section */}
          <div className="col-md-4 mb-4">
            <h5 style={{color:'skyblue'}} className="fw-bold fs-3">My Blogs</h5>
            <p>Your go-to blog for insightful articles and discussions on various topics, ranging from tech to lifestyle.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5 style={{color:'skyblue'}} className="fw-bold fs-3" >Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/"  className="text-white text-decoration-none">Home</a></li>
              <li><a href="/explore" className="text-white text-decoration-none">Explore</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h5 style={{color:'skyblue'}} className="fw-bold fs-3">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" className="mx-2" style={{ textDecoration: 'none' }}>
                <img src={facebook} alt="Facebook" style={{ width: '40px', height: '40px', transition: 'transform 0.3s ease' }} className="hover-icon" />
              </a>
              <a href="https://whatsapp.com" className="mx-2" style={{ textDecoration: 'none' }}>
                <img src={wp} alt="WhatsApp" style={{ width: '40px', height: '40px', transition: 'transform 0.3s ease' }} className="hover-icon" />
              </a>
              <a href="https://instagram.com" className="mx-2" style={{ textDecoration: 'none' }}>
                <img src={insta} alt="Instagram" style={{ width: '40px', height: '40px', transition: 'transform 0.3s ease' }} className="hover-icon" />
              </a>
              <a href="https://youtube.com" className="mx-2" style={{ textDecoration: 'none' }}>
                <img src={yt} alt="YouTube" style={{ width: '40px', height: '40px', transition: 'transform 0.3s ease' }} className="hover-icon" />
              </a>
            </div>
          </div>
                {/* Copyright Section */}
    
          <p style={{color:'skyblue'}} className="text-center mt-4">&copy; {new Date().getFullYear()} MyBlogs. All Rights Reserved.</p>

        </div>

  
      </div>
    </footer>
  );
};

export default Footer;

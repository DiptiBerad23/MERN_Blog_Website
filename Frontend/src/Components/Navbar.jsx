import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand fw-bolder" to="/">
          <img style={{ height: '4rem', width: '9rem' }} src="src/assets/logo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{ height: '3rem' }} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link fw-bold"
                to="/"
                style={{
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#f04e23')}
                onMouseLeave={(e) => (e.target.style.color = '')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold"
                to="/explore"
                style={{
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#f04e23')}
                onMouseLeave={(e) => (e.target.style.color = '')}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold"
                to="/contact"
                style={{
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#f04e23')}
                onMouseLeave={(e) => (e.target.style.color = '')}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold"
                to="/about"
                style={{
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#f04e23')}
                onMouseLeave={(e) => (e.target.style.color = '')}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

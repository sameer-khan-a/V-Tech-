import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../main.css';

const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm py-2" id="custom-navbar">
      <div className="container-fluid px-3 px-lg-5">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#" style={{color: '#8c5278'}}>
          <img
            src="/logo.png"
            alt="V TECH Logo"
            height="45"
            width="50"
            id="logo-img"
          />
          V TECH SOLUTIONS
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'linear-gradient(to left, gold, gold)',
            color: 'black',
            border: '2px solid black',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center w-100 justify-content-end">

            {/* Home Dropdown */}
           {/* Home Dropdown */}
<li className="nav-item">
  <a
    className="nav-link "
    href="/"
    role="button"
    aria-expanded="false"
  >
    Home
  </a>
  
</li>


            {/* Static Link */}
            <li className="nav-item">
              <a className="nav-link" href="/Courses">Remote Learning</a>
            </li>

            {/* Courses Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li><a className="dropdown-item" href="#tech">Tech Courses</a></li>
                <li><a className="dropdown-item" href="#nontech">Non-Tech Courses</a></li>
              </ul>
            </li>

            {/* CA/CS Link */}
            <li className="nav-item">
              <a className="nav-link" href="#cacs">CA/CS Coaching</a>
            </li>
{/* Events Dropdown */}
<li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="eventsDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Events
  </a>
  <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
    <li><a className="dropdown-item" href="#activities">Activities</a></li>
    <li><a className="dropdown-item" href="#gallery">Gallery</a></li>
  </ul>
</li>

            {/* Placements Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="placementDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Placements
              </a>
              <ul className="dropdown-menu" aria-labelledby="placementDropdown">
                <li><a className="dropdown-item" href="#hiring">Hiring Partners</a></li>
                <li><a className="dropdown-item" href="#stories">Success Stories</a></li>
                <li><a className="dropdown-item" href="#support">Our Support</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../main.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm py-2" id="custom-navbar">
      <div className="container-fluid px-3 px-lg-5">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#" style={{color: '#d393bd '}}>
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
            background: '#rgba(230, 199, 219, 1) !important',
            color: 'white',
            border: '2px solid white',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center w-100 justify-content-end">

            {/* Home Dropdown */}
           {/* Home Dropdown */}
<li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    id="homeDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Home
  </a>
  <ul className="dropdown-menu" aria-labelledby="homeDropdown" style={{color: 'white'}}>
    <li><a className="dropdown-item" href="#home" style={{color: 'white'}}>Home</a></li>
    <li><a className="dropdown-item" href="#MissionVision" style={{color: 'white'}}>About Us</a></li>
    <li><a className="dropdown-item" href="#leadership" style={{color: 'white'}} >Our Team</a></li>
    <li><a className="dropdown-item" href="#affiliations" style={{color: 'white'}}>Our Partners</a></li>
    <li><a className="dropdown-item" href="#placements" style={{color: 'white'}}>Hiring Support</a></li>
    <li><a className="dropdown-item" href="#success" style={{color: 'white'}}>Testimonials</a></li>
    <li><a className="dropdown-item" href="#contact" style={{color: 'white'}}>Contact Us</a></li> {/* 👈 New link */}
  </ul>
</li>


            {/* Static Link */}
            <li className="nav-item">
              <a className="nav-link" href="/Courses">Remote Learning</a>
            </li>

            {/* Courses Dropdown */}
       {/* Courses Link */}
 <li className="nav-item">
              <a className="nav-link" href="/CoursesOffered">Courses</a>
            </li>


            {/* CA/CS Link */}
            <li className="nav-item">
<a className="nav-link" href="/VTechCACS">CA/CS Coaching</a>
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
    <li><a className="dropdown-item" href="/VTechActivities">Activities</a></li>
    <li><a className="dropdown-item" href="/VTechGallery">Gallery</a></li>
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
                <li><a className="dropdown-item" href="/HiringDetails">Hiring Partners</a></li>
                <li><a className="dropdown-item" href="/SuccessDetails">Success Stories</a></li>
                <li><a className="dropdown-item" href="/Support">Our Support</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

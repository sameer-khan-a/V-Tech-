import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../main.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm py-2" id="custom-navbar">
      <div className="container-fluid px-3 px-lg-5">
        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#">
          <img src="/logo.png" alt="V TECH Logo" height="45" width="50" />
          <span className="brand-text" style={{ color: 'white' }}>V TECH SOLUTIONS</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center w-100 justify-content-end">
            
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#home">Home</a></li>
                <li><a className="dropdown-item" href="#MissionVision">About Us</a></li>
                <li><a className="dropdown-item" href="#leadership">Our Team</a></li>
                <li><a className="dropdown-item" href="#affiliations">Our Partners</a></li>
                <li><a className="dropdown-item" href="#placements">Hiring Support</a></li>
                <li><a className="dropdown-item" href="#success">Testimonials</a></li>
                <li><a className="dropdown-item" href="#contact">Contact Us</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Courses">Remote Learning</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/CoursesOffered">Courses</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/VTechCACS">CA/CS Coaching</a>
            </li>

            {/* Events */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Events
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/VTechActivities">Activities</a></li>
                <li><a className="dropdown-item" href="/VTechGallery">Gallery</a></li>
              </ul>
            </li>

            {/* Placements */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Placements
              </a>
              <ul className="dropdown-menu">
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

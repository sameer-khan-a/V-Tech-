import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../main.css';

const Navbar = () => {
  const clickSfx = useRef(null);

  useEffect(() => {
    clickSfx.current = new Audio('/sounds/click.wav'); // put file in /public/sounds/
    clickSfx.current.volume = 0.5; // tweak if needed
  }, []);

  const playClick = () => {
    if (!clickSfx.current) return;
    clickSfx.current.currentTime = 0; // allow rapid consecutive clicks
    clickSfx.current.play();
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm py-2" id="custom-navbar">
      <div className="container-fluid px-3 px-lg-5">
        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#" onClick={playClick}>
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
          onClick={playClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center w-100 justify-content-end">
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={playClick}>
                Home
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#home" onClick={playClick}>Home</a></li>
                <li><a className="dropdown-item" href="#MissionVision" onClick={playClick}>About Us</a></li>
                <li><a className="dropdown-item" href="#leadership" onClick={playClick}>Our Team</a></li>
                <li><a className="dropdown-item" href="#affiliations" onClick={playClick}>Our Partners</a></li>
                <li><a className="dropdown-item" href="#placements" onClick={playClick}>Hiring Support</a></li>
                <li><a className="dropdown-item" href="#success" onClick={playClick}>Testimonials</a></li>
                <li><a className="dropdown-item" href="#contact" onClick={playClick}>Contact Us</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Courses" onClick={playClick}>Remote Learning</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/CoursesOffered" onClick={playClick}>Courses</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/VTechCACS" onClick={playClick}>CA/CS Coaching</a>
            </li>

            {/* Events */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={playClick}>
                Events
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/VTechActivities" onClick={playClick}>Activities</a></li>
                <li><a className="dropdown-item" href="/VTechGallery" onClick={playClick}>Gallery</a></li>
              </ul>
            </li>

            {/* Placements */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={playClick}>
                Placements
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/HiringDetails" onClick={playClick}>Hiring Partners</a></li>
                <li><a className="dropdown-item" href="/SuccessDetails" onClick={playClick}>Success Stories</a></li>
                <li><a className="dropdown-item" href="/Support" onClick={playClick}>Our Support</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

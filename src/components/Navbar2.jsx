import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../main.css';

const Navbar2 = () => {
  const clickSfx = useRef(null);

  useEffect(() => {
    clickSfx.current = new Audio('/sounds/click.wav'); // Add click.mp3 in public/sounds
    clickSfx.current.volume = 0.5;
  }, []);

  const playClick = () => {
    if (!clickSfx.current) return;
    clickSfx.current.currentTime = 0;
    clickSfx.current.play();
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm py-2" id="custom-navbar">
      <div className="container-fluid px-3 px-lg-5">
        {/* Brand */}
        <a
          className="navbar-brand d-flex align-items-center gap-2 fw-bold"
          href="#"
          style={{ color: 'white ' }}
          onClick={playClick}
        >
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
          onClick={playClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center w-100 justify-content-end">
            {/* Home Link */}
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={playClick}>Home</a>
            </li>

            {/* Static Link */}
            <li className="nav-item">
              <a className="nav-link" href="/Courses" onClick={playClick}>Remote Learning</a>
            </li>

            {/* Courses Link */}
            <li className="nav-item">
              <a className="nav-link" href="/CoursesOffered" onClick={playClick}>Courses</a>
            </li>

            {/* CA/CS Link */}
            <li className="nav-item">
              <a className="nav-link" href="/VTechCACS" onClick={playClick}>CA/CS Coaching</a>
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
                onClick={playClick}
              >
                Events
              </a>
              <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                <li><a className="dropdown-item" href="/VTechActivities" onClick={playClick}>Activities</a></li>
                <li><a className="dropdown-item" href="/VTechGallery" onClick={playClick}>Gallery</a></li>
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
                onClick={playClick}
              >
                Placements
              </a>
              <ul className="dropdown-menu" aria-labelledby="placementDropdown">
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

export default Navbar2;

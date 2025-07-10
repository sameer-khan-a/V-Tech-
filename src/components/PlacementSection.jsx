import React from 'react';
import '../main.css';

const partnerLogos = [
  { src: '/google.png', alt: 'Google', name: 'GOOGLE' },
  { src: '/infosys.png', alt: 'Infosys', name: 'INFOSYS' },
  { src: '/hdfc.png', alt: 'HDFC Bank', name: 'HDFC' },
  { src: '/johnson.png', alt: 'Johnson Controls', name: 'JOHNSON CONTROLS' },
  { src: '/accenture.png', alt: 'Accenture', name: 'ACCENTURE' },
  { src: '/tcs.png', alt: 'TCS', name: 'TCS' },
  { src: '/amazon.png', alt: 'amazon', name: 'AMAZON' },
  { src: '/kotak.png', alt: 'kotak', name: 'KOTAK' },
  { src: '/oracle.png', alt: 'oracle', name: 'ORACLE' },
  { src: '/ibm.png', alt: 'ibm', name: 'IBM' },
  { src: '/hitachi.png', alt: 'hitachi', name: 'HITACHI' },
  { src: '/icici.png', alt: 'icici', name: 'ICICI' },
];

const logos = [...partnerLogos, ...partnerLogos]; // loop

const PlacementSection = () => {
  return (
    <div
      id="placement"
      className="placement-section container-fluid px-0"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* Top Content */}
      <div
        className="d-flex flex-column justify-content-center w-100"
        style={{ flex: '1 0 auto', marginTop: '100px', padding: '1rem' }}
      >
        <div className="row g-4 justify-content-around align-items-center">
          {/* Text */}
          <div className="col-lg-5 col-md-6 col-12 px-4 text-dark text-center text-md-start">
            <h2 className="fw-bold mb-4" style={{ color: '#8c5278' }}>
              Turning skills into careers <br />
              <span className="text-highlight fw-bold">
                we empower people to land the jobs they deserve.
              </span>
            </h2>
            <p className="fs-5 text" style={{ color: 'black' }}>
              At <strong>V Tech Solutions</strong>, we go beyond training —
              we equip individuals with the skills, confidence, and support
              they need to secure real jobs. Our goal is to bridge the gap
              between learning and employment.
            </p>
          </div>

          {/* Image */}
          <div className="col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center p-4">
            <img
              src="/student1.JPG"
              alt="V Tech Students"
              className="img-fluid"
              style={{
                width: '100%',
                maxWidth: '480px',
                objectFit: 'cover',
                borderRadius: '15%',
              }}
            />
          </div>
        </div>

        {/* Learn More Button */}
        <center>
          <div className="mt-4">
            <a
              href="#"
              className="btn px-5 py-2 fs-5 fw-semibold rounded-pill"
              style={{
                backgroundColor: "#8c5278",
                color: "white",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#6e3f5f")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#8c5278")}
            >
              Learn More
            </a>
          </div>
        </center>
      </div>

      {/* Infinite Logo Scroll Strip */}
      <div className="infinite-scroll-container py-4 bg-black">
        <div className="infinite-scroll-track">
          {logos.map((logo, index) => (
            <div key={index} className="infinite-scroll-item">
              <img src={logo.src} alt={logo.alt} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementSection;

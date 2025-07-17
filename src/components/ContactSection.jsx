import React, { useEffect, useState } from 'react';
import '../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="position-relative text-white overflow-hidden mt-5"
      id="contact"
      style={{ height: '100dvh', width: '100vw', margin: 0, padding: 0 }}
    >
      {/* Background Video */}
      <video
        onLoadedData={(e) => (e.target.style.opacity = '1')}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: 'cover',
          zIndex: '-2',
          opacity: 0,
          transition: 'opacity 0.6s ease-in-out',
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: '-1',
        }}
      ></div>

      {/* Content */}
      <div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center text-center text-lg-start px-3 px-lg-5">
        <div className="row w-100 align-items-center">
          
          {/* Map */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="ratio ratio-4x3">
              {showMap && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2256660623075!2d77.11579937492495!3d13.336233887013675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c3bcbac25b5%3A0x4bc5dc901d1001e8!2sV%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1751704610684!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="V Tech Solutions Location"
                ></iframe>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6">
            <div
              className="p-4 rounded-4"
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(3px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                minHeight: '450px',
              }}
            >
              <h2 className="fw-bold mb-3" style={{ color: 'rgb(207, 123, 178)' }}>
                Got a Goal?<br />Let’s Achieve It Together.
              </h2>

              <div className="mb-3">
                <p className="fw-bold mb-1" style={{ color: 'rgb(255, 150, 218)' }}>Old Block</p>
                <p>
                  Eshwar Building, 3rd Cross St, Ashok Nagar,<br />
                  Opp Tumkur University, Tumakuru Karnataka – 572103
                </p>
                <p className="fw-bold mb-1" style={{ color: 'rgb(255, 150, 218)' }}>New Block</p>
                <p className="mb-2">
                  SLR Avenue, 3rd Cross,  opposite to Tumkur University, <br />
                  Ashok Nagar, Tumakuru, Karnataka
                </p>

              </div>

              <div className="mb-3">
                <p className="fw-bold mb-1" style={{ color: 'rgb(245, 146, 210)' }}>Email</p>
                <p><a href="mailto:vtech.tumkur12@gmail.com" className="text-white text-decoration-none">vtech.tumkur12@gmail.com</a></p>
              </div>

              <div className="mb-3">
                <p className="fw-bold mb-1" style={{ color: 'rgb(255, 150, 218)' }}>Phone</p>
                <p>
                  <a href="tel:+919742396245" className="text-white text-decoration-none">+91 97423 96245</a><br />
                  <a href="tel:+917022901241" className="text-white text-decoration-none">+91 70229 01241</a>
                </p>
              </div>

          <a
  href="/BookAppointment"
  className="btn px-4 mt-3 contact-btn"
  style={{ background: '#8c5278', color: 'white' }}
>
  Book a Consultation
</a>


              {/* Social Icons */}
              <div className="d-flex gap-4 justify-content-center justify-content-lg-start mt-4 fs-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-decoration-none">
                  <i className="bi bi-instagram" style={{ color: '#f592d2' }}></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-decoration-none">
                  <i className="bi bi-facebook" style={{ color: '#f592d2' }}></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-decoration-none">
                  <i className="bi bi-twitter" style={{ color: '#f592d2' }}></i>
                </a>
                <a href="mailto:vtech.tumkur12@gmail.com" aria-label="Email" className="text-decoration-none">
                  <i className="bi bi-envelope-fill" style={{ color: '#f592d2' }}></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

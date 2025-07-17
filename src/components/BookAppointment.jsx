import React, { useState, useEffect } from 'react';
import Navbar2 from './Navbar2';
import '../main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your appointment has been booked successfully!');
  };

  return (
    <>
      <Navbar2 />

      <div className="video-background-container position-relative">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/Counselling.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="appointment-overlay d-flex justify-content-center align-items-center">
          <div
            className="appointment-container p-4 p-md-5"
            data-aos="zoom-in"
            style={{
              maxWidth: '500px',
              width: '100%',
              borderRadius: '1rem',
              background: 'rgba(140, 82, 120, 0.36)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              color: '#333',
            }}
          >
            <h2
              className="text-center fw-bold mb-4"
              data-aos="fade-down"
              style={{ color: '#ca77adff' }}
            >
              Book an Appointment
            </h2>

            <form onSubmit={handleSubmit} className="appointment-form" data-aos="fade-up">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <select
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course or Service</option>
                  <option value="Distance Learning">Distance Learning</option>
                  <option value="Technical Course">Technical Course</option>
                  <option value="Non-Technical Course">Non-Technical Course</option>
                  <option value="CA CS">CA CS</option>
                  <option value="Career Guidance">Career Guidance</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn px-5 py-2 rounded-pill"
                  style={{
                    backgroundColor: '#8c5278',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#6e3f5f')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#8c5278')}
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;

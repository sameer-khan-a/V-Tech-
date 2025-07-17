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
      <div className="video-background-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/Counselling.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="appointment-overlay" data-aos="fade-up">
          <div
            className="appointment-container"
            style={{ background: 'rgba(255, 246, 252, 0.35)' }}
            data-aos="zoom-in"
          >
            <h2 className="appointment-heading" data-aos="fade-down">Book an Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form" data-aos="fade-up">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                name="service"
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
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;

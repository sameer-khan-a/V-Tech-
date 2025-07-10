import React from 'react';
import '../main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const InstituteDetails = ({ institute }) => {
 useEffect(() => {
  AOS.init({
    duration: 2000,
    once: false,
    offset: 120,
  });
  AOS.refresh(); // <-- Force refresh after DOM updates
}, []);

  if (!institute) return <div>Loading...</div>;
  return (
    <div className="institute-page " data-aos="fade">
      {/* 🔥 Hero Banner */}
      <div className="institute-hero position-relative">
        <img
          src={institute.bannerImage || '/fallback-banner.jpg'}
          alt={institute.name || 'Institute'}
          className="institute-banner"
        />
        <div className="institute-hero-text">
          <h1>{institute.name}</h1>
          <p>{institute.location}</p>
        </div>
      </div>

      {/* ✨ Overview */}
      <section className="institute-overview section-spacing">
        <h2 className="section-title" style={{ color: '#8c5278' }}>Overview</h2>
        <p className="section-description text-dark">{institute.description}</p>
      </section>

      {/* 📚 Courses Carousel Marquee */}
      {Array.isArray(institute.courses) && institute.courses.length > 0 && (
        <section className="course-marquee-container section-spacing pt-0 mt-3">
          <h2 className="section-title text-center mb-4" style={{ color: '#8c5278' }}>Popular Courses</h2>
          <div className="course-marquee-track">
            {[...institute.courses, ...institute.courses].map((course, index) => (
              <div className="course-marquee-card" key={index}>
                <div className="course-card-inner">
                  <img
                    src={course.image || '/default-course.jpg'}
                    alt={course.name}
                    className="course-image"
                  />
                  <div className="course-info p-3 text-dark">
                    <h4>{course.name}</h4>
                    <p>{course.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 🚀 Call to Action */}
      <section className="institute-cta section-spacing text-center">
        <h2 className="section-title" style={{ color: '#8c5278' }}>
          Start Your Online Journey with {institute.name} <br />
          <span className="text-muted">
            Through V-Tech Solutions – Your Trusted Education Partner
          </span>
        </h2>
        <p className="cta-description mt-2 text-dark">
          Enroll, get support, and access exclusive benefits by applying via V-Tech.
        </p>
        <a href="#apply" className="learn-more-btn mt-3">
          Book a Free Counseling Session
        </a>
      </section>
    </div>
  );
};

export default InstituteDetails;

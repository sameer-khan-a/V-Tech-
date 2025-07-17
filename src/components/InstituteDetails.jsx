import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../main.css';

const InstituteDetails = ({ institute }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  if (!institute) return <div>Loading...</div>;

  return (
    <div className="institute-page" data-aos="fade">
      
      {/* 🔥 Hero Banner */}
      <div className="institute-hero position-relative animate__animated animate__fadeIn">
        <img
          src={institute.bannerImage || '/fallback-banner.jpg'}
          alt={institute.name || 'Institute'}
          className="institute-banner"
        />
        <div className="institute-hero-text animate__animated animate__fadeInUp">
          <h1 style={{ color: '#8c5278' }}>{institute.name}</h1>
          <p className="text-dark">{institute.location}</p>
        </div>
      </div>

      {/* ✨ Overview Section */}
      <section className="institute-overview section-spacing" data-aos="fade-up">
        <h2 className="section-title" style={{ color: '#8c5278' }}>Overview</h2>
        <p className="section-description text-dark">{institute.description}</p>
      </section>

      {/* 📚 Courses Marquee Carousel */}
      {Array.isArray(institute.courses) && institute.courses.length > 0 && (
        <section className="course-marquee-container section-spacing pt-0 mt-3">
          <h2 className="section-title text-center mb-4" style={{ color: '#8c5278' }}>Popular Courses</h2>
          <div className="course-marquee-track">
            {[...institute.courses, ...institute.courses].map((course, index) => (
              <div className="course-marquee-card" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
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

      {/* 🚀 CTA Section */}
      <section className="institute-cta section-spacing text-center animate__animated animate__fadeInUp">
        <h2 className="section-title" style={{ color: '#8c5278' }}>
          Start Your Online Journey with {institute.name}
          <br />
          <span className="text-muted">
            Through V-Tech Solutions – Your Trusted Education Partner
          </span>
        </h2>
        <p className="cta-description mt-2 text-dark">
          Enroll, get support, and access exclusive benefits by applying via V-Tech.
        </p>
        <a href="/BookAppointment" className="cta-button mt-3">
          Book a Free Counseling Session
        </a>
      </section>
    </div>
  );
};

export default InstituteDetails;

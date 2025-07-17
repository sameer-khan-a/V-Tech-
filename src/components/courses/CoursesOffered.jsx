import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Link } from 'react-router-dom';
import '../../main.css';
import Navbar2 from '../Navbar2';

const CoursesOffered = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
<div className="tech-hero animate__animated animate__fadeIn mt-4">
  <div className="hero-overlay animate__animated animate__fadeInUp">
    <h1 className="animate__animated animate__fadeInDown" style={{ color: '#8c5278' }}>
      Courses Offered
    </h1>
    <p className="animate__animated animate__fadeIn text-dark">
      Explore our blend of Technical and Non-Technical programs designed to build in-demand skills.<br />
      Whether you're learning to code or polishing soft skills, there's something for everyone.<br />
      Learn at your pace and grow confidently toward your goals.
    </p>
  </div>
</div>



      {/* Course Type Video Cards */}
      <section className="tech-courses-section">
        <h2 className="tech-heading animate__animated animate__fadeInUp" style={{ color: '#8c5278' }}>
          Choose Your Track
        </h2>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap gap-4">
          <Link
            to="/TechCourses"
            className="course-home-card-link"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <div className="course-home-card">
              <video
                src="/courses/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="course-video"
              />
              <div className="course-overlay">
                <span>Technical Courses</span>
              </div>
            </div>
          </Link>

          <Link
            to="/NonTechCourses"
            className="course-home-card-link"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div className="course-home-card">
              <video
                src="/courses/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="course-video"
              />
              <div className="course-overlay">
                <span>Non-Technical Courses</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
  
    </>
  );
};

export default CoursesOffered;

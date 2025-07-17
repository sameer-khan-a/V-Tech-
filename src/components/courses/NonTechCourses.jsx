import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../../main.css';
import Navbar2 from '../Navbar2';

const nonTechCourses = [
  {
    title: 'Tally Level 1 to 3',
    image: '/Courses/NonTech/Tally.png',
    level: 'Beginner to Intermediate',
    duration: '35 hours',
    type: 'Paid',
    link: '/courses/tally',
  },
  {
    title: 'Tally Professional',
    image: '/Courses/NonTech/TallyPro.png',
    level: 'Advanced',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/tally-professional',
  },
  {
    title: 'GST Simulation',
    image: '/Courses/NonTech/Gst.png',
    level: 'Intermediate',
    duration: '15 hours',
    type: 'Paid',
    link: '/courses/gst-simulation',
  },
  {
    title: 'DTP, Nudi and English Typing',
    image: '/Courses/NonTech/Typing.png',
    level: 'Beginner',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/dtp-nudi-typing',
  },
  {
    title: 'AI with MS Office',
    image: '/Courses/NonTech/MSOffice.png',
    level: 'Intermediate',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/ai-ms-office',
  },
  {
    title: 'Spoken English',
    image: '/Courses/NonTech/SpokenEnglish.png',
    level: 'Beginner',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/spoken-english',
  },
  {
    title: 'Advanced Excel',
    image: '/Courses/NonTech/Excel.png',
    level: 'Intermediate',
    duration: '30 hours',
    type: 'Paid',
    link: '/courses/advanced-excel',
  },
  {
    title: 'AWS DevOps',
    image: '/Courses/NonTech/AWS.png',
    level: 'Advanced',
    duration: '90 hours',
    type: 'Paid',
    link: '/courses/aws-devops',
  },
  {
    title: 'Revit',
    image: '/Courses/NonTech/Revit.png',
    level: 'Intermediate',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/revit',
  },
  {
    title: 'AutoCAD and 3DS Max',
    image: '/Courses/NonTech/Auto3ds.png',
    level: 'Advanced',
    duration: '90 hours',
    type: 'Paid',
    link: '/courses/autocad-3dsmax',
  },
];

const NonTechCourses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
      <div className="tech-hero animate__animated animate__fadeIn">
        <div className="hero-overlay animate__animated animate__fadeInUp">
          <h1 className="animate__animated animate__fadeInDown" style={{ color: '#8c5278' }}>
            Explore Popular Non-Tech Courses
          </h1>
          <p className="animate__animated animate__fadeIn text-dark">
            Upgrade your skills with our comprehensive courses
          </p>
        </div>
      </div>

      {/* Course Cards Section */}
      <section className="tech-courses-section">
        <h2 className="tech-heading animate__animated animate__fadeInUp" style={{ color: '#8c5278' }}>
          Available Courses
        </h2>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap gap-4">
          {nonTechCourses.map((course, index) => (
            <a
              href={course.link}
              className="tech-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              key={index}
            >
              <img src={course.image} alt={course.title} className="tech-thumb" />
              <div className="tech-overlay">
                <h3>{course.title}</h3>
                <div className="tech-extra">
                  <p>Level: {course.level}</p>
                  <p>Duration: {course.duration}</p>
                  <span className={`tag ${course.type === 'Free' ? 'free' : 'paid'}`}>
                    {course.type}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container animate__animated animate__fadeInUp">
          <h2 style={{ color: '#8c5278' }}>Need Guidance?</h2>
          <p>
            Book a free counselling session with our experts to choose the right course for you.
          </p>
          <a href="/BookAppointment" className="cta-button">
            Book Free Counselling
          </a>
        </div>
      </section>
    </>
  );
};

export default NonTechCourses;

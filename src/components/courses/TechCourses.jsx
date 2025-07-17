import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../../main.css'; // Make sure this has your styles
import Navbar2 from '../Navbar2';

// Course data
const techCourses = [
  {
    title: 'Computer Basics',
    image: '/Courses/ComputerBasics.png',
    level: 'Beginner',
    duration: '60 hours',
    type: 'Paid',
  },
  {
    title: 'C Programming',
    image: '/Courses/CProgramming.png',
    level: 'Intermediate',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/c-programming',
  },
  {
    title: 'OOPs with C++',
    image: '/Courses/Oop.webp',
    level: 'Intermediate',
    duration: '50 hours',
    type: 'Paid',
    link: '/courses/oops-cpp',
  },
  {
    title: 'Core Java',
    image: '/Courses/Java.png',
    level: 'Intermediate',
    duration: '70 hours',
    type: 'Paid',
    link: '/courses/core-java',
  },
  {
    title: 'Python',
    image: '/Courses/Python.webp',
    level: 'Beginner',
    duration: '50 hours',
    type: 'Paid',
    link: '/courses/python',
  },
  {
    title: 'Data Structures in C',
    image: '/Courses/DataStructures.png',
    level: 'Advanced',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/data-structures-c',
  },
  {
    title: 'Web Development',
    image: '/Courses/WebDevelopment.png',
    level: 'Intermediate',
    duration: '60 hours',
    type: 'Paid',
    link: '/courses/web-development',
  },
  {
    title: 'Java Full Stack',
    image: '/Courses/JavaFullStack.png',
    level: 'Advanced',
    duration: '90 hours',
    type: 'Paid',
    link: '/courses/java-full-stack',
  },
  {
    title: 'MERN Full Stack',
    image: '/Courses/MERN.png',
    level: 'Advanced',
    duration: '90 hours',
    type: 'Paid',
    link: '/courses/mern-full-stack',
  },
  {
    title: 'AI & Machine Learning',
    image: '/Courses/AIML.png',
    level: 'Advanced',
    duration: '80 hours',
    type: 'Paid',
    link: '/courses/ai-machine-learning',
  },
];


const TechCourses = () => {
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
            Explore In-Demand Tech Courses
          </h1>
          <p className="animate__animated animate__fadeIn text-dark">
            Learn at your pace from top instructors
          </p>
        </div>
      </div>

      {/* Course Cards Section */}
      <section className="tech-courses-section">
        <h2 className="tech-heading animate__animated animate__fadeInUp" style={{ color: '#8c5278' }}>
          Available Courses
        </h2>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center flex-wrap gap-4">
          {techCourses.map((course, index) => (
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

export default TechCourses;
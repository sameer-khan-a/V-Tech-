import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../main.css';
import Navbar2 from './Navbar2';

const courseData = [
  {
    title: 'Jain Online',
    image: '/thumbnails/JainOnline.png',
    video: '/videos/Jain University.jpg',
    link: '/JainOnline',
  },
  {
    title: 'Jain WLP (Work Learn Program)',
    image: '/thumbnails/JainWLP.png',
    video: '/videos/JainWLP.jpg',
    link: '/JainWLP',
  },
  {
    title: 'Mizoram University',
    image: '/thumbnails/MizoramUniversity.png',
    video: '/videos/Mizoram University.jpg',
    link: '/MizoramUniversity',
  },
  {
    title: 'Uttaranchal University',
    image: '/thumbnails/Uttaranchal_University.png',
    video: '/videos/Uttaranchal University.jpg',
    link: '/UttaranchalUniversity',
  },
  {
    title: 'Bengaluru University',
    image: '/thumbnails/Bengaluru_University.png',
    video: '/videos/bengaluru university.jpg',
    link: '/BangloreUniversity',
  },
  {
    title: 'Karnataka State Open University',
    image: '/thumbnails/Open_University.png',
    video: '/videos/open university.webp',
    link: '/KSOUUniversity',
  },
  {
    title: 'Vignan University',
    image: '/thumbnails/Vignan_University.png',
    video: '/videos/Vignan University.jpg',
    link: '/VignanUniversity',
  },
  {
    title: 'Andhra University',
    image: '/thumbnails/Andhra_University.png',
    video: '/videos/andhra university.jpeg',
    link: '/AndhraUniversity',
  },
];

const CoursesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
  

      {/* Trainer Image Section */}
      <section className="courses-wrapper d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 mt-5 pt-5">
        <div className="left-block" data-aos="zoom-in-up">
          <div className="image-overlay-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src="/trainer.jpg" alt="Trainer" style={{ position: 'relative', width: '100%', height: '100%' }}/>
            <div className="image-overlay-text">Learn from anywhere</div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="courses-grid">
          {courseData.map((course, index) => (
            <div
              className="course-card uniform-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={index}
            >
              <a href={course.link} className="text-decoration-none">
                <div className="media-container static-image-mode">
                  <img src={course.image} alt={course.title} className="thumb" />
                  <img src={course.video} alt={`${course.title} campus`} className="campus-img" />
                </div>
                <h5 className="mt-2">{course.title}</h5>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section (Optional) */}

    </>
  );
};

export default CoursesSection;

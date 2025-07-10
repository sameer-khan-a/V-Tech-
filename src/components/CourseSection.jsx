import React from 'react';
import '../main.css';
import Navbar2 from './Navbar2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const courseData = [
  {
    title: 'Jain Online',
    image: '/thumbnails/JainOnline.jpeg',
    video: '/videos/Jain University.jpg',
    link: '/JainOnline'
  },
  {
    title: 'Jain WLP (Work Learn Program)',
    image: '/thumbnails/JainWLP.jpg',
    video: '/videos/JainWLP.jpg',
    link: '/JainWLP'
  },
  {
    title: 'Mizoram University',
    image: '/thumbnails/MizoramUniversity.webp',
    video: '/videos/Mizoram University.jpg',
    link: '/MizoramUniversity'
  },
  {
    title: 'Uttaranchal University',
    image: '/thumbnails/Uttaranchal University.jpg',
    video: '/videos/Uttaranchal University.jpg',
    link: '/UttaranchalUniversity'
  },
  {
    title: 'Bengaluru University',
    image: '/thumbnails/Bengaluru University.webp',
    video: '/videos/bengaluru university.jpg',
    link: '/BangloreUniversity'
  },
  {
    title: 'Karnataka State Open University',
    image: '/thumbnails/Open University.jpg',
    video: '/videos/open university.webp',
    link: '/KSOUUniversity'
  },
  {
    title: 'Vignan University',
    image: '/thumbnails/Vignan University.webp',
    video: '/videos/Vignan University.jpg',
    link: '/VignanUniversity'
  },
  {
    title: 'Andhra University',
    image: '/thumbnails/Andhra University.jpeg',
    video: '/videos/andhra university.jpeg',
    link: '/AndhraUniversity'
  },
];

const CoursesSection = () => {
  useEffect(() => {
   AOS.init({
     duration: 2000,
     once: false,
     offset: 120,
   });
   AOS.refresh(); // <-- Force refresh after DOM updates
 }, []);
  return (
    <>
      <Navbar2 />
      <section className="courses-wrapper mt-5 pt-5" data-aos="fade">
      <div className="left-block">
  <div className="image-overlay-wrapper">
    <img src="/trainer.jpg" alt="Trainer" />
    <div className="image-overlay-text">Learn from anywhere</div>
  </div>
</div>


        <div className="courses-grid">
          {courseData.map((course, index) => (
            <div className="course-card uniform-card" key={index}>
              <a href={course.link} key={index} className=" text-decoration-none mb-0 pb-0">

              <div className="media-container static-image-mode">
                <img src={course.image} alt={course.title} className="thumb" />
                <img src={course.video} alt={`${course.title} campus`} className="campus-img" />
              </div>
              <h5>{course.title}</h5>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesSection;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../main.css';

const slides = [
  {
    icon: '🚀',
    title: 'Our Mission',
    text: 'To build credible, future-proof education that meets real-world demands. We bridge the gap between knowledge and careers through guided learning. Our mission is to unlock individual potential through practical, job-ready training. When people grow, industries thrive — and we make that happen.'
  },
  {
    icon: '🌈',
    title: 'Our Vision',
    text: 'To redefine learning as a powerful driver of personal and professional growth. We aim to create visible impact through skill development and opportunity. V Tech aspires to be the go-to partner for upskilling and employability. Empowering people isn’t a goal — it’s our standard.'
  },
  {
    icon: '🎯',
    title: 'Our Goal',
    text: 'To become a nationwide leader in transforming education into employment. We strive to create future-ready talent by combining academic knowledge with industry-aligned skills. V Tech’s goal is to bridge education and employability for every student.'
  }
];

const MissionVision = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <section className="mission-vision-section container-fluid px-0" style={{ padding: '4rem 0' }}>
      {/* Header Image */}
      <div className="mv-image-wrapper w-100 text-center ">
        <div className="position-relative">
          <img
            src="/VisionMission.jpg"
            alt="Students"
            className="img-fluid w-100 rounded shadow-sm"
            style={{ maxHeight: '420px', objectFit: 'cover', objectPosition: 'top center' }}
          />
          <img
            src="/logo.png"
            alt="V Tech Logo"
            className="position-absolute"
            style={{ bottom: '10px', left: '10px', height: '50px' }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="row w-100 m-0">
        {/* About Us */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center text-center" style={{ backgroundColor: '#f0b5df' }}>
          <div className="p-4" style={{ maxWidth: '700px' }}>
            <img src="/logo.png" alt="V Tech Logo" style={{ height: '50px', marginBottom: '1rem' }} />
            <h2 className="fw-bold mb-3" style={{ color: '#8c5278' }}>About Us</h2>
            <p className="lead" style={{ color: '#5c5c5c' }}>
              V Tech Solutions is one of the most innovative institutions focused on empowering students through quality education.
              We provide training aligned with the New Education Policy, helping learners stay relevant in today’s job market.
              Our institution is equipped with state-of-the-art labs, expert trainers, and real-world curriculum to ensure every student thrives.
            </p>
          </div>
        </div>

        {/* Slider Section */}
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-center text-center"
          style={{ backgroundColor: '#f1df91' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="position-relative p-4 w-100" style={{ maxWidth: '700px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="p-4 rounded"
                style={{ minHeight: '280px' }}
              >
                <div className="fs-2 mb-2" style={{ color: '#b8860b' }}>{slides[index].icon}</div>
                <h2 className="fw-bold mb-2" style={{ color: '#8c5278' }}>{slides[index].title}</h2>
                <p className="lead" style={{ color: '#5c5c5c' }}>{slides[index].text}</p>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next Buttons */}
            <button
              onClick={prevSlide}
              className="btn position-absolute top-50 start-0 translate-middle-y"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '2rem',
                color: '#4b0082'
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="btn position-absolute top-50 end-0 translate-middle-y"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '2rem',
                color: '#4b0082'
              }}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

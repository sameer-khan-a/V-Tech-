import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Leadership from './components/Leadership';
import SuccessStories from './components/SuccessStories';
import AffiliationsSection from './components/AffiliationSection';
import Navbar from './components/Navbar';
import MissionVision from './components/MissionVision';
import PlacementSection from './components/PlacementSection';
import ContactSection from './components/ContactSection';

// Typing messages
const typedMessages = [
  'Authorised <span style="color:rgb(232, 139, 199)">Tally</span> Centre',
  'Student <span style="color:rgb(232, 139, 199)">Job Portal</span> Access',
  'Online / <span style="color:rgb(232, 139, 199)">Offline</span> Classes',
  '<span style="color:rgb(232, 139, 199)">Placement</span> Assistance Provided',
  'Affordable <span style="color:rgb(232, 139, 199)">Courses</span> Fees',
  'Qualified & <span style="color:rgb(232, 139, 199)">Experienced</span> Trainers',
  'WiFi & <span style="color:rgb(232, 139, 199)">Power Backup</span>',
  'CCTV <span style="color:rgb(232, 139, 199)">Surveillance</span> Campus',
  '<span style="color:rgb(232, 139, 199)">Job-Oriented</span> Computer Courses',
  'Get Updates Through <span style="color:rgb(232, 139, 199)">SMS</span>',
  'Learn From <span style="color:rgb(232, 139, 199)">Industry Experts</span>',
  '<span style="color:rgb(232, 139, 199)">Certified</span> Programs & Labs',
  '<span style="color:rgb(232, 139, 199)">Skill-Based</span> Training Ecosystem',
  '<span style="color:rgb(232, 139, 199)">Career-Ready</span> Learning Modules',
  '<span style="color:rgb(232, 139, 199)">Smart Classrooms</span> & Tools',
  '<span style="color:rgb(232, 139, 199)">National</span> Partnerships',
  '<span style="color:rgb(232, 139, 199)">Global</span> Academic Exposure'
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [showMarquee, setShowMarquee] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  const bgAudioRef = useRef(null);
  const clickAudioRef = useRef(null);
  const videoRef = useRef(null);

  // Rotate typed messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % typedMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate fade for typed messages
  useEffect(() => {
    setFadeClass('fade-out');
    const timeout = setTimeout(() => {
      setDisplayed(typedMessages[current]);
      setFadeClass('fade-in');
    }, 500);
    return () => clearTimeout(timeout);
  }, [current]);

  // Enable audio on first user click
 // Enable audio on first user interaction
useEffect(() => {
  const enableAudio = () => {
    if (bgAudioRef.current && !isPlaying) {
      bgAudioRef.current.muted = false; // Ensure it's not muted
      bgAudioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked, user must click Play Music button:", err);
        });
    }
  };
  window.addEventListener('click', enableAudio, { once: true });
  return () => window.removeEventListener('click', enableAudio);
}, [isPlaying]);


  const playClickSound = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play().catch(() => {});
    }
  };

const toggleAudio = () => {
  if (!bgAudioRef.current) return;
  if (isPlaying) {
    bgAudioRef.current.pause();
    setIsPlaying(false);
  } else {
    bgAudioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => console.log("Play failed"));
  }
};

  const toggleVideoSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  return (
    <>
      <Navbar />
      <audio ref={bgAudioRef} src="/sounds/home.mp3" loop preload="auto"></audio>
      <audio ref={clickAudioRef} src="/sounds/click.wav" preload="auto"></audio>

      {/* Hero Section */}
      <div className="home-container position-relative text-white text-center" id="home">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isVideoMuted}
          className="bg-video"
        >
          <source src="/Vtech.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Floating Music Toggle Button */}
        <button
          onClick={() => {
            playClickSound();
            toggleAudio();
          }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isPlaying ? 'rgba(232, 139, 199, 0.9)' : 'rgba(140, 82, 120, 0.9)',
            color: '#fff',
            border: 'none',
            fontSize: '28px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease'
          }}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>

        {/* Floating Video Mute/Unmute Button */}
        <button
          onClick={() => {
            playClickSound();
            toggleVideoSound();
          }}
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            zIndex: 9999,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isVideoMuted ? 'rgba(140, 82, 120, 0.9)' : 'rgba(232, 139, 199, 0.9)',
            color: '#fff',
            border: 'none',
            fontSize: '28px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease'
          }}
          title={isVideoMuted ? 'Unmute Video' : 'Mute Video'}
        >
          {isVideoMuted ? '🔇' : '🔊'}
        </button>

        <div className="position-absolute top-50 start-50 translate-middle overlay-content">
          <h2 className="mb-1 typing-text">Innovate, Integrate, Accelerate</h2>

          <h1 className="display-3 fw-bold mb-2 mt-3">
            Empowering{' '}
            <span className="typewriter-wrapper" style={{ color: 'rgb(232, 139, 199)' }}>
              <Typewriter
                words={[
                  'Skills.', 'Career.', 'Growth.', 'Vision.', 'People.',
                  'India.', 'Future.', 'Innovation.', 'Progress.', 'Learners.'
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={2500}
              />
            </span>
          </h1>

          <h3 className="mb-4">V TECH SOLUTIONS</h3>

          <a
            href="#MissionVision"
            id="btn-orchid"
            className="btn btn-lg px-5 py-2 rounded-4"
            onClick={playClickSound}
          >
            Learn More
          </a>

          <p className="lead mt-3 text-white-50">
            Upskill. Get Assessed. Grow with Confidence.
          </p>

          <h2
            className={`mt-4 fw-bold ${fadeClass}`}
            dangerouslySetInnerHTML={{ __html: displayed }}
          ></h2>
        </div>

        {/* QR Ad Popup */}
        <div className="qr-ad-popup" id="quizAd">
          <div className="qr-ad-box zoom-effect">
            <span
              className="qr-close-btn"
              onClick={() => {
                playClickSound();
                document.getElementById('quizAd').style.display = 'none';
              }}
              role="button"
              aria-label="Close Quiz Ad"
            >
              ×
            </span>
            <h4 className="qr-title text-orchid">
              🧠 Let Us Understand Your Thinking Style!
            </h4>
            <img src="/qr.png" alt="QR Code for Quiz" className="qr-ad-image" />
            <a
              href="https://forms.gle/xZhQxqDs8DjL9Jyk9"
              target="_blank"
              rel="noopener noreferrer"
              className="qr-button"
              onClick={playClickSound}
            >
              Take Test
            </a>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <section id="MissionVision" className="scroll-section">
        <MissionVision />
      </section>

      <section id="leadership" className="py-sm-5 mt-sm-5 scroll-section">
        <Leadership />
      </section>

      <section id="affiliations" className="py-sm-4 mt-sm-4 scroll-section">
        <AffiliationsSection />
      </section>

      <section id="placements" className="scroll-section">
        <PlacementSection />
      </section>

      <section id="success" className="py-sm-5 mt-sm-5 scroll-section">
        <SuccessStories />
      </section>

      <section id="contact-section" className="scroll-section">
        <ContactSection />
      </section>

      {/* Marquee */}
      {showMarquee && (
        <>
          <div
            className="position-fixed bottom-0 end-0 translate-middle-x text-white fw-bold"
            style={{ zIndex: 1050, marginBottom: '2.8rem', marginLeft: '1rem', cursor: 'pointer' }}
            onClick={() => {
              playClickSound();
              setShowMarquee(false);
            }}
          >
            <button
              className="btn btn-sm px-3 py-1 fw-bold"
              style={{
                backgroundColor: 'rgba(107, 62, 91, 0.63)',
                color: '#fff',
                borderRadius: '999px'
              }}
            >
              ✕ Close
            </button>
          </div>

          <div className="custom-marquee-wrapper fixed-bottom w-100" style={{ background: '#8c5278' }}>
            <div className="custom-marquee py-2 px-2 text-white fs-5 fw-semibold">
              <div className="marquee-track">
                <span>
                  📢 Admissions Open for 2025 | 💼 300+ Students Placed in 2024 | ✨ Tie-up with Drexel University | 🧑‍🏫 Weekend Full Stack Bootcamps | 🎓 ACCA-Recognized Programs | 📲 Join Our Job Portal | 🚀 Placement Drives Starting August! &nbsp;&nbsp;&nbsp;
                </span>
                <span>
                  📢 Admissions Open for 2025 | 💼 300+ Students Placed in 2024 | ✨ Tie-up with Drexel University | 🧑‍🏫 Weekend Full Stack Bootcamps | 🎓 ACCA-Recognized Programs | 📲 Join Our Job Portal | 🚀 Placement Drives Starting August! &nbsp;&nbsp;&nbsp;
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../main.css';
import Navbar2 from './Navbar2';

const VtechCACS = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 , once: true});
  }, []);

  return (
    <>
      <Navbar2 />
{/* HERO SECTION */}
<section
  className="cacs-hero d-flex align-items-center justify-content-center text-center text-white sections"
  style={{
    backgroundImage: 'url(/Campus/campus13.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative'
  }}
>
  <div
    className="cacs-overlay position-absolute w-100 h-100"
    style={{
      backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 1
    }}
  ></div>

  <div className="container position-relative z-2" data-aos="fade-up">
    <h1 className="display-4 fw-bold" style={{ color: '#e689c5' }}>
      Home of CA / CS Excellence
    </h1>
    <p className="lead mb-4">Explore the journey of future professionals</p>

    <div className="d-flex flex-wrap justify-content-center gap-3">
      <a href="#info-1" className="btn btn-outline-light rounded-pill px-4 py-2">
        Programs & Courses
      </a>
      <a href="#info-2" className="btn btn-outline-light rounded-pill px-4 py-2">
        Core Faculty & Info
      </a>
      <a href="#achievers-1" className="btn btn-outline-light rounded-pill px-4 py-2">
        CA Achievements
      </a>
      <a href="#achievers-2" className="btn btn-outline-light rounded-pill px-4 py-2">
        CS Achievements
      </a>
    </div>
  </div>
</section>
<section id="info-1" className="cacs-info sections ">
   <div className="container position-relative z-2 text-center" data-aos="fade-down">
    <h2 className="display-5 fw-bold mb-3" style={{ color: '#8c5278' }}>
      📘 Offered Programs
    </h2>
    <p className="lead mb-4">
      From CA Foundation to Global Certifications, we offer complete learning paths tailored for aspiring professionals.
    </p>
 
    <div className="row g-4">
      {[
        {
          title: "CA Foundation",
          desc: "Complete syllabus coverage, regular test series, and weekly concept clarity sessions.",
          img: "cacs/course1.png",
          bgClass: "bg-ca"
        },
        {
          title: "CS Executive",
          desc: "Law-focused learning with case studies and MCQ-based mocks.",
          img: "cacs/course2.png",
          bgClass: "bg-cs"
        },
        {
          title: "ACCA & CMA",
          desc: "Global certifications with structured mentoring, recorded sessions, and expert Q&A.",
          img: "cacs/course3.png",
          bgClass: "bg-acca"
        },
        {
          title: "Crash Courses",
          desc: "Focused revision plans, quick concept refreshers, and last-mile exam strategies.",
          img: "cacs/course4.png",
          bgClass: "bg-crash"
        }
      ].map((card, i) => (
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={i * 100} key={i}>
          <div className={`card program-card border-0 shadow-sm h-100 hover-glow ${card.bgClass}`}>
            <img src={card.img} alt={card.title} />
            <div className="card-content">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    {/* INFO PAGE 2 */}
{/* INFO PAGE 2 */}
<section id="info-2" className="faculty-rankers-section sections py-12 px-6 md:px-16">
  <div className="container position-relative z-2 text-center" data-aos="fade-down">
    <h2 className="display-5 fw-bold mb-3" style={{ color: '#8c5278' }}>
      👩‍🏫 Faculty & 🥇 Rankers
    </h2>
    <p className="lead mb-4 text-dark">
      Learn from top professionals and be inspired by our AIR achievers — your journey begins with guidance that counts.
    </p>
  </div>

  {/* Core Faculty */}
  <div className="card-3d-wrapper mb-16" data-aos="fade-right">
    <div className="card flex flex-col md:flex-row items-center gap-8">
      <img
        src="/cacs/staff.png"
        alt="Core Faculty"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="md:w-1/2">
        <h4 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">👩‍🏫 Core Faculty</h4>
        <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
          Our faculty includes Chartered Accountants, Company Secretaries, and experts with over
          10+ years of industry & teaching experience.
        </p>
      </div>
    </div>
  </div>

  {/* Rank Holders */}
  <div className="card-3d-wrapper" data-aos="fade-left">
    <div className="card flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <h4 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">🥇 Rank Holders</h4>
        <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
          Our alumni include AIR holders across CA Foundation, CS Executive, and Intermediate.
          We share their success stories to inspire the next gen.
        </p>
      </div>
      <img
        src="/cacs/rank.png"
        alt="Rank Holders"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>
<section
  id="achievers-1"
  className="ca-achievers-section relative py-12 px-6 md:px-16 overflow-hidden"
>
  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center -z-10"
    style={{
      backgroundImage: "url('/cacs/cacs2.jpg')",
      filter: "brightness(0.5)",
    }}
  />

  {/* Header */}
  <div className="container z-10 text-center" data-aos="fade-down">
    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#8c5278]">
      🎯 CA Achievers
    </h2>
    <p className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
      Our students have consistently excelled across all levels of CA — driven by focused mentoring, strategy, and dedication.
    </p>
  </div>

  {/* 3D Glass Card */}
  <div
    className="card flex flex-col md:flex-row items-center justify-center gap-8 border-0 mt-10"
    data-aos="fade-up"
  >
    {/* Optional Left Block (Image / Spacer) */}
    <div className="hidden md:block md:w-1/2 h-[300px]"></div>

    {/* Glass Text Block */}
    <div className="glass-block md:w-1/2 w-full">
     
<ul className="list-disc list-inside text-left text-base text-gray-900 space-y-6 leading-relaxed">
  <li>
    <div className="text-3xl mb-1 fs-3">🏆</div>
    <strong className="text-lg block mb-1">Outstanding Results:</strong><br />
    Consistent top performances in CA Final, Inter, and Foundation. Many of our students have ranked in the top percentile nationally, showcasing our commitment to academic excellence.
  </li>
  <li>
    <div className="text-3xl mb-1 fs-3">🎓</div>
    <strong className="text-lg block mb-1">Personalized Mentoring:</strong><br />
    In our esteemed institute, each student receives tailored guidance, weekly progress tracking, and strategic mentoring. Our doubt-clearing sessions and performance reviews ensure no student is left behind.
  </li>
  <li>
    <div className="text-3xl mb-1 fs-3">💼</div>
    <strong className="text-lg block mb-1">Career Placements:</strong><br />
    From Big 4s to top MNCs and reputed Indian firms, our achievers have been placed in high-impact roles. The institute actively supports students with resume building, interview prep, and networking.
  </li>
</ul>


    </div>
  </div>
</section>


      {/* ACHIEVERS PAGE 2 */}
      <section id="achievers-2" className="cacs-achievers-alt sections">
        <h2 data-aos="fade-down">🌟 CS Achievers</h2>
        <div className="cs-box-detailed" data-aos="fade-up">
          <ul>
            <li><strong>Executive | CSEET:</strong> Timely syllabus wrap-up and mock practice.</li>
            <li><strong>Guidance:</strong> Law interpretation + answer writing skills.</li>
            <li><strong>Success Rate:</strong> 80%+ clearance across multiple attempts.</li>
          </ul>
          <img src="/cacs/cacs3.jpg" alt="CS Achievers" />
        </div>
      </section>
    </>
  );
};

export default VtechCACS;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar2 from './Navbar2';
import '../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SuccessDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  const testimonials = [
    {
      name: 'Aripitha Omkar',
      salary: '6.08 LPA',
      img: '/arpitha.png',
      company: 'Power School',
      msg: "Enrolling at V Tech was a turning point for me. I came in with zero confidence and only a vague idea of what tech roles even looked like. The program didn’t just teach me to code — it helped me believe in my ability to solve real problems. From my first group project to the final placement mock drills, I felt myself transforming. I remember staying up late debugging a complex backend issue, and instead of quitting, I felt excited — for the first time, I saw myself as a developer. Today, at Power School, I’m not just employed — I’m thriving, and it’s because this place didn’t give up on me, even when I doubted myself.",
    },
    {
      name: 'Bindu D.B',
      salary: '3.92 LPA',
      img: '/bindu.png',
      company: 'Taxedge Boutique',
      msg: "V Tech was more than just training — it was the foundation for a new version of me. I struggled with public speaking, lacked confidence in coding interviews, and always second-guessed my skills. But the way the instructors broke down complex topics, encouraged us to collaborate, and gave genuine feedback — it built me up piece by piece. One of the best moments was during our demo day when I presented my dashboard project and got a standing ovation from the mentors. That moment erased years of hesitation. My job at Taxedge Boutique is a result of what I became at V Tech — prepared, confident, and hungry to learn more.",
    },
    {
      name: 'Deepika T N',
      salary: '3.44 LPA',
      img: '/deepika t n.png',
      company: 'Accenture',
      msg: "I never imagined I’d land at a company like Accenture. Before joining V Tech, I was unsure about what role I could play in the tech industry. But the environment here was incredibly supportive — we were not just taught to code, but to think, to solve, and to communicate. The daily standups, peer reviews, and mini-hackathons made learning fun and competitive. More than anything, it was the consistent push from mentors that helped me believe in my abilities. When I sat for my interview, I didn’t feel like a fresher — I felt like someone who had already worked on meaningful problems. That mindset shift made all the difference.",
    },
    {
      name: 'Kushwanth',
      salary: '3 LPA',
      img: '/kushwanth.png',
      company: 'Wipro',
      msg: "Before V Tech, I knew bits and pieces of programming but didn’t know how to put them together. This place gave me structure, mentorship, and the spark I needed. The best part? Everything was practical. We weren’t solving textbook problems — we were building real features, debugging live issues, and preparing for actual client work. During the placement phase, mock interviews and HR rounds were taken seriously. That level of realism made my actual Wipro interview feel like just another mock. I walked in with confidence, and I owe that to the intense, hands-on ecosystem I was trained in.",
    },
    {
      name: 'Bhavya M S',
      salary: '3 LPA',
      img: '/bhavya.png',
      company: 'Primus',
      msg: "The journey at V Tech felt like a transformation camp — mentally, technically, and emotionally. I entered unsure and hesitant, but left with clarity and a job offer. Every class was interactive, every assignment felt meaningful. I especially appreciated how approachable the mentors were — they’d sit with us after class, review our GitHub code, suggest improvements, and even guide us on how to present during interviews. Those little nudges added up. By the time I appeared for Primus's interview, I wasn’t just answering questions — I was telling stories about what I had built and learned. That confidence came from here.",
    },
    {
      name: 'Badrinatha Y P',
      salary: '2.7 LPA',
      img: '/arpitha2.png',
      company: 'FNH Technologies',
      msg: "I still remember the nervousness of my first class — I felt like I was behind everyone else. But the pace, the care, and the consistency at V Tech changed that. Every time I completed a mini-project or passed a test case on my own, I felt more in control. The instructors never made anyone feel left out — whether you were ahead or behind, there was support. By the final month, I was solving problems I never thought I could, leading discussions, and even mentoring juniors. That growth helped me land a job at FNH Technologies — not because I had all the answers, but because I had learned how to find them.",
    },
  ];

  return (
    <div className="bg-transparent">
      <Navbar2 />
      <div className="container-fluid px-4 py-5 mt-5">
        <h2 className="text-center display-4 fw-bold text-[var(--mocha-dark)] mb-5" style={{color: '#8c5278'}}>
          V Tech Success Stories
        </h2>

        <div className="d-flex flex-column gap-5">
          {testimonials.map((student, index) => {
            const isEven = index % 2 === 0;
            const isTopEarner = parseFloat(student.salary) >= 6;

            return (
              <div
                key={index}
                className={`d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 px-4 py-5 rounded-5 shadow-lg glass-effect border border-light-subtle ${
                  !isEven ? 'flex-lg-row-reverse' : ''
                }`}
                data-aos={isEven ? 'fade-right' : 'fade-left'}
              >
                {/* Student Image */}
                <div className="text-center flex-shrink-0">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="img-fluid"
                    style={{
                      maxHeight: '420px',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Student Info */}
                <div className="px-3" style={{ maxWidth: '600px' }}>
                  <h3 className="fw-bold fs-2 text-[var(--mocha-dark)] mb-2" style={{color: '#8c5278'}}>
                    {student.name}
                    {isTopEarner && (
                      <span className="badge bg-warning text-dark ms-3 fs-6" >Top Package</span>
                    )}
                  </h3>

                  <p className="fs-5 mb-1">
                    <strong>Company:</strong>{' '}
                    <span className="text-primary" >{student.company}</span>
                  </p>
                  <p className="fs-5 mb-1">
                    <strong>Package:</strong> ₹ {student.salary}
                  </p>

                  <div className="bg-light rounded-3 p-3 shadow-sm border-start border-5 border-success mb-3">
                    <i className="bi bi-quote fs-2 text-muted me-2"></i>
                    <span className="fst-italic text-secondary fs-6">"{student.msg}"</span>
                  </div>

                  {student.linkedin && (
                    <a
                      href={student.linkedin}
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin me-1"></i> View LinkedIn
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuccessDetails;

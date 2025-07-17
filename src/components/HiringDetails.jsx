import React from 'react';
import '../main.css';
import Navbar2 from './Navbar2';

const hiringPartners = [
  {
    name: 'Google',
    logo: '/google.png',
    desc: 'Google recruits from our advanced tech pools for roles such as Software Engineer, Site Reliability Engineer, and Cloud Associate. Their process includes DSA-heavy coding rounds, system design interviews, and product sense evaluations. Candidates who crack it are often placed in development teams contributing to Chrome, Search, or Google Cloud.'
  },
  {
    name: 'Infosys',
    logo: '/infosys.png',
    desc: 'Infosys conducts mass hiring through its InfyTQ platform and campus drives for roles like System Engineer, QA Analyst, and Support Executive. The selection process involves online aptitude tests, Java/Python coding challenges, and behavioral interviews. Selected students often undergo Infosys’ Mysore training before onboarding.'
  },
  {
    name: 'HDFC Bank',
    logo: '/hdfc.png',
    desc: 'HDFC hires for roles in IT support, data analytics, and cybersecurity with a focus on digital banking systems. The interview rounds involve logic building, domain understanding, and banking tech frameworks like Finacle. Many graduates join their digital transformation team or backend infrastructure units.'
  },
  {
    name: 'Johnson Controls',
    logo: '/johnson.png',
    desc: 'A global leader in building automation and security systems, Johnson Controls recruits embedded system engineers, firmware testers, and control logic designers. The interview process includes technical quizzes, panel rounds, and product case studies. They often prefer candidates with hands-on IoT or automation projects.'
  },
  {
    name: 'Accenture',
    logo: '/accenture.png',
    desc: 'Accenture is a major recruiter offering roles in application development, cloud support, Salesforce, SAP, and testing. Their hiring flow includes cognitive and technical assessments followed by communication evaluation and virtual interviews. They value versatility and quick learning among fresher candidates.'
  },
  {
    name: 'TCS',
    logo: '/tcs.png',
    desc: 'TCS conducts the National Qualifier Test (NQT) and smart hiring drives for positions like Assistant System Engineer, IT Support Executive, and Digital Cadre roles. The recruitment cycle is standardized but competitive, involving aptitude, coding, and scenario-based reasoning. Successful candidates are offered pan-India job roles with onboarding through TCS Xplore.'
  },
  {
    name: 'Amazon',
    logo: '/amazon.png',
    desc: 'Amazon hires high-performing students for Software Development Engineer internships, Cloud Support roles, and Customer Solutions Associates. Their interviews are structured around problem-solving, data structures, system design (for dev roles), and behavioral alignment with Leadership Principles. Selected students often join in technical or hybrid business-tech domains.'
  },
  {
    name: 'Kotak',
    logo: '/kotak.png',
    desc: 'Kotak Mahindra Bank recruits backend operations professionals, data entry specialists, and cybersecurity interns. Their process includes logic and aptitude rounds, followed by communication tests and business knowledge interviews. Candidates with strong tech understanding of digital banking APIs and security systems are preferred.'
  },
  {
    name: 'Oracle',
    logo: '/oracle.png',
    desc: 'Oracle targets database enthusiasts, cloud infrastructure associates, and application support engineers through tailored tests and domain-driven interviews. Java, SQL, and data flow concepts are frequently assessed. Students joining Oracle often work on performance optimization, enterprise application development, or SaaS support.'
  },
  {
    name: 'IBM',
    logo: '/ibm.png',
    desc: 'IBM offers placements in roles like Associate Developer, Data Analyst, and Infrastructure Engineer. Interviews assess Python, Java, analytics aptitude, and business logic. IBM also runs skilling bootcamps and prefers candidates with project-based learning and design thinking exposure. Many join on hybrid projects involving AI and cloud tech.'
  },
  {
    name: 'Hitachi',
    logo: '/hitachi.png',
    desc: 'Hitachi hires electrical and software graduates for roles in smart grid automation, data engineering, and energy infrastructure development. The selection includes written technical assessments and domain panel interviews. Preferred skills include C/C++, PLC systems, and knowledge of embedded control systems.'
  },
  {
    name: 'ICICI',
    logo: '/icici.png',
    desc: 'ICICI Bank onboards freshers into technical support, data governance, and MIS executive roles through streamlined tests and business-focused discussions. They value candidates with good Excel skills, data visualization basics, and familiarity with financial workflows. Entry roles often lead to long-term cross-functional growth.'
  }
];


const HiringDetails = () => {
  return (
    <>
      <Navbar2 />

      {/* Hero Section */}
      <section className="hero-section text-white text-center d-flex align-items-center">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">We Partner With the Best</h1>
          <p className="lead mt-3 mb-4">
            From global tech giants to India’s top banks, our hiring partners trust the quality of our training and consistently recruit our graduates.
          </p>
          <button className="btn btn-light px-4 py-2 fw-semibold rounded-pill" disabled>
            Meet Our Partners
          </button>
        </div>
      </section>

      {/* Real Hiring Flow */}
    <section className="py-5" style={{ background: 'rgba(140, 82, 120, 0.36)' }}>
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: '#8c5278' }}>
      How the Hiring Happens
    </h2>
    <div className="row g-4 text-center">
      <div className="col-md-3">
        <div className="p-4 bg-white h-100 shadow-sm rounded">
          <h5 className="fw-semibold">1. Industry-Aligned Training</h5>
          <p className="text-muted">Hands-on courses in development, testing, data analysis & communication.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="p-4 bg-white h-100 shadow-sm rounded">
          <h5 className="fw-semibold">2. Mock Interviews & Projects</h5>
          <p className="text-muted">Simulated technical and HR interviews + project showcases to prepare students.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="p-4 bg-white h-100 shadow-sm rounded">
          <h5 className="fw-semibold">3. Direct Company Drives</h5>
          <p className="text-muted">Companies conduct assessments and interviews on-campus or virtually.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="p-4 bg-white h-100 shadow-sm rounded">
          <h5 className="fw-semibold">4. Offers & Onboarding</h5>
          <p className="text-muted">Selected candidates receive LOIs and job offer letters, with onboarding support.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Why Us */}
      <section className="why-partners-section py-5" style={{background: 'rgba(140, 82, 120, 0.36)'}}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: '#8c5278' }}>Why Our Hiring Network Works</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="fw-semibold">Curriculum Built for Jobs</h5>
                <p className="text-muted">We teach what companies need — not just theory, but tools and teamwork.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="fw-semibold">Real Outcomes, Not Just Promises</h5>
                <p className="text-muted">Our alumni work at global firms, thanks to intensive training and mentorship.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="fw-semibold">Placement-Ready Confidence</h5>
                <p className="text-muted">By the time drives start, students are already placement-ready in mindset and skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Cards */}
      <div className="container py-5">
        <h2 className="text-center display-5 fw-bold mb-4" style={{ color: '#8c5278' }}>
          Hiring Partners & Roles Offered
        </h2>
        <p className="text-center mb-5 fs-5">
          These companies don’t just visit — they recruit consistently, offering roles that span software, support, testing, analytics, and more.
        </p>

        <div className="row gy-5">
          {hiringPartners.map((partner, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex">
              <div className="partner-card flex-fill p-4 text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: '90px', objectFit: 'contain' }}
                />
                <h5 className="fw-bold mb-2" style={{ color: '#8c5278' }}>{partner.name}</h5>
                <p className="text-black fs-6">{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HiringDetails;

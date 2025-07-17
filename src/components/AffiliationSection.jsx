import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar2 from "./Navbar2";
import "../main.css";

const partners = [
  {
    name: "Jain Online",
    logo: "/affiliations/jain.png",
    info: "Flexible online degree partner.",
    desc: "Jain Online is a leading platform for UGC-approved online degrees. V Tech collaborates to offer flexible, affordable learning paths with real-world project exposure and industry mentoring."
  },
  {
    name: "NSDC",
    logo: "/affiliations/nsdc.png",
    info: "Skill development ecosystem partner.",
    desc: "NSDC is India's premier skill development body. V Tech collaborates with NSDC to align training with national skilling standards. This empowers students with industry-recognized credentials and employability."
  },
  {
    name: "Tally",
    logo: "/affiliations/tally.png",
    info: "Certified accounting training ally.",
    desc: "Tally is India’s most trusted accounting software. V Tech offers certified training programs to equip students with practical Tally skills. Learners graduate job-ready for roles in finance and accounting."
  },
  {
    name: "Bosch",
    logo: "/affiliations/bosch.png",
    info: "Industry-aligned technical courses.",
    desc: "Bosch is a global leader in technology and engineering. V Tech collaborates to deliver hands-on training in automation, IoT, and electronics. This prepares learners for careers in smart manufacturing and tech."
  },
  {
    name: "QSpiders",
    logo: "/affiliations/qspiders.png",
    info: "Software testing & placement partner.",
    desc: "QSpiders is India’s leading software testing training provider. V Tech partners to offer QA, automation, and test engineering programs. The collaboration also facilitates real-time placements for our tech learners."
  },
  {
    name: "Skyllx",
    logo: "/affiliations/skyllx.png",
    info: "Technology training innovator.",
    desc: "Skyllx specializes in immersive tech training programs. Through this partnership, V Tech provides advanced bootcamps in full-stack development, data science, and cloud. Learners gain industry-relevant certifications."
  },
  {
    name: "Drexel University",
    logo: "/affiliations/drexel.png",
    info: "International academic collab.",
    desc: "Drexel is a globally recognized research university in the U.S. V Tech's academic alliance brings international exposure, research support, and mentorship. Students benefit from a truly global learning perspective."
  },
  {
    name: "CMR University",
    logo: "/affiliations/cmr.png",
    info: "Degree certifications & mentoring.",
    desc: "CMR is a UGC-recognized Indian university. V Tech and CMR co-deliver structured degree programs with mentorship and project-based learning. This empowers students with academic depth and career support."
  },
  {
    name: "Amity",
    logo: "/affiliations/amity.png",
    info: "Partner in online education delivery.",
    desc: "Amity is a pioneer in digital higher education. V Tech leverages Amity’s platform to deliver flexible, accredited online programs. Working professionals benefit from recognized degrees and convenience."
  },
  {
    name: "Alliance",
    logo: "/affiliations/alliance.png",
    info: "Research & curriculum support.",
    desc: "Alliance is known for its focus on innovation and academic excellence. V Tech collaborates on research-driven curriculum design and faculty training. This ensures learners receive cutting-edge education."
  },
  {
    name: "ACCA",
    logo: "/affiliations/acca.webp",
    info: "Accounting & career advancement.",
    desc: "ACCA is a globally recognized body for professional accountants. V Tech delivers ACCA-aligned training, helping learners earn international accounting credentials. This opens doors to global finance careers."
  }
];

const AffiliationsSection = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    startTimer();
    return pauseTimer;
  }, []);

  const handleNext = () => {
    pauseTimer();
    setIndex((prev) => (prev + 1) % partners.length);
    startTimer();
  };

  const handlePrev = () => {
    pauseTimer();
    setIndex((prev) => (prev - 1 + partners.length) % partners.length);
    startTimer();
  };

  const current = partners[index];

  return (
    <>
    <section className="position-relative d-flex flex-column justify-content-center align-items-center min-vh-60 w-100 px-3 py-5 mt-4 overflow-hidden">
    
      {/* Blurred Background Image */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="position-absolute"
          style={{
            width: "1000px",
            height: "600px",
            backgroundImage: `url(${current.logo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(0.6px) brightness(0.8)",
            zIndex: 1,
            opacity: 0.2
          }}
          />
      </AnimatePresence>

      {/* Section Heading */}
      <div className=" text-center z-3">
        <h1 className="fw-bold mb-2" style={{ color: "#8c5278" }}>
          Our Collaborations
        </h1>
        <p className="text-dark opacity-75 fst-italic fs-5">
          Empowering learners with the best partners
        </p>
      </div>

      {/* Partner Card */}
      <div className="z-3 w-100 d-flex justify-content-center mb-5 pb-5">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={pauseTimer}
          onMouseLeave={startTimer}
          className="text-light p-4 p-md-5 mt-5 pt-5 shadow"
          style={{
            width: "100%",
            maxWidth: "700px",
            backgroundColor: "rgba(247, 246, 246, 0.29)",
            borderRadius: "1rem"
          }}
          >
          <div className="d-flex flex-column align-items-center">
            <img
              src={current.logo}
              alt={`${current.name} Logo`}
              style={{
                maxHeight: "100px",
                objectFit: "contain",
                marginBottom: "1rem"
              }}
              />
            <p className="text-black text-center mb-3" style={{ fontSize: "1.05rem" }}>
              {current.desc}
            </p>
            <h3 className="fw-semibold text-dark mb-1">{current.name}</h3>
            <p className="text-muted">{current.info}</p>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="btn btn-outline-dark rounded-pill px-4"
                >
                ◀ Prev
              </button>
              <button
                onClick={handleNext}
                className="btn rounded-pill px-4"
                style={{ backgroundColor: "#8c5278", color: "white" }}
                >
                Next ▶
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Learn More CTA */}
      <div className=" z-3 text-center">
        <a
          href="/Support"
          className="btn px-5 fs-5 fw-semibold rounded-pill"
          style={{
            backgroundColor: "#8c5278",
            color: "white",
            transition: "background-color 0.3s ease"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#6e3f5f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8c5278")}
          >
          Learn More
        </a>
      </div>
    </section>
          </>
  );
};

export default AffiliationsSection;

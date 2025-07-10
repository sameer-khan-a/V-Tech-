import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';
const JainWLP = {
  name: "JAIN University Work-Integrated Learning Programs (WILSP)",
  location: "Bangalore, Karnataka",
  bannerImage: "https://source.unsplash.com/1600x500/?corporate,learning",
  description:
    "JAIN University, in partnership with NSDC & industry sponsors, offers Work‑Integrated Skill & Diploma programs—combining live theory with on-the-job training (OJT) plus stipend and NSDC certification. Designed to upskill and employ youth through “earn-and-learn” models.",
  courses: [
    { name: "WILSP Certificate Program", duration: "12–24 Months", image: "/thumbnails/WLP/WLP1.avif" },
    { name: "WILSP Advanced Diploma Program", duration: "12–24 Months", image: "/thumbnails/WLP/WLP2.avif" },
    { name: "WILSP Certificate Program", duration: "12–24 Months", image: "/thumbnails/WLP/WLP1.avif" },
    { name: "WILSP Advanced Diploma Program", duration: "12–24 Months", image: "/thumbnails/WLP/WLP2.avif" }
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?working,professional",
    "https://source.unsplash.com/400x250/?remote,learning",
    "https://source.unsplash.com/400x250/?employee,training",
    "https://source.unsplash.com/400x250/?on,the,job,training"
  ]
};

export default function JainWLPOnline() {
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={JainWLP} />
      </div>
    </div>
  );
}

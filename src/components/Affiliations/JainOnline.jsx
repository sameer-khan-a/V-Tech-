import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';
const JainInstitue = {
  name: "JAIN Online (Jain University)",
  location: "Bangalore, Karnataka",
  bannerImage: "https://source.unsplash.com/1600x500/?university,online,learning",
  description:
    "JAIN Online, the digital arm of Jain University (NAAC A++), offers UGC‑entitled online degree programs—UG, PG, diplomas and certificates—designed for working professionals and remote learners.",
  courses: [
    { name: "BBA (online)", duration: "3 Years", image: "/thumbnails/jain/jain.avif" },
    { name: "B.Com (online)", duration: "3 Years", image: "/thumbnails/jain/jain1.avif" },
    { name: "BCA (online)", duration: "3 Years", image: "/thumbnails/jain/jain2.avif" },
    { name: "MBA (online)", duration: "2 Years", image: "/thumbnails/jain/jain3.avif" },
    { name: "MCA (online)", duration: "2 Years", image: "/thumbnails/jain/jain4.avif" },
    { name: "M.Com (online)", duration: "2 Years", image: "/thumbnails/jain/jain5.avif" }
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?online,classroom",
    "https://source.unsplash.com/400x250/?students,laptop",
    "https://source.unsplash.com/400x250/?virtual,learning",
    "https://source.unsplash.com/400x250/?distance,education"
  ]
};


function JainOnline() {
  return (
    <div>
      <Navbar2 />

      {/* 🧁 Padding to avoid navbar overlap */}
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={JainInstitue} />
      </div>
    </div>
  );
}

export default JainOnline;

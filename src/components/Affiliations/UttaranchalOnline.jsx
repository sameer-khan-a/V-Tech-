import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';
const UttaranchalInstitute = {
  name: "Uttaranchal University Online",
  location: "Dehradun, Uttarakhand",
  bannerImage: "https://source.unsplash.com/1600x500/?uttarakhand,university",
  description:
    "Uttaranchal University Online (NAAC A+, UGC‑DEB & AICTE approved) offers fully online UG and PG degree programs via a modern LMS with live lectures, LMS access, placement support, and apprenticeship options.",
  courses: [
    { name: "B.A. (Online)", duration: "3 Years", image: "/thumbnails/uttaranchal/Uttaranchal1.avif" },
    { name: "BBA (Online)", duration: "3 Years", image: "/thumbnails/uttaranchal/Uttaranchal2.avif" },
    { name: "BCA (Online)", duration: "3 Years", image: "/thumbnails/uttaranchal/Uttaranchal3.avif" },
    { name: "MBA (Online)", duration: "2 Years", image: "/thumbnails/uttaranchal/Uttaranchal4.avif" },
    { name: "MCA (Online)", duration: "2 Years", image: "/thumbnails/uttaranchal/Uttaranchal5.avif" }
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?dehradun,university",
    "https://source.unsplash.com/400x250/?online,classroom",
    "https://source.unsplash.com/400x250/?laptop,study",
    "https://source.unsplash.com/400x250/?e-learning"
  ]
};


export default function UttaranchalOnline() {
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={UttaranchalInstitute} />
      </div>
    </div>
  );
}

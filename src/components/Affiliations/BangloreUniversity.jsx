import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';
const BangaloreUniversity = {
  name: "Bangalore University – Centre for Distance & Online Education",
  location: "Bangalore, Karnataka",
  bannerImage: "https://source.unsplash.com/1600x500/?bangalore,university,online",
  description:
    "Bangalore University's Centre for Distance & Online Education (CDE) offers UGC‑DEB approved UG, PG, diploma, and certificate programs—designed for working professionals and remote learners.",
  courses: [
    { name: "B.A.", duration: "3 Years", image: "/thumbnails/Banglore/BU1.avif" },
    { name: "B.Com", duration: "3 Years", image: "/thumbnails/Banglore/BU2.avif" },
    { name: "MCA", duration: "2 Years", image: "/thumbnails/Banglore/BU3.avif" },
    { name: "M.A.", duration: "2 Years", image: "/thumbnails/Banglore/BU4.avif" },
    { name: "M.Com", duration: "2 Years", image: "/thumbnails/Banglore/BU5.avif" },
    { name: "M.Sc.", duration: "2 Years", image: "/thumbnails/Banglore/BU6.avif" }
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?bangalore,students",
    "https://source.unsplash.com/400x250/?elearning",
    "https://source.unsplash.com/400x250/?online,classroom",
    "https://source.unsplash.com/400x250/?distance,education"
  ]
};

function BangaloreOnline() {
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={BangaloreUniversity} />
      </div>
    </div>
  );
}

export default BangaloreOnline;

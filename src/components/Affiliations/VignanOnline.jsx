import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';
const VignanInstitute = {
  name: "Vignan University Online (VFSTR)",
  location: "Guntur, Andhra Pradesh",
  bannerImage: "https://source.unsplash.com/1600x500/?technology,education,online",
  description:
    "Vignan University Online offers UGC‑DEB, AICTE‑approved & NAAC A+ accredited online UG/PG programs (BBA, BCA, MBA, MCA) plus value-added certificate courses, live sessions, strong LMS and placement support.",
  courses: [
    { name: "Online BBA", duration: "3 Years", image: "/thumbnails/vignan/vignan1.avif" },
    { name: "Online BCA", duration: "3 Years", image: "/thumbnails/vignan/vignan2.avif" },
    { name: "Online MBA (multiple specializations)", duration: "2 Years", image: "/thumbnails/vignan/vignan3.avif" },
    { name: "Online MCA", duration: "2 Years", image: "/thumbnails/vignan/vignan4.avif" }
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?guntur,university",
    "https://source.unsplash.com/400x250/?e-learning,classroom",
    "https://source.unsplash.com/400x250/?technology,students",
    "https://source.unsplash.com/400x250/?coding,education"
  ]
};

export default function VignanOnline() {
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={VignanInstitute} />
      </div>
    </div>
  );
}

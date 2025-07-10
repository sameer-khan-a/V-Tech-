import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';
const KSOUInstitute = {
  name: "Karnataka State Open University (KSOU)",
  location: "Mysuru, Karnataka",
  bannerImage: "https://source.unsplash.com/1600x500/?open,university,mysore",
  description:
    "KSOU is a premier open university recognized by UGC & NAAC‑‘A+’, offering quality education via ODL/online mode. With flexible programs—UG, PG, diploma, certificate—KSOU empowers learners across India.",
  courses: [
    { name: "B.A. (History, Eco, Political Science)", duration: "3 Years", image: "/thumbnails/Open University/KSOU.avif" },
    { name: "B.Com (Corporate Accounting)", duration: "3 Years", image: "/thumbnails/Open University/KSOU2.avif" },
    { name: "BCA", duration: "3 Years", image: "/thumbnails/Open University/KSOU3.avif" },
    { name: "M.A. English / Kannada / Hindi / Economics", duration: "2 Years", image: "/thumbnails/Open University/KSOU4.avif" },
    { name: "M.Com", duration: "2 Years", image: "/thumbnails/Open University/KSOU5.avif" },
    { name: "MBA (ODL, AICTE‑approved)", duration: "2 Years", image: "/thumbnails/Open University/KSOU6.avif" }
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?mysore,university,campus",
    "https://source.unsplash.com/400x250/?students,library",
    "https://source.unsplash.com/400x250/?distance,education,online",
    "https://source.unsplash.com/400x250/?graduation,openlearning"
  ]
};



function KSOUOnline() {
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={KSOUInstitute} />
      </div>
    </div>
  );
}

export default KSOUOnline;

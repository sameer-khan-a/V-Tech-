import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';

const MizoramUniversity = {
  name: "Mizoram University – Online",
  location: "Aizawl, Mizoram",
  bannerImage: "https://source.unsplash.com/1600x500/?online,university,northeast",
  description:
    "Mizoram University Online offers UGC-approved flexible UG/PG programs—BBA, BCA, B.Com, MBA, MCA, M.A., M.Com, MSW—plus certificates and diplomas, blending self-paced study with live components.",
  courses: [
    { name: "Online BBA (E‑Business)", duration: "3 Years", image: "/thumbnails/Mizoram/mizo1.avif" },
    { name: "Online BCA", duration: "3 Years", image: "/thumbnails/Mizoram/mizo2.avif" },
    { name: "Online B.Com E‑Commerce", duration: "3 Years", image: "/thumbnails/Mizoram/mizo3.avif" },
    { name: "Online B.Com E‑Accounting", duration: "3 Years", image: "/thumbnails/Mizoram/mizo4.avif" },
    { name: "Online MBA (Marketing, Finance, etc.)", duration: "2 Years", image: "/thumbnails/Mizoram/mizo5.avif" },
    { name: "Online M.Com E‑Commerce", duration: "2 Years", image: "/thumbnails/Mizoram/mizo6.avif" },
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?northeast,india,students",
    "https://source.unsplash.com/400x250/?online,learning,laptop",
    "https://source.unsplash.com/400x250/?graduation,cap,students",
    "https://source.unsplash.com/400x250/?mizoram,university,campus"
  ]
};


function MizoramOnline() {
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={MizoramUniversity} />
      </div>
    </div>
  );
}

export default MizoramOnline;

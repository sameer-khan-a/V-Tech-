import React from 'react';
import InstituteDetails from '../InstituteDetails';
import '../../main.css';
import Navbar2 from '../Navbar2';

const AndhraInstitute = {
  name: "Andhra University – Centre for Distance & Online Education",
  location: "Visakhapatnam, Andhra Pradesh",
  bannerImage: "https://source.unsplash.com/1600x500/?andhra,university",
  description:
    "Andhra University’s CDOE offers recognized online and distance programs—UG, PG, diploma, certificate—designed for working professionals and distance learners.",
  courses: [
    { name: "B.Com (Accountancy)", duration: "3 Years", image: "/thumbnails/Vignan/Vignan1.avif" },
    { name: "B.A. (History, Economics, Politics)", duration: "3 Years", image: "/thumbnails/Vignan/Vignan2.avif" },
    
    { name: "M.A. English", duration: "2 Years", image: "/thumbnails/Vignan/Vignan3.avif" },
    { name: "M.Com", duration: "2 Years", image: "/thumbnails/Vignan/Vignan4.avif" },
    { name: "MBA (Executive & Regular)", duration: "2–3 Years", image: "/thumbnails/Vignan/Vignan5.avif" },
    { name: "MCA", duration: "2 Years", image: "/thumbnails/Vignan/Vignan6.avif" },
    
  ],
  gallery: [
    "https://source.unsplash.com/400x250/?vizag,campus",
    "https://source.unsplash.com/400x250/?andhra,classroom",
    "https://source.unsplash.com/400x250/?online,learning",
    "https://source.unsplash.com/400x250/?digital,education"
  ]
};


export default function AndhraOnline() {
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: '20px', paddingBottom: '2rem' }}>
        <InstituteDetails institute={AndhraInstitute} />
      </div>
    </div>
  );
}


import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../main.css';
import Navbar2 from "./Navbar2";

const activityData = [
  {
    category: "Support Workshops",
    description: "Hands-on sessions designed to enhance your practical skills and knowledge.",
    images: [
      { id: "workshop1", src: "/Support/Workshop1.jpg", alt: "Support Workshop 1" },
      { id: "workshop2", src: "/Support/Workshop2.png", alt: "Support Workshop 2" },
    ],
  },
  {
    category: "Placement Drives",
    description: "Connecting talented individuals with leading industry opportunities and career paths.",
    images: [
      { id: "placement1", src: "/Support/Placement1.jpg", alt: "Placement Drive 1" },
      { id: "placement2", src: "/Support/Placement2.jpg", alt: "Placement Drive 2" },
    ],
  },
  {
    category: "Tally Courses",
    description: "Mastering financial accounting with comprehensive Tally ERP training for business proficiency.",
    images: [
      { id: "tally1", src: "/Support/Tally1.png", alt: "Tally Course Session 1" },
      { id: "tally2", src: "/Support/Tally2.png", alt: "Tally Course Session 2" },
    ],
  },
  {
    category: "Counselling Sessions",
    description: "Personalized guidance and support for academic and career growth.",
    images: [
      { id: "counselling1", src: "/Support/Counselling1.png", alt: "Counselling Session 1" },
      { id: "counselling2", src: "/Support/Counselling2.jpg", alt: "Counselling Session 2" },
    ],
  },
  {
    category: "Certification Programs",
    description: "Achieve industry recognition and validate your skills with our specialized certification courses.",
    images: [
      { id: "certification1", src: "/Support/Certification1.png", alt: "Certification Ceremony 1" },
      { id: "certification2", src: "/Support/Certification2.png", alt: "Certification Ceremony 2" },
    ],
  },
  {
    category: "Campus Life Events",
    description: "Vibrant events and activities that define the dynamic V TECH campus experience.",
    images: [
      { id: "campus1", src: "/Support/Campus1.png", alt: "Campus Life Event 1" },
      { id: "campus2", src: "/Support/Campus2.png", alt: "Campus Life Event 2" },
    ],
  },
];

const Support = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="support_page">
      <Navbar2 />

 <section
  className="support_hero"
  style={{ backgroundImage: 'url(/support/Counselling2.jpg)', backgroundPosition: 'center 35%' }}
>
  <div className="support_overlay"></div>
  <div className="support_hero_content" data-aos="fade-down">
    <h1 className="support_hero_title" style={{color: '#f79bd6ff'}}>Shaping Careers, Securing Futures</h1>
    <p className="support_hero_subtitle">
      At V TECH, we equip you with the right skills, guidance, and industry exposure to land your dream job and build a successful career.
    </p>
  </div>
</section>


      <section className="support_section ">
        <h2 className="support_section_title" data-aos="fade-up" style={{color: '#8c5278'}}>
          Explore Our Vibrant Activities
        </h2>

        {activityData.map((categoryGroup, index) => (
          <div key={index} className="support_category_group">
            <h3 className="support_category_title" data-aos="fade-right" style={{color: '#8c5278'}}>
              {categoryGroup.category}
            </h3>
            <p className="support_category_description text-dark" data-aos="fade-left">
              {categoryGroup.description}
            </p>
            <div className="support_image_grid">
              {categoryGroup.images.map((activity, i) => (
                <div
                  key={activity.id}
                  className="support_image_card"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  onClick={() => setSelectedImage(activity)}
                >
                  <img
                    src={activity.src}
                    alt={activity.alt}
                    loading="lazy"
                    className="support_image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/600x400/4A6572/ECF0F1?text=Image+Error';
                    }}
                  />
                  <div className="support_image_overlay"></div>
                  <div className="support_image_text">
                    <h4>{activity.alt}</h4>
                    <p>Click to view details</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="support_cta" style={{ backgroundImage: 'url(https://placehold.co/1200x600/F1C40F/2C3E50?text=Join+Our+Community)' }}>
        <div className="support_cta_overlay"></div>
        <div className="support_cta_content" data-aos="zoom-in">
          <h2>Be Part of the V TECH Community!</h2>
          <p>From skill-building workshops to vibrant campus events—our community shapes futures.</p>
          <a href="#" className="support_cta_button">Join the Legacy</a>
        </div>
      </section>

      {selectedImage && (
        <div className="support_modal" onClick={() => setSelectedImage(null)}>
          <div className="support_modal_content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in">
            <button className="support_modal_close" onClick={() => setSelectedImage(null)}>&times;</button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="support_modal_image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/800x600/4A6572/ECF0F1?text=Image+Error';
              }}
            />
            <p className="support_modal_caption">{selectedImage.alt}</p>
            <p className="support_modal_note">Click anywhere outside the image to close.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;

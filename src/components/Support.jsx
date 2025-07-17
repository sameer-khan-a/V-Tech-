import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../main.css";
import Navbar2 from "./Navbar2";

const activityData = [
{
  "category": "Support Workshops",
  "description": "Hands-on sessions designed to enhance your practical skills, culminating in valuable certification opportunities.",
  "images": [
    {
      "id": "workshop1",
      "src": "/Support/Workshop1.jpg",
      "alt": "Workshop on Java Full Stack Development, covering web development from scratch to advanced topics"
    },
    {
      "id": "workshop2",
      "src": "/Support/Workshop2.png",
      "alt": "Certification issuing ceremony for participants of the 3-month Skyllx Python and Data Analysis workshop"
    }
  ]
},
{
  "category": "Placement Drives",
  "description": "Connecting talented individuals with leading industry opportunities and diverse career paths through dedicated placement drives.",
  "images": [
    {
      "id": "placement1",
      "src": "/Support/Placement1.jpg",
      "alt": "Placement drive conducted by NoBroker company for various positions"
    },
    {
      "id": "placement2",
      "src": "/Support/Placement2.jpg",
      "alt": "Hiring drive organized by Skyllx hiring partner, involving multiple acclaimed companies"
    }
  ]
},
{
  "category": "Tally Courses",
  "description": "Master financial accounting with Tally ERP training, culminating in certification and supported by expert-led 'Train the Trainer' programs for exceptional teaching.",
  "images": [
    {
      "id": "tally1",
      "src": "/Support/Tally1.png",
      "alt": "Certificate issuance ceremony for students completing Tally Workshop"
    },
    {
      "id": "tally2",
      "src": "/Support/Tally2.png",
      "alt": "Industry experts conducting a 'Train the Trainer' program for Tally instructors"
    }
  ]
},
{
  "category": "Counselling Sessions",
  "description": "Receive personalized guidance from industry experts for career advancement and securing top job opportunities.",
  "images": [
    {
      "id": "counselling1",
      "src": "/Support/Counselling1.png",
      "alt": "One-on-one personalized career counselling session with an industry expert"
    },
    {
      "id": "counselling2",
      "src": "/Support/Counselling2.jpg",
      "alt": "Industry expert guiding a student on career paths and job acquisition strategies"
    }
  ]
},
 {
  "category": "Certification Programs",
  "description": "Achieve industry recognition and validate your skills with our specialized certification courses and practical workshops.",
  "images": [
    {
      "id": "certification1",
      "src": "/Support/Certification1.png",
      "alt": "Students pursuing certification courses from platforms like Coursera and Udemy"
    },
    {
      "id": "certification2",
      "src": "/Support/Certification2.png",
      "alt": "Participants engaged in a one-week Java Full Stack Development workshop"
    }
  ]
},
{
  "category": "Industrial Visits",
  "description": "Explore diverse academic environments through our insightful campus visits and gain practical insights with our industrial visits.",
  "images": [
    {
      "id": "bosch_bridge_campus_visit",
      "src": "/Support/Campus1.png",
      "alt": "Students on a Bosch Bridge Industrial visit"
    },
    {
      "id": "jain_university_bangalore_visit",
      "src": "/Support/Campus2.png",
      "alt": "Students on a Jain University Bangalore campus visit"
    }
  ]
}
];

const Support = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="support_page">
      <Navbar2 />

      {/* Hero Section */}
      <section
        className="support_hero"
        style={{
          backgroundImage: "url(/support/Counselling2.jpg)",
          backgroundPosition: "center 35%",
        }}
      >
        <div className="support_overlay"></div>
        <div className="support_hero_content" data-aos="fade-down">
          <h1 className="support_hero_title" style={{ color: "#f79bd6ff" }}>
            Shaping Careers, Securing Futures
          </h1>
          <p className="support_hero_subtitle">
            At V TECH, we equip you with the right skills, guidance, and industry exposure to land your dream job and build a successful career.
          </p>
        </div>
      </section>

      {/* Activity Section */}
      <section className="support_section">
        <h2 className="support_section_title" data-aos="fade-up" style={{ color: "#8c5278" }}>
          Explore Our Vibrant Activities
        </h2>

        {activityData.map((categoryGroup, index) => (
          <div key={index} className="support_category_group">
            <h3 className="support_category_title" data-aos="fade-right" style={{ color: "#8c5278" }}>
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
                      e.target.src = "https://placehold.co/600x400/4A6572/ECF0F1?text=Image+Error";
                    }}
                  />
                  <div className="support_image_overlay"></div>
                  <div className="support_image_text">
                    <p>Click to view details</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="support_cta" style={{ backgroundImage: "url(/Support/Workshop1.jpg)" }}>
        <div className="support_cta_overlay"></div>
        <div className="support_cta_content" data-aos="zoom-in">
          <h2 style={{ color: "#f79bd6ff" }}>Be Part of the V TECH Community!</h2>
          <p>From skill-building workshops to vibrant campus events—our community shapes futures.</p>
          <a href="/BookAppointment" className="support_cta_button" style={{ backgroundColor: "#8c5278" }}>Join the Legacy</a>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="support_modal" onClick={() => setSelectedImage(null)}>
          <div
            className="support_modal_content"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <button className="support_modal_close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="support_modal_image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x600/4A6572/ECF0F1?text=Image+Error";
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

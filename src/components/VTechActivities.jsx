import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../main.css";
import Navbar2 from "./Navbar2";

const activityExtensions = [
  'jpg', 'jpg', 'jpg', 'png', 'png', 'png', 'png', 'png', 'png',
  'png', 'png', 'png', 'png', 'png', 'jpg', 'jpg', 'jpg', 'jpg',
  'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg', 'jpg'
];

const activityImages = activityExtensions.map((ext, i) => ({
  src: `/Activities/Activity${i + 1}.${ext}`,
  alt: `V TECH Activity ${i + 1}`,
}));

const VTechActivities = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <Navbar2 />

      {/* HERO */}
      <section className="activity-hero bg-blur" style={{ backgroundImage: 'url(/Activities/Activity8.png)' }}>
        <div className="container" data-aos="fade-down">
          <h1>V TECH Activities</h1>
          <p>Dive into the thrilling events, workshops, and celebrations that make our legacy shine.</p>
        </div>
      </section>

      {/* GRID */}
      <section className="activity-grid-section mt-5">
        <div className="activity-grid">
          {activityImages.map((activity, i) => (
            <div
              key={i}
              className="activity-card"
              data-aos="fade-up"
              onClick={() => setSelected(activity)}
            >
              <img src={activity.src} alt={activity.alt} loading="lazy" />
              <div className="activity-card-content">
                <h3>{activity.alt}</h3>
                <p>
                  A cherished moment that showcases the vibrant culture, innovation, and joy at V TECH.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="activity-cta bg-blur mt-5" style={{ backgroundImage: 'url(/Activities/Activity10.png)' }}>
        <div className="container" data-aos="zoom-in">
          <h2 style={{color: '#f194cf'}}>Be Part of the Action Next Time!</h2>
          <p>From tech talks to talent nights—our events shape leaders and leave memories. Join us now!</p>
          <a href="/register">Join the Legacy</a>
        </div>
      </section>

      {/* ZOOM MODAL */}
      {selected && (
        <div className="activity-modal" onClick={() => setSelected(null)}>
          <div className="activity-modal-content" data-aos="zoom-in">
            <img src={selected.src} alt={selected.alt} />
            <p className="zoom-caption">{selected.alt}</p>
            <button className="activity-close">✕</button>
          </div>
        </div>
      )}
    </>
  );
};

export default VTechActivities;

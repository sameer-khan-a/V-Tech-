import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../main.css';
import Navbar2 from './Navbar2';
import { useRef } from 'react';

const galleryImages = Array.from({ length: 23 }, (_, i) => ({
  src: `/gallery/gallery${i + 1}.jpg`,
  alt: `V TECH Moment ${i + 1}`,
}));

const campusImages = Array.from({ length: 14 }, (_, i) => ({
  src: `/campus/campus${i + 1}.${i + 1 < 8 ? 'jpg' : 'jpeg'}`,
  alt: `V TECH Campus View ${i + 1}`,
}));


const VTechGallery = () => {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
const galleryRef = useRef(null);
const campusRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <Navbar2 />

      {/* HERO BANNER */}
  <section className="vtech-split-hero text-white">
  <div className="container">
    <div className="split-banner-content" data-aos="fade-down">
      <h1 className="display-4 fw-bold mb-3" style={{color: '#f194cf'}}>V TECH Moments</h1>
      <p className="lead">Choose your journey through our legacy</p>
    </div>

    <div className="path-buttons mt-5" data-aos="fade-up" >
    <button
  className="path-btn gallery-btn"
  onClick={() => galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
>
  📸 The Gallery
</button>

<button
  className="path-btn campus-btn"
  onClick={() => campusRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
>
  🏫 The Campus
</button>

    </div>
  </div>
</section>


      {/* GALLERY SECTION */}
      <section className="vtech-gallery-section py-5 px-3" ref={galleryRef}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#8c5278' }}>
            Glimpses from the V TECH Journey
          </h2>
          <div className="vtech-gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="vtech-gallery-item"
                data-aos="fade-up"
                onClick={() => {
                  setSelected(img);
                  setLoading(true);
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="vtech-thumb"
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add('loaded')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS SECTION */}
      <section className="vtech-campus-section py-5 px-3" ref={campusRef}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#8c5278' }}>
            A Glimpse of Our Campus
          </h2>
          <div className="vtech-gallery-grid">
            {campusImages.map((img, i) => (
              <div
                key={i}
                className="vtech-gallery-item"
                data-aos="fade-up"
                onClick={() => {
                  setSelected(img);
                  setLoading(true);
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="vtech-thumb"
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add('loaded')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="vtech-modal"
          onClick={(e) => {
            if (e.target.classList.contains('vtech-modal')) setSelected(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="vtech-modal-content" data-aos="zoom-in">
            <img
              src={selected.src}
              alt={selected.alt}
              className={`vtech-zoom-img ${loading ? 'loading' : 'loaded'}`}
              onLoad={() => setLoading(false)}
            />
            <p className="vtech-caption mt-3">{selected.alt}</p>
            <button
              className="vtech-close"
              aria-label="Close Gallery Preview"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VTechGallery;

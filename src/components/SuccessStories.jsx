import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SuccessStories = () => {
  const sliderRef = useRef(null);
  const [slideSpeed, setSlideSpeed] = useState(2000);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      name: 'Aripitha Omkar',
      salary: '6.08 LPA',
      img: '/arpitha.jpeg',
      company: 'Power School',
      msg: 'The training experience was incredibly enriching. The support, mentorship, and hands-on projects prepared me well..',
    },
    {
      name: 'Bindu D.B',
      salary: '3.92 LPA',
      img: '/bindu d b.jpeg',
      company: 'Taxedge Boutique',
      msg: 'The learning journey was smooth and rewarding — it gave me the confidence and skills to succeed in my new role!',
    },
    {
      name: 'Deepika T N',
      salary: '3.44 LPA',
      img: '/deepika t n.jpeg',
      company: 'Accenture',
      msg: 'The guidance and support throughout the placement process were outstanding. I always felt well-prepared and confident.',
    },
    {
      name: 'Kushwanth',
      salary: '3 LPA',
      img: '/kushwanth.jpeg',
      company: 'Wipro',
      msg: 'V Tech gave me the practical edge I was missing. Real projects and real mentors made all the difference.',
    },
    {
      name: 'Bhavya M S',
      salary: '3 LPA',
      img: '/bhavya.jpeg',
      company: 'Primus',
      msg: 'From classroom to career — V Tech’s ecosystem helped me transform quickly and land a job I love.',
    },
    {
      name: 'Badrinatha Y P',
      salary: '2.7 LPA',
      img: '/badrinath.jpeg',
      company: 'FNH Technologies',
      msg: 'Every session, every project — it all added up. I felt industry-ready the moment I graduated.',
    },
  ];

  const handleArrowClick = (direction) => {
    setSlideSpeed(300);
    setTimeout(() => setSlideSpeed(2000), 400);
    direction === 'next' ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: slideSpeed,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="success-section text-center py-5"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      data-aos="fade-up"
    >
      <h2 className="fw-bold mb-2 display-5" style={{ color: '#8c5278' }}>
        Hired & Thriving
      </h2>
      <p className="text-dark fs-4 mb-4">Our Success Stories</p>

      <div className="position-relative px-4">
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-3 py-5 slide-item d-flex flex-column align-items-center">
              <div className="testimonial-card p-4 shadow" style={{ borderRadius: '20%' }}>
                <div className="testimonial-img-wrapper mx-auto mb-3">
                  <img src={t.img} alt={t.name} className="testimonial-img" />
                </div>
                <h5 className="fw-semibold" style={{ color: 'rgb(99, 60, 85)' }}>{t.name}</h5>
                <p className="text-muted mb-1 fw-bold">{t.salary}</p>
                <p className="text-muted mb-2 fw-bold">{t.company}</p>
                <p className="small text-black fs-5">{t.msg}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <div className="custom-arrow prev-arrow" onClick={() => handleArrowClick('prev')}>❮</div>
        <div className="custom-arrow next-arrow" onClick={() => handleArrowClick('next')}>❯</div>
      </div>

      {/* Learn More Button */}
      <div className="mt-4">
        <a
          href="#"
          className="btn px-5 py-2 fs-5 fw-semibold rounded-pill"
          style={{
            backgroundColor: "#8c5278",
            color: "white",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#6e3f5f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8c5278")}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default SuccessStories;

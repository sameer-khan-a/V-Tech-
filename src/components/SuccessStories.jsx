import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../main.css';

const SuccessStories = () => {
  const sliderRef = useRef(null);
  const [slideSpeed, setSlideSpeed] = useState(2000);

  const testimonials = [
    {
      name: 'Aripitha Omkar',
      salary: '6.08 LPA',
      img: '/arpitha.png',
      company: 'Power School',
      msg: 'The training experience was incredibly enriching. The support, mentorship, and hands-on projects prepared me well.',
    },
    {
      name: 'Bindu D.B',
      salary: '3.92 LPA',
      img: '/bindu.png',
      company: 'Taxedge Boutique',
      msg: 'The learning journey was smooth and rewarding — it gave me the confidence and skills to succeed in my new role!',
    },
    {
      name: 'Deepika T N',
      salary: '3.44 LPA',
      img: '/deepika t n.png',
      company: 'Accenture',
      msg: 'The guidance and support throughout the placement process were outstanding. I always felt well-prepared and confident.',
    },
    {
      name: 'Kushwanth',
      salary: '3 LPA',
      img: '/kushwanth.png',
      company: 'Wipro',
      msg: 'V Tech gave me the practical edge I was missing. Real projects and real mentors made all the difference.',
    },
    {
      name: 'Bhavya M S',
      salary: '3 LPA',
      img: '/bhavya.png',
      company: 'Primus',
      msg: 'From classroom to career — V Tech’s ecosystem helped me transform quickly and land a job I love.',
    },
    {
      name: 'Badrinatha Y P',
      salary: '2.7 LPA',
      img: '/arpitha2.png',
      company: 'FNH Technologies',
      msg: 'Every session, every project — it all added up. I felt industry-ready the moment I graduated.',
    },
  ];

  const handleArrowClick = (direction) => {
    setSlideSpeed(300);
    setTimeout(() => setSlideSpeed(2000), 400);
    direction === 'next'
      ? sliderRef.current.slickNext()
      : sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: slideSpeed,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: '0',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="success-section text-center py-5 d-flex flex-column justify-content-center">
      <h2 className="fw-bold mb-2 display-5" style={{ color: '#8c5278' }}>
        Hired & Thriving
      </h2>
      <p className="text-dark fs-4 mb-4">Our Success Stories</p>

      <div className="position-relative px-4">
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-3 py-4 d-flex flex-column align-items-center">
              <div className="zoom-wrapper d-flex justify-content-center align-items-center">
                <div className="testimonial-card p-4 shadow rounded-5  hover-scale">
                  <div className="testimonial-img-wrapper mx-auto mb-3">
                    <img src={t.img} alt={t.name} className="testimonial-img " />
                  </div>
                  <h5 className="fw-semibold" style={{ color: 'rgb(99, 60, 85)' }}>{t.name}</h5>
                  <p className="text-muted mb-1 fw-bold">{t.salary}</p>
                  <p className="text-muted mb-2 fw-bold">{t.company}</p>
                  <p className="small text-black fs-6">{t.msg}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="custom-arrow prev-arrow" onClick={() => handleArrowClick('prev')}>❮</div>
        <div className="custom-arrow next-arrow" onClick={() => handleArrowClick('next')}>❯</div>
      </div>

      <div className="mt-4">
        <a
          href="/SuccessDetails"
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

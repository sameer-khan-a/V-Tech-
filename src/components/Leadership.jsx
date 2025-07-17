import React from 'react';
import '../main.css';

const Leadership = () => {
  return (
    <div
      className="container text-center py-5"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Heading */}
      <div className="mb-5">
        <h2 className="fw-bold" style={{ color: '#8c5278' }}>
          Meet Our Leadership
        </h2>
        <p className="text-muted fs-5">
          Visionaries guiding V Tech Solutions toward a skilled and empowered future.
        </p>
      </div>

      {/* Leadership Cards */}
      <div className="row justify-content-center gx-5">
        {/* N. B. Pradeep Kumar */}
        <div className="col-sm-6 col-12 d-flex flex-column align-items-center mb-4">
          <img
            src="/PradeepKumar.jpg"
            alt="N. B. Pradeep Kumar"
            className="rounded-circle shadow"
            style={{ width: '75%', maxWidth: '300px', height: 'auto', border: '0.4rem solid #000000ff' }}
          />
          <h5 className="mt-3 mb-1 fs-4 fw-semibold" style={{ color: '#8c5278' }}>
            N. B. Pradeep Kumar
          </h5>
          <p className="text-muted fs-5">Managing Director, V Tech Solutions</p>
        </div>

        {/* Nagapriya K J */}
        <div className="col-sm-6 col-12 d-flex flex-column align-items-center mb-4">
          <img
            src="/Nagapriya.png"
            alt="Nagapriya K J"
            className="rounded-circle shadow"
            style={{ width: '75%', maxWidth: '300px', height: 'auto' }}
          />
          <h5 className="mt-3 mb-1 fs-4 fw-semibold" style={{ color: '#8c5278' }}>
            Nagapriya K J
          </h5>
          <p className="text-muted fs-5">Managing Director, V Tech Solutions</p>
        </div>
      </div>

      {/* Description */}
      <div className="px-md-5 mt-4">
        <p className="fs-5 fw-normal text-dark">
          V Tech Solutions is led by a team committed to making learning practical and purposeful.
          Their experience and vision help us stay focused on delivering meaningful educational outcomes.
          With every decision, they aim to bridge the gap between skills and opportunity.
          Their leadership is not just about direction — it's about driving transformation where it matters most.
        </p>
      </div>
    </div>
  );
};

export default Leadership;

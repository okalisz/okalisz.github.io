import React from 'react';
import './Certificates.css';

const certificates = [
  { src: '/assets/cert1.png', alt: 'Certificate 1' },
  { src: '/assets/cert2.png', alt: 'Certificate 2' },
  { src: '/assets/cert3.png', alt: 'Certificate 3' },
  { src: '/assets/cert4.png', alt: 'Certificate 4' },
  { src: '/assets/cert5.png', alt: 'Certificate 5' },
];

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="content">
        <h2>They trust us</h2>
        <div className="certificates-slider">
          <div className="certificates-track">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate">
                <img src={cert.src} alt={cert.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

import React from 'react';
import './Certificates.css';

const certificates = [
  { src: require('../assets/cert1.png'), alt: 'Certificate 1', name: 'Certiport', description: 'ITS HTML&CSS' },
  { src: require('../assets/cert2.png'), alt: 'Certificate 2', name: 'Certiport', description: 'ITS SOFTWARE DEVELOPMENT' },
  { src: require('../assets/cert3.png'), alt: 'Certificate 3', name: 'Microsoft', description: 'AZ-900' },
];

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="content">
        <h2>Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate">
              <img src={cert.src} alt={cert.alt} />
              <div className="certificate-info">
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

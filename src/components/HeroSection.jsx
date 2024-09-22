import React from 'react';

const HeroSection = () => {
  return (
    <section className="section">
        <div className="video-section">
        <video autoPlay muted loop id="background-video">
            <source src="/assets/img/my-video.mp4" type="video/mp4" />
        </video>
        <div className="video-content">
            <h1>best in chauffeur</h1>
            <p>exclusive luxury traveler</p>
            <a href="javascript:void(0)">
            <i className="fas fa-arrow-down-long"></i>
            </a>
        </div>
        </div>
    </section>
  );
};
export default HeroSection;
import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-us">
        <div className="container-fluid">
          <h2 className="heading-s2 text-dark text-left mb-4">
            About Us  
          </h2>
          <div className="row">
            <div className="col-xl-6">
                <div id="carouselslider" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/assets/img/jet-service.jpg" className="d-block w-100" alt="Private Jet Service" />
                    </div>
                    <div className="carousel-item">
                      <img src="/assets/img/car-service.jpg" className="d-block w-100" alt="Luxury Car Service" />
                    </div>
                    <div className="carousel-item">
                      <img src="/assets/img/yacht-service.jpg" className="d-block w-100" alt="Yacht Service" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="image-slider-content">
                  <span>Luxury Travel Reimagined</span>
                  <h3>Experience the Luxury of Premium Services with Us</h3>
                  <ul>
                    <li><a href="javascript:void(0)">Private Jet Service <span><i className="fas fa-arrow-right"></i></span></a></li>
                    <li><a href="javascript:void(0)">Luxury Car Service <span><i className="fas fa-arrow-right"></i></span></a></li>
                    <li><a href="javascript:void(0)">Yacht Service <span><i className="fas fa-arrow-right"></i></span></a></li>
                  </ul>
                  <p>Call (844) 944-3299</p>
                </div>
              </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSection;
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules';


const LifestyleSection = () => {
    return (
      <section className="lifestyle-management-services gifts-tours-entertainment">
        <div className="container-fluid">
          <h2 className="heading-s2 text-dark text-left">
            Lifestyle Management and Membership
          </h2>
          <div className="portfolio-cards mb-40">
    <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={4000} 
        cssMode={false}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery1.jpg" alt="gift" className="img-fluid mb-3" />
                  <h5 className="fs-4 card-title mb-2">ARTS & VINTAGE</h5>
                  <p className="card-text fs-6 text-dark">
                    Enjoy virtual access to art shows, sales, and auctions, for yourself or gifted to whoever may be in our service.
                  </p>
                  <div className="card-action">
                    <a href="https://bestinchauffeur.com/lifestyle/" className="mb-0">arts & vintage</a>
                    <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                      <div className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Repeat SwiperSlide for other cards */}
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery2.jpg" alt="gift" className="img-fluid mb-3" />
                  <h5 className="fs-4 card-title mb-2">ADVENTURE</h5>
                  <p className="card-text fs-6 text-dark">
                    Local experts offer giftable, exhilarating memories such as hot-air ballooning, sailing and other activities.
                  </p>
                  <div className="card-action">
                    <a href="https://bestinchauffeur.com/lifestyle/" className="mb-0">adventure</a>
                    <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                      <div className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="card">
              <div className="card-body p-20">
                <img src="/assets/img/lifestyle/gallery3.jpg" alt="gift" className="img-fluid mb-3"/>
                  <h5 className="fs-4 card-title mb-2">CULINARY</h5>
                  <p className="card-text fs-6 text-dark">Michelin-star restaurants with premiere chefs, private dining, chef's tables, roof-top receptions and more.</p>
                  <div className="card-action">
                      <a href="https://bestinchauffeur.com/lifestyle/" className="mb-0">culinary</a>
                      <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                          <div className="icon">
                              <i className="fa-solid fa-arrow-right"></i>
                          </div>
                      </a>
                  </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery4.jpg" alt="gift" className="img-fluid mb-3"/>
                    <h5 className="fs-4 card-title mb-2">GENEOLOGY TOURS</h5>
                    <p className="card-text fs-6 text-dark">Certified guides will provide the best itineraries for sightseeing, vineyard, genealogy and other specific tours.</p>
                    <div className="card-action">
                        <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">geneology tours</a>
                        <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery5.jpg" alt="gift" className="img-fluid mb-3"/>
                    <h5 className="fs-4 card-title mb-2">SPA & WELLNESS</h5>
                    <p className="card-text fs-6 text-dark">Escape to great spas and the latest treatments, yoga retreats or simply enjoy a change of the usual travel scenery.</p>
                    <div className="card-action">
                        <a href="https://bestinchauffeur.com/lifestyle/" className="mb-0">spa & wellness</a>
                        <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery6.jpg" alt="gift" className="img-fluid mb-3"/>
                    <h5 className="fs-4 card-title mb-2">MEDICAL TRAVEL</h5>
                    <p className="card-text fs-6 text-dark">Key locations in our network offer access to the most cutting-edge treatments and medical procedures available.</p>
                    <div className="card-action">
                        <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">medical travel</a>
                        <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery7.jpg" alt="gift" className="img-fluid mb-3"/>
                    <h5 className="fs-4 card-title mb-2">SPORTS</h5>
                    <p className="card-text fs-6 text-dark">Championship game? No worries, as our arena escort gets you there in time for all the festivities, programs and refreshments.</p>
                    <div className="card-action">
                        <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">sports</a>
                        <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery8.jpg" alt="gift" className="img-fluid mb-3"/>
                    <h5 className="fs-4 card-title mb-2">RECREATION</h5>
                    <p className="card-text fs-6 text-dark">Go for a morning bike ride, catch a sunset hike, or access a remote ski run, whatever your activity, we make it happen.</p>
                    <div className="card-action">
                        <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">recreation</a>
                        <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                  <img src="/assets/img/lifestyle/gallery9.jpg" alt="gift" className="img-fluid mb-3"/>
                    <h5 className="fs-4 card-title mb-2">NIGHTLIFE</h5>
                    <p className="card-text fs-6 text-dark">Hottest tickets in the coolest places. Inside access to great shows, live performances and fantastic meeting places.</p>
                    <div className="card-action">
                        <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">nightlife</a>
                        <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                            <div className="icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                <img src="/assets/img/lifestyle/gallery10.jpg" alt="gift" className="img-fluid mb-3"/>
                  <h5 className="fs-4 card-title mb-2">SHOPPING</h5>
                  <p className="card-text fs-6 text-dark">We know the boutique shops with their unique labels and shopping for fashion and gifts has never been easier.</p>
                  <div className="card-action">
                      <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">shopping</a>
                      <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                          <div className="icon">
                              <i className="fa-solid fa-arrow-right"></i>
                          </div>
                      </a>
                  </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                <img src="/assets/img/lifestyle/gallery11.jpg" alt="gift" className="img-fluid mb-3"/>
                <h5 className="fs-4 card-title mb-2">FAMILY</h5>
                <p className="card-text fs-6 text-dark">The kids share the limelight as much as the grown-ups. We cater to fun activities for everyone, in all age groups.</p>
                <div className="card-action">
                    <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">family</a>
                    <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                        <div className="icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                <img src="/assets/img/lifestyle/gallery12.jpg" alt="gift" className="img-fluid mb-3"/>
                <h5 className="fs-4 card-title mb-2">CELEBRATE</h5>
                <p className="card-text fs-6 text-dark">Anniversary, milestone, or birthday? Let the festivities begin as our team takes your celebration to new heights.</p>
                <div className="card-action">
                  <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">celebrate</a>
                  <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                      <div className="icon">
                          <i className="fa-solid fa-arrow-right"></i>
                      </div>
                  </a>
                </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                <img src="/assets/img/lifestyle/gallery13.jpg" alt="gift" className="img-fluid mb-3"/>
                <h5 className="fs-4 card-title mb-2">CHARTER</h5>
                <p className="card-text fs-6 text-dark">Plan any arrival or departure at your leisure. Private jet and yacht charters are seamlessly accessible throughout your travel itinerary.</p>
                <div className="card-action">
                <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">charter</a>
                <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                    <div className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </a>
                </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                <img src="/assets/img/lifestyle/gallery14.jpg" alt="gift" className="img-fluid mb-3"/>
                <h5 className="fs-4 card-title mb-2">CORPORATE</h5>
                <p className="card-text fs-6 text-dark">Incentive travel for gifting trips and local team-building events creates amazing lasting memories.</p>
                <div className="card-action">
                <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">corporate</a>
                <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                  <div className="icon">
                      <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </a>
                </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card-body p-20">
                <img src="/assets/img/lifestyle/gallery15.jpg" alt="gift" className="img-fluid mb-3"/>
                <h5 className="fs-4 card-title mb-2">FAVORITES</h5>
                <p className="card-text fs-6 text-dark">Pet friendly handlers and itineraries available. There is nothing left to chance when dealing with people's favorites!</p>
                <div className="card-action">
                <a  href="https://bestinchauffeur.com/lifestyle/" className="mb-0">favorites</a>
                <a href="https://bestinchauffeur.com/lifestyle/" className="text-decoration-none">
                <div className="icon">
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                </a>
                </div>
                </div>
                </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </section>
    );
  };
  
  export default LifestyleSection;
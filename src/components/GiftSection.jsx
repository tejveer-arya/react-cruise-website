import React from 'react';

const GiftSection = () => {
  return (
    <section className="gifts-tours-entertainment">
                  <div className="container-fluid">
                    <h2 className="heading-s2 text-dark text-left">
                      Ultimate Luxury Transportation
                    </h2>
                    <p>Welcome to Best in Chauffeur, a unique Luxury Travel and Chauffeur Service. Our elite chauffeurs, sourced from the finest five-star affiliates globally, ensure a seamless connection between your daily life and travel needs. Whether it’s a private jet, yacht, or chauffeured car, we seamlessly connect your daily life with extraordinary travel.</p>
                    <div className="row">
                      <div className="col-lg-12 col-xl-4">
                        <figure className="figure">
                          <img src="/assets/img/car-service.jpg" className="figure-img img-fluid m-0" alt="image"/>
                          <figcaption className="figure-caption">
                            <p className="m-0">LUXURY CAR SERVICE</p>
                            <div className="button-click">
                              <a href="https://bestinchauffeur.com/our-services/" className="btn btn-primary">book</a>
                          </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-lg-12 col-xl-4">
                        <figure className="figure">
                          <img src="/assets/img/jet-service.jpg" className="figure-img img-fluid m-0" alt="image"/>
                          <figcaption className="figure-caption">
                            <p className="m-0">PRIVATE JET SERVICE</p>
                            <div className="button-click">
                              <a href="https://bestinchauffeur.com/our-services/" className="btn btn-primary">inquire</a>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="col-lg-12 col-xl-4">
                        <figure className="figure">
                          <img src="/assets/img/yacht-service.jpg" className="figure-img img-fluid m-0" alt="image"/>
                          <figcaption className="figure-caption">
                            <p className="m-0">YACHT SERVICE</p>
                            <div className="button-click">
                              <a href="https://bestinchauffeur.com/our-services/" className="btn btn-primary">inquire</a>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </section>
  );
};
export default GiftSection;
import React from 'react';
import Marquee from 'react-fast-marquee';

const PartnerslogoSection = () => {
  return (
    <section className="partners-logo">
                  <div className="container-fluid">
                      <div className="brand-scroll">
                        <h2 className="heading-s2 text-dark text-left">
                          Partner Logo
                        </h2>
                        <Marquee speed={50} gradient={false}>
                            <ul id="ticker">
                                <li><img src="assets/img/partner-logo/bookingcom.svg" className="img-fluid" alt="autodesk"/></li>
                                <li><img src="assets/img/partner-logo/expedia.svg" className="img-fluid" alt="avalara"/></li>
                                <li><img src="assets/img/partner-logo/hotelscom.svg" className="img-fluid" alt="bilingual"/>
                                </li>
                                <li><img src="assets/img/partner-logo/tripadvisor.svg" className="img-fluid" alt="connecture"/>
                                </li>
                                <li><img src="assets/img/partner-logo/airbnb.svg" className="img-fluid" alt="connecture"/>
                                </li>
                                <li><img src="assets/img/partner-logo/agoda.svg" className="img-fluid" alt="autodesk"/></li>
                                <li><img src="assets/img/partner-logo/priceline.svg" className="img-fluid" alt="avalara"/></li>
                                <li><img src="assets/img/partner-logo/hotelscom.svg" className="img-fluid" alt="bilingual"/>
                                </li>
                                <li><img src="assets/img/partner-logo/expedia.svg" className="img-fluid" alt="avalara"/></li>
                            </ul> 
                          </Marquee>
                        </div>
                    </div>
                  </section>
  );
};
export default PartnerslogoSection;
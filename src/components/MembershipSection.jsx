import React from 'react';

const MembershipSection = () => {
  return (
    <section className="membership-offer">
                    <div className="container-fluid p-0">
                        <div className="membership-offer-content">
                            <h2 className="heading-s2 text-white text-left">Membership Offer</h2>
                            <p className="fs-5">Our membership is currently free and includes a newsletter subscription, membership agreement and code of conduct, with no other obligation required. Please submit your information or any questions to <a href="mailto:info@bestinchauffeur.com">info@bestinchauffeur.com</a>. Thank you for considering Best in Chauffeur and we look forward to partnering with you soon!</p>
                            <ul>
                              <li><span><i className="fa-solid fa-check"></i></span>Simply nominate your best Chauffeur or several top Chauffeurs for added availability and to display other vehicles in your fleet.</li>
                              <li><span><i className="fa-solid fa-check"></i></span>Provide an image of your Chauffeur, an image of their vehicle, a short bio and the same for any additional Chauffeurs.</li>
                              <li><span><i className="fa-solid fa-check"></i></span>Finally, please submit your price sheet for us to provide accurate service quotes.</li>                           
                            </ul>
                            <div className="button-click mt-5">
                              <a href="https://bestinchauffeur.com/affiliate/" className="btn btn-primary">find out more</a>
                            </div>
                        </div>
                    </div>
                  </section>
  );
};
export default MembershipSection;
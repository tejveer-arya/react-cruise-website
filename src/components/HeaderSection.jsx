import React, { useState, useEffect } from 'react';

const HeaderSection = () => {

    const [isFixed, setIsFixed] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isFixed ? 'fixed' : ''}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand m-0" href="#"><img src="/assets/img/logo.png" className="img-fluid" alt="Responsive image"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://bestinChauffeur.com/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://bestinChauffeur.com/about/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://bestinChauffeur.com/our-services/">Our Services</a>
                                </li>
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="javascript:void(0)" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Destinations
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="javascript:void(0)">Asia</a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a className="dropdown-item" href="https://bestinChauffeur.com/china/">China</a></li>
                                            <li><a className="dropdown-item" href="https://bestinChauffeur.com/japan/">Japan</a></li>
                                            <li><a className="dropdown-item" href="https://bestinChauffeur.com/singapore/">Singapore</a></li>
                                         </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="https://bestinChauffeur.com/south-africa/">Africa</a>
                                      <ul className="submenu dropdown-menu">
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/morocco/">Morocco</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/south-africa/">South Africa</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:void(0)">Australia</a>
                                      <ul className="submenu dropdown-menu">
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/australia/">Australia</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:void(0)">Europe</a>
                                      <ul className="submenu dropdown-menu">
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/belgium/">Belgium</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/france/">France</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/germany/">Germany</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/greece/">Greece</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/italy/">Italy</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/netherlands/">Netherlands</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/poland/">Poland</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/portugal/">Portugal</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/spain/">Spain</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/switzerland/">Switzerland</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/united-kingdom/">United Kingdom</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="javascript:void(0)">Middle East</a>
                                      <ul className="submenu dropdown-menu">
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/israel/">Israel</a></li>
                                        <li><a className="dropdown-item" href="javascript:void(0)">Saudi Arabia</a></li>
                                        <li><a className="dropdown-item" href="javascript:void(0)">Turkey</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/uae/">UAE</a></li>
                                      </ul></li>
                                    <li><a className="dropdown-item" href="javascript:void(0)">North America</a>
                                      <ul className="submenu dropdown-menu">
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/canada/">Canada</a></li>
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/u-s-a/">USA</a></li>
                                      </ul></li>
                                    <li><a className="dropdown-item" href="javascript:void(0)">South America</a>
                                      <ul className="submenu dropdown-menu">
                                        <li><a className="dropdown-item" href="https://bestinChauffeur.com/brazil/">Brazil</a></li>
                                      </ul></li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://bestinChauffeur.com/concierge/">Concierge</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="https://bestinChauffeur.com/lifestyle/">Lifestyle</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="https://bestinChauffeur.com/contact/">Contact</a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="tel:+18449443299"><i className="fa-brands fa-whatsapp"></i>+1 202 845 1654</a></li>
                                <li><a href="mailto:info@bestinChauffeur.com">info@bestinChauffeur.com</a></li>
                            </ul>
                            <div className="button-click">
                                <a href="https://bestinChauffeur.com/contact/" className="btn btn-primary">inquire</a>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </nav>
        </header>
  );
};
export default HeaderSection;
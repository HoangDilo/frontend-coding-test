import React from 'react';

import '@/styles/app/landing-page/footer.scss';

const SOCIAL = ['ic--instagram', 'ic--youtube', 'ic--tiktok'];

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="logo-desktop">
                    <div className="ic--logo" style={{ height: 52 }}></div>
                    <p className="company-name">WELTENTERS FZ LLC</p>
                    <span>
                        Contact Us
                        <br />
                        Privacy Policy
                    </span>
                </div>
                <div>
                    <p className="col-title">FOR MODELS</p>
                    <p>Apply Now</p>
                    <p>FAQs for Applicants</p>
                </div>
                <div>
                    <p className="col-title">FOR CLIENTS</p>
                    <p>Hire a Model</p>
                    <p>Success Stories</p>
                </div>
                <div className="logo-desktop-mobile">
                    <div className="ic--lightning" style={{ height: 52, width: 52 }}></div>
                    <p className="company-name">WELTENTERS FZ LLC</p>
                    <span>
                        Contact Us
                        <br />
                        Privacy Policy
                    </span>
                    <div className='sign-in'>Sign in</div>
                </div>
                <div className="socials-container">
                    <p className="col-title">SOCIAL</p>
                    <div className="socials">
                        {SOCIAL.map((social, i) => (
                            <div key={i} className={social}></div>
                        ))}
                    </div>
                    <div className='language-mobile'>
                        <span className='languages'>English</span>
                        <div className='ic--caret-down'></div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="ic--lightning"></div>
                    <span>Copyright © 2024 - All right reserved</span>
                </div>
                <div className="languages">
                    <span>English</span>
                    <div className="ic--caret-down"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

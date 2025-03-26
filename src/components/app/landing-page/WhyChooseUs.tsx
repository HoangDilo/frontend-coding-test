import React from 'react';

import '@/styles/app/landing-page/whyChooseUs.scss';
import { REASONS } from '@/constants/model.constant';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <div className="why-choose-us-content">
                <h2 className="title">Why Choose</h2>
                <div className="ic--logo logo"></div>
                <div className="reasons">
                    {REASONS.map((reason, index) => (
                        <div key={index} className="reason">
                            <div className="ic--checkbox"></div>
                            <span>{reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

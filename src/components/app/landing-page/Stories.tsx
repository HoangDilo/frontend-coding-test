import Button from '@/components/common/Button';
import * as React from 'react';

import '@/styles/app/landing-page/stories.scss'

export default function Stories() {
    return (
        <div className="stories-container">
            <div className="left-box">
                <p className='title'>Our Success Stories</p>
                <div className='button-wrapper'>
                    <Button type="dark" label="Apply Now" width={158}/>
                    <span className='norm-text'>to Start Your Journey!</span>
                </div>
            </div>
        </div>
    );
}

import Button from '@/components/common/Button';
import React from 'react';

import '@/styles/app/landing-page/lookingForModel.scss';

const LookingForModel = () => {
    return (
        <div className="looking-for-model">
            <div className="looking-for-model-content">
                <h2 className="title-2 text-white">Looking for Models?</h2>
                <p className="description">
                    Find the Perfect Model for Your Brand
                </p>
                <Button type="light" label="Contact Our Team" width={191} />
            </div>
        </div>
    );
};

export default LookingForModel;

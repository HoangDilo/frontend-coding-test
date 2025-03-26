import * as React from 'react';

import '@/styles/app/landing-page/modelList.scss';
import Button from '@/components/common/Button';
import ArrowRight from '@/assets/svgs/ArrowRight';
import Image from 'next/image';
import { LIST_MODELS } from '@/constants/model.constant';

export default function ModelList() {
    return (
        <div className="model-list-container">
            <div className="header">
                <h2 className="title">Meet our models</h2>
                <Button
                    type="light"
                    label="View All"
                    width={126}
                    icon={<ArrowRight />}
                />
            </div>
            <div className="models-list">
                <div className="models-list-container">
                    {LIST_MODELS.map((item) => (
                        <div className="model-card" key={item.name}>
                            <div className="model-image-wrapper">
                                <Image  
                                    src={item.image}
                                    width={287.47}
                                    height={360}
                                    alt={item.name}
                                    className="model-image"
                                    draggable={false}
                                />
                            </div>
                            <p className="model-name">{item.name}</p>
                            <span className="model-location">
                                {item.location}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

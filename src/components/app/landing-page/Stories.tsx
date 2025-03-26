'use client';

import Button from '@/components/common/Button';
import * as React from 'react';

import '@/styles/app/landing-page/stories.scss';
import { MODEL_STORIES } from '@/constants/model.constant';
import StoryCard from './StoryCard';
import ArrowFat from '@/assets/svgs/ArrowFat';

export default function Stories() {
    const [index, setIndex] = React.useState(0);

    const storyCardsRef = React.useRef<HTMLDivElement>(null);

    const handleGoBack = React.useCallback(() => {
        setIndex((prev) => (prev === 0 ? MODEL_STORIES.length - 1 : prev - 1));
    }, []);

    const handleGoNext = React.useCallback(() => {
        setIndex((prev) => (prev === MODEL_STORIES.length - 1 ? 0 : prev + 1));
    }, []);

    React.useEffect(() => {
        if (storyCardsRef.current) {
            storyCardsRef.current.style.transform = `translate3d(-${index * 712}px, 0, 0)`;
        }
    }, [index]);

    return (
        <div className="stories-container">
            <div className="left-box">
                <p className="title">Our Success Stories</p>
                <div className="button-wrapper">
                    <Button
                        type="dark"
                        label="Apply Now"
                        className="btn-story"
                    />
                    <span className="norm-text">to Start Your Journey!</span>
                </div>
            </div>
            <div className="story-cards-container">
                <div className="story-cards" ref={storyCardsRef}>
                    {MODEL_STORIES.map((story) => (
                        <StoryCard key={story.title} {...story} />
                    ))}
                </div>
                <div className="story-dots">
                    {MODEL_STORIES.map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${index === i ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <div className="story-arrows">
                    <div className="arrow left" onClick={handleGoBack}>
                        <ArrowFat />
                    </div>
                    <div className="arrow right" onClick={handleGoNext}>
                        <ArrowFat />
                    </div>
                </div>
            </div>
            <div className="button-wrapper-mobile">
                <Button type="dark" label="Apply Now" className="btn-story" />
                <span className="norm-text">to Start Your Journey!</span>
            </div>
        </div>
    );
}

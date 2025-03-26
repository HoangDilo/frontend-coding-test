import Image, { StaticImageData } from 'next/image';
import * as React from 'react';

export interface IStoryCardProps {
    title: string;
    content: string;
    img_url: string | StaticImageData;
}

export default function StoryCard({
    title,
    content,
    img_url,
}: IStoryCardProps) {
    return (
        <div className="story-card">
            <Image width={712} height={425} src={img_url} alt={title} />
            <div className="contents">
                <p className="story-title">{title}</p>
                <span className="story-content">{content}</span>
            </div>
        </div>
    );
}

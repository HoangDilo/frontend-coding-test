'use client';

import * as React from 'react';

export interface IButtonProps {
    type: 'dark' | 'light';
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    width?: number;
    height?: number;
}

export default function Button({
    type = 'dark',
    label,
    onClick,
    icon,
    width,
    height,
}: IButtonProps) {
    return (
        <button
            className={`button ${type}`}
            onClick={onClick}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <span>{label}</span>
            {icon}
        </button>
    );
}

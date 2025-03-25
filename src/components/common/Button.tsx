'use client';

import * as React from 'react';

export interface IButtonProps {
    type: 'dark' | 'light';
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    width?: number;
    height?: number;
    isLoading?: boolean;
}

export default function Button({
    type = 'dark',
    label,
    onClick,
    icon,
    width,
    height,
    isLoading = false,
}: IButtonProps) {
    return (
        <button
            className={`button ${type}`}
            onClick={!isLoading ? onClick : undefined}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {!isLoading ? (
                <>
                    <span>{label}</span>
                    {icon}
                </>
            ) : (
                <div className="spinner" />
            )}
        </button>
    );
}

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
    className?: string;
}

export default function Button({
    type = 'dark',
    label,
    onClick,
    icon,
    isLoading = false,
    className = '',
}: IButtonProps) {
    return (
        <button
            className={`button ${type} ${className}`}
            onClick={!isLoading ? onClick : undefined}
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

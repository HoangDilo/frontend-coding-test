import * as React from 'react';

import '@/styles/app/landing-page/header.scss';

import { MENU } from '@/constants/header.constant';

export default function Header() {
    return (
        <div className="header-container">
            <div className='ic--caret-down back-btn' />
            <div className="logo-container">
                <div
                    className="ic--logo"
                    style={{ width: 106, height: 28 }}
                ></div>
            </div>
            <div className="menu-container">
                {MENU.map((item) => (
                    <div className="menu-item" key={item.key}>
                        <span>{item.label}</span>
                        {item.item_dropdown.length > 0 && (
                            <div className="ic--caret-down" />
                        )}
                    </div>
                ))}
            </div>
            <button className="header-button">Start your model career</button>
            <div className='ic--menu menu'></div>
        </div>
    );
}

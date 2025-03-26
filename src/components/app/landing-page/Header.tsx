import * as React from 'react';

import '@/styles/app/landing-page/header.scss';

import { MENU } from '@/constants/header.constant';
import CaretDown from '@/assets/svgs/CaretDown';

export default function Header() {
    return (
        <div className="header-container">
            <div className='logo-container'></div>
            <div className='ic--logo' style={{width: 106, height: 28}}></div>
            <div className="menu-container">
                {MENU.map((item) => (
                    <div className="menu-item" key={item.key}>
                        <span>{item.label}</span>
                        {item.item_dropdown.length > 0 && <CaretDown />}
                    </div>
                ))}
            </div>
            <button className='header-button'>Start your model career</button>
        </div>
    );
}

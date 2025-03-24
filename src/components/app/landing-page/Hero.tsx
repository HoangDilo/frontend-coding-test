import * as React from 'react';

import '@/styles/app/landing-page/hero.scss';
import Button from '@/components/common/Button';

export default function Hero () {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <h1 className='title'>Unlock Your Modeling Potential</h1>
        <p className='description'>Discover endless opportunities, connect with top agencies, and showcase your talent</p>
        <Button type='dark' label='Apply Now' width={158}/>
      </div>
    </div>
  );
}

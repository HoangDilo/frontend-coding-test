import * as React from 'react';

import '@/styles/app/landing-page/modelList.scss';
import Button from '@/components/common/Button';
import ArrowRight from '@/assets/svgs/ArrowRight';

export default function ModelList () {
  return (
    <div className='model-list-container'>
      <div className='header'>
        <h2 className='title'>Meet our models</h2>
        <Button type='light' label='View All' width={126} icon={<ArrowRight />}/>
        
      </div>
    </div>
  );
}

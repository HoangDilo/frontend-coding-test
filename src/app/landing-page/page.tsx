import '@/styles/app/landing-page/landingPage.scss';

import Header from '@/components/app/landing-page/Header';
import Hero from '@/components/app/landing-page/Hero';
import ModelList from '@/components/app/landing-page/ModelList';

export default function LandingPage() {
    return <div className='main-layout'>
        <Header />
        <Hero />
        <ModelList />
    </div>;
}

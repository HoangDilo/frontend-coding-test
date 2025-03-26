import Footer from '@/components/app/landing-page/Footer';
import Header from '@/components/app/landing-page/Header';
import Hero from '@/components/app/landing-page/Hero';
import LookingForModel from '@/components/app/landing-page/LookingForModel';
import ModelList from '@/components/app/landing-page/ModelList';
import Stories from '@/components/app/landing-page/Stories';
import WhyChooseUs from '@/components/app/landing-page/WhyChooseUs';

export default function LandingPage() {
    return <div className='main-layout'>
        <Header />
        <Hero />
        <ModelList />
        <Stories />
        <WhyChooseUs />
        <LookingForModel />
        <Footer />
    </div>;
}

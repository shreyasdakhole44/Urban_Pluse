import React from 'react';
import NewsTicker from '../components/NewsTicker';
import TripleHeader from '../components/TripleHeader';
import HeroSlider from '../sections/HeroSlider';
import ServiceGrid from '../sections/ServiceGrid';
import MayorMessage from '../sections/MayorMessage';
import SmartCityPulse from '../sections/SmartCityPulse';
import Footer from '../components/Footer';
import AshaAgent from '../components/AshaAgent';

const LandingPage = () => {
    return (
        <main className="min-h-screen bg-white font-sans text-pmc-text overflow-x-hidden">
            {/* Scroll to Top Hidden Element */}
            <div id="top" className="absolute top-0"></div>

            {/* Official PMC Header System */}
            <header className="fixed top-0 left-0 w-full z-50">
                <NewsTicker />
                <TripleHeader />
            </header>

            {/* Main Content Area */}
            {/* 
        Spacing to account for Triple Header + News Ticker:
        News Ticker: ~30px
        Top Bar: ~32px
        Mid Header: ~100px
        Nav Bar: ~52px
        Total Header: ~214px
      */}
            <div className="pt-[160px] md:pt-[214px]">
                {/* Dynamic Hero Slider */}
                <HeroSlider />

                {/* Official Citizen Services Grid */}
                <ServiceGrid />

                {/* Leadership Message Section */}
                <MayorMessage />

                {/* Technology Showcase (Digital Twin) */}
                <SmartCityPulse />

                {/* Informational Sections could go here (Stats, News etc) */}

                {/* Detailed Official Footer */}
                <Footer />
            </div>

            {/* Floating PMC Digital Assistant */}
            <AshaAgent />
        </main>
    );
};

export default LandingPage;

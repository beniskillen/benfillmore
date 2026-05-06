import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AntidoteSection from '../components/home/AntidoteSection';
import MediaCarousel from '../components/home/MediaCarousel';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import NichesSection from '../components/home/NichesSection';
import ResultsMarquee from '../components/home/ResultsMarquee';
import WhyFillmoreSection from '../components/home/WhyFillmoreSection';
import SectionCTA from '../components/shared/SectionCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AntidoteSection />
      <MediaCarousel />
      <WhatWeDoSection />
      <NichesSection />
      <ResultsMarquee />
      <WhyFillmoreSection />
      <SectionCTA />
    </>
  );
}
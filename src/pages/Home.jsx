import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AntidoteSection from '../components/home/AntidoteSection';
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
      <WhatWeDoSection />
      <NichesSection />
      <ResultsMarquee />
      <WhyFillmoreSection />
      <SectionCTA />
    </>
  );
}
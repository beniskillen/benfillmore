import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import ScrollReveal from '../shared/ScrollReveal';

const SLIDES = [
  {
    client: 'The Sockery',
    type: 'Meta Ad',
    bg: '#1a1a2e',
    video: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_1440_2732_25fps.mp4',
  },
  {
    client: '5 Hounds',
    type: 'UGC Ad',
    bg: '#2d1b00',
    video: 'https://videos.pexels.com/video-files/3776817/3776817-hd_1080_1920_25fps.mp4',
  },
  {
    client: 'Garage Door 24/7',
    type: 'Google Display',
    bg: '#0d1b2a',
    video: 'https://videos.pexels.com/video-files/4125027/4125027-uhd_1440_2560_24fps.mp4',
  },
  {
    client: 'Pressure Washing',
    type: 'Lead Gen Ad',
    bg: '#1b2d1b',
    video: 'https://videos.pexels.com/video-files/4491852/4491852-uhd_1440_2560_24fps.mp4',
  },
  {
    client: 'The Sockery',
    type: 'UGC Creative',
    bg: '#2d0d1a',
    video: 'https://videos.pexels.com/video-files/5698735/5698735-hd_1080_1920_30fps.mp4',
  },
  {
    client: '5 Hounds',
    type: 'Product Ad',
    bg: '#1a2d1a',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-hd_1080_1920_25fps.mp4',
  },
  {
    client: 'Restaurant Client',
    type: 'Content Reel',
    bg: '#2d1a00',
    video: 'https://videos.pexels.com/video-files/3764958/3764958-uhd_1440_2560_24fps.mp4',
  },
  {
    client: 'E-Com Brand',
    type: 'Conversion Ad',
    bg: '#1a001a',
    video: 'https://videos.pexels.com/video-files/4325446/4325446-hd_1080_1920_25fps.mp4',
  },
];

export default function MediaCarousel({ title = "REAL WORK. REAL RESULTS.", subtitle = "A glimpse at the content, ads, and creative we've shipped for clients." }) {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase tracking-tight text-black text-center">
            {title}
          </h2>
          <p className="font-body text-center text-[#666666] text-lg mt-4">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        style={{ paddingBottom: '20px' }}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i} style={{ width: '280px' }}>
            <div
              className="relative overflow-hidden"
              style={{
                width: '280px',
                aspectRatio: '9/16',
                borderRadius: '16px',
                background: slide.bg,
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)' }}
              />

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-body font-semibold text-white text-sm">{slide.client}</p>
                <p className="font-body text-white/70 text-xs mt-0.5">{slide.type}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
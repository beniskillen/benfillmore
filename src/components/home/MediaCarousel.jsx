import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import ScrollReveal from '../shared/ScrollReveal';

const SLIDES = [
  {
    type: 'Content Reel',
    bg: '#0d0d0d',
    video: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/f4e48bb23_Reel4.mp4',
  },
  {
    type: 'Promo Video',
    bg: '#1a0a00',
    video: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/bb1795bd4_Reel5.mov',
  },
  {
    type: 'Teaser',
    bg: '#0d1a0d',
    video: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/6aa7f289b_Teaser1.mp4',
  },
  {
    type: 'Meta Ad',
    bg: '#1a0d0d',
    video: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/121cff92d_Teaser2.mp4',
  },
  {
    type: 'UGC',
    bg: '#0d0d1a',
    video: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/f4e48bb23_Reel4.mp4',
  },
  {
    type: 'Brand Reel',
    bg: '#1a1a0d',
    video: 'https://media.base44.com/videos/public/69fac9355f793a9829c2542e/6aa7f289b_Teaser1.mp4',
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

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
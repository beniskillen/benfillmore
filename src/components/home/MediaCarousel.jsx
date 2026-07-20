import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import ScrollReveal from '../shared/ScrollReveal';
import { HOME_MEDIA_SLIDES } from '../../lib/galleryImages';

const SLIDES = HOME_MEDIA_SLIDES;

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
          <SwiperSlide key={slide.id} style={{ width: '280px' }}>
            <div
              className="relative overflow-hidden"
              style={{
                width: '280px',
                aspectRatio: '9/16',
                borderRadius: '16px',
                background: '#0d0d0d',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0) 55%)' }}
              />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-heading font-bold text-white text-lg uppercase tracking-tight">
                  {slide.client}
                </p>
                <p className="font-body text-white/65 text-xs mt-1">
                  {slide.kind}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

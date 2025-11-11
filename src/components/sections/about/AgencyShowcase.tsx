"use client";
import "@/styles/about/AgencyShowcase.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";
import { Autoplay } from "swiper/modules";

export default function AgencyShowcase() {
  useScrollAnimations();

  const testimonials = [
    {
      src: "/images/agency-showcase/1.webp",
    },
    {
      src: "/images/agency-showcase/2.webp",
    },
    {
      src: "/images/agency-showcase/3.webp",
    },
    {
      src: "/images/agency-showcase/4.webp",
    },
    {
      src: "/images/agency-showcase/1.webp",
    },
    {
      src: "/images/agency-showcase/2.webp",
    },
    {
      src: "/images/agency-showcase/3.webp",
    },
    {
      src: "/images/agency-showcase/4.webp",
    },
  ];

  return (
    <section className="AgencyShowcase-section">
      <div className="container-fixed">
        <div className="AgencyShowcase-header">
          <h2
            className="AgencyShowcase-header-title"
            data-splitting-opacity-anime
          >
            An Agency where Creatives Want to Work; and People Want to Work
            With.
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2.2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={8000}
          className="swiper AgencyShowcase-slider"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item.src} alt="Alt" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

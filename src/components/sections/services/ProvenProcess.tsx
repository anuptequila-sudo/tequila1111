"use client";

import Image from "next/image";

import "@/styles/services/ProvenProcess.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay, Mousewheel } from "swiper/modules";

// Define all your props here
type ProvenProcessProps = {
  title: string;
  description: string;
};

export default function ProvenProcess({ title, description }: ProvenProcessProps) {
  const processSteps = [
    {
      title: "01 Discovery & Strategy",
      description: "We begin with in-depth Branding Workshops and tailored analyses to deeply understand your vision, market, and unique challenges.",
      img: "/images/services/ProvenProcess.webp",
    },
    {
      title: "02 Discovery & Strategy",
      description: "We begin with in-depth Branding Workshops and tailored analyses to deeply understand your vision, market, and unique challenges.",
      img: "/images/services/ProvenProcess.webp",
    },
    {
      title: "03 Discovery & Strategy",
      description: "We begin with in-depth Branding Workshops and tailored analyses to deeply understand your vision, market, and unique challenges.",
      img: "/images/services/ProvenProcess.webp",
    },
    {
      title: "04 Discovery & Strategy",
      description: "We begin with in-depth Branding Workshops and tailored analyses to deeply understand your vision, market, and unique challenges.",
      img: "/images/services/ProvenProcess.webp",
    },
    {
      title: "05 Discovery & Strategy",
      description: "We begin with in-depth Branding Workshops and tailored analyses to deeply understand your vision, market, and unique challenges.",
      img: "/images/services/ProvenProcess.webp",
    },
  ];

  return (
    <section className="ProvenProcess-section">
      <div className="container-fixed">
        <div className="ProvenProcess-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            {title}
          </h2>
        </div>
        <div className="ProvenProcess-container">
          <div className="ProvenProcess-item-first">
            <p className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              {description}
            </p>
          </div>
          <div
            className="ProvenProcess-item-second"
            onMouseEnter={() => {
              window.lenis?.stop?.();
            }}
            onMouseLeave={() => {
              window.lenis?.start?.();
            }}
          >
            <Swiper modules={[Autoplay, Mousewheel]} spaceBetween={40} slidesPerView={1} loop={true} direction="vertical" mousewheel={{ forceToAxis: true }} speed={500} className="swiper process-slider">
              {processSteps.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="info--wrapper">
                    <div className="info">
                      <h4 className="h4">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                    <div className="img-box">
                      <Image priority width={500} height={300} src={item.img} alt="Description of image" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

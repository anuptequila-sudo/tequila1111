"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

import "@/styles/services/ProvenProcess.css";

import { Autoplay, Mousewheel, EffectFade, Pagination } from "swiper/modules";

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
      img: "/images/services/ProvenProcess-1.webp",
    },
    {
      title: "02 Discovery & Strategy",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio nisi animi illo iure quam harum necessitatibus voluptas nam ad!",
      img: "/images/services/ProvenProcess-2.webp",
    },
    {
      title: "03 Discovery & Strategy",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, quam.",
      img: "/images/services/ProvenProcess-3.webp",
    },
    {
      title: "04 Discovery & Strategy",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio nisi animi illo iure quam harum necessitatibus voluptas nam ad!",
      img: "/images/services/ProvenProcess-4.webp",
    },
    {
      title: "05 Discovery & Strategy",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error optio nisi animi illo iure quam harum necessitatibus voluptas nam ad!",
      img: "/images/services/ProvenProcess-5.webp",
    },
  ];

  return (
    <section className="ProvenProcess-section">
      <div className="container">
        <div className="ProvenProcess-header">
          <h2 className="section--title" data-splitting-opacity-anime>
            {title}
          </h2>
        </div>
        <div className="ProvenProcess-container">
          <div className="ProvenProcess-item-first">
            <h3 className="section--subtitle" data-splitting-opacity-anime>
              <span className="description-highlight-space" data-come-up-anime></span>
              {description}
            </h3>
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
            <Swiper
              // effect={"creative"}
              effect={'fade'}
              // creativeEffect={{
              //   prev: {
              //     translate: [0, 0, -1],
              //   },
              //   next: {
              //     translate: [0, "100%", 0],
              //   },
              // }}
              modules={[Autoplay, Mousewheel, EffectFade, Pagination]}
              pagination={{ clickable: true }}
              direction="vertical"
              mousewheel={{ forceToAxis: true }}
              speed={1000}
              className="swiper process-slider"
            >
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

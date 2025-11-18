"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "@/styles/TestimonialsSlider.module.css";

import useScrollAnimations from "@/components/hooks/useScrollAnimations";

export default function TestimonialsSlider() {
  const [popupVideo, setPopupVideo] = useState<string | null>(null);

  useScrollAnimations();

  const testimonials = [
    {
      type: "video",
      src: "/images/testi/arshad.mp4",
    },
    {
      type: "video",
      src: "/images/testi/nada.mp4",
    },
    {
      type: "text",
      title: "Exceptional Creativity and Professionalism!",
      desc: `Working with Team Tequila has been an absolutely incredible experience!
      From the very first interaction, it was evident that this team is not just
      about delivering web design services—they are brand creators who truly elevate
      your imagination.`,
      author: "RAVI KOTWANI",
      role: "CEO,",
      company: "XTASY",
      tag: "Premium Lingerie Brand",
    },
    {
      type: "video",
      src: "/images/testi/sascha.mp4",
    },
    {
      type: "video",
      src: "/images/testi/CoreFit.mp4",
    },
    {
      type: "text",
      title: "Exceptional Creativity and Professionalism!",
      desc: `Working with Team Tequila has been an absolutely incredible experience!
      From the very first interaction, it was evident that this team is not just
      about delivering web design services—they are brand creators who truly elevate
      your imagination.`,
      author: "RAVI KOTWANI",
      role: "XTASY",
      company: "XTASY",
      tag: "Premium Lingerie Brand",
    },
    {
      type: "video",
      src: "/images/testi/aaa.mp4",
    },
    {
      type: "video",
      src: "/images/testi/simba.mp4",
    },
    {
      type: "video",
      src: "/images/testi/msm.mp4",
    },
    {
      type: "text",
      title: "Exceptional Creativity and Professionalism!",
      desc: `Working with Team Tequila has been an absolutely incredible experience!
      From the very first interaction, it was evident that this team is not just
      about delivering web design services—they are brand creators who truly elevate
      your imagination.`,
      author: "RAVI KOTWANI",
      role: "Manager",
      company: "XTASY",
      tag: "Premium Lingerie Brand",
    },
    {
      type: "video",
      src: "/images/testi/sascha.mp4",
    },
    {
      type: "video",
      src: "/images/testi/nada.mp4",
    },
    {
      type: "video",
      src: "/images/testi/simba.mp4",
    },
    {
      type: "text",
      title: "Exceptional Creativity and Professionalism!",
      desc: `Working with Team Tequila has been an absolutely incredible experience!
      From the very first interaction, it was evident that this team is not just
      about delivering web design services—they are brand creators who truly elevate
      your imagination.`,
      author: "RAVI KOTWANI",
      role: "Manager",
      company: "XTASY",
      tag: "Premium Lingerie Brand",
    },
    {
      type: "video",
      src: "/images/testi/msm.mp4",
    },
    {
      type: "video",
      src: "/images/testi/nada.mp4",
    },
  ];

  return (
    <section className={styles.TestimonialsSlider}>
      <div className="container-fixed">
        {/* Left Side */}
        <div className={styles.groupOne}>
          <h2 className="section--title" data-splitting-opacity-anime>
            What Our Clients Say: Voices of Success
          </h2>
          <h3 className="section--subtitle" data-splitting-opacity-anime>
            <span className="description-highlight-space"></span> Partnerships that last, stories that resonate—from clients and partners turned brand ambassadors.
          </h3>
        </div>
      </div>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={4}
          navigation={{
            nextEl: `.${styles.nextBtn}`,
            prevEl: `.${styles.prevBtn}`,
          }}
          loop={true}
          className={styles.swiper}
          data-come-up-anime
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className={`${styles.slide} ${item.type === "text" ? styles.doubleSlide : ""}`}>
              {item.type === "video" ? (
                <video className={styles.video} src={item.src} muted autoPlay loop playsInline onClick={() => setPopupVideo(item.src ?? null)} data-cursor-text="View Video" />
              ) : (
                <div className={styles.textBox}>
                  <span className={styles.testiDescriptionHighlight}>"{item.title}"</span>
                  <p className={styles.testiDescriptiontext}>{item.desc}</p>
                  <p className={styles.author}>{item.author}</p>
                  <p className={styles.roletesti}>
                    {item.role}, {item.company}
                  </p>
                  <p className={styles.tag}>{item.tag}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className={styles.navBtns}>
          <button className={styles.prevBtn}>{"⟵"}</button>
          <button className={styles.nextBtn}>{"⟶"}</button>
        </div>

        {popupVideo && (
          <div className={styles.popup}>
            <div className={styles.popupInner}>
              <button className={styles.closeBtn} onClick={() => setPopupVideo(null)}>
                ✕
              </button>
              <video src={popupVideo} controls autoPlay className={styles.popupVideo} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

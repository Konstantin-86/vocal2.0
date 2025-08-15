"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import img1 from "@/images/bg-small.jpg";
import img2 from "@/images/bg2.jpg";
import img3 from "@/images/slider/img1.jpg";
import img4 from "@/images/slider/img2.jpg";
import img5 from "@/images/slider/img3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@/styles/ImageSlider.module.css";

const ImageSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        loop
        centeredSlides={true}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 3.5,
          },
          0: {
            slidesPerView: 1.5,
          },
        }}
        className={styles.swiper}
      >
        {[img1, img2, img3, img4, img5, img1, img2, img3, img4, img5].map(
          (img, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.imageContainer}>
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={styles.image}
                  style={{
                    objectFit: "cover", // или "contain" в зависимости от ваших потребностей
                    width: "100%",
                    height: "100%",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw" // адаптивные размеры
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default ImageSlider;

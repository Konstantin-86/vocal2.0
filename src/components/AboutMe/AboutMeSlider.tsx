"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import diploma1 from "@/images/About/diplom1.jpg";
import diploma2 from "@/images/About/dioplom2.jpg";
import img1 from "@/images/bg-small.jpg";
import img2 from "@/images/bg2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@/styles/AboutMe/AboutMeSlider.module.css";

const AboutMeSlider = () => {
  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  const images = [
    diploma1,
    diploma2,
    img1,
    img2,
    diploma1,
    diploma2,
    img1,
    img2,
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage !== null) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);
  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "next") {
      setSelectedImage((prev) =>
        prev === images.length - 1 ? 0 : (prev as number) + 1
      );
    } else {
      setSelectedImage((prev) =>
        prev === 0 ? images.length - 1 : (prev as number) - 1
      );
    }
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <Swiper
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={20}
          className={styles.swiper}
          breakpoints={{
            500: {
              slidesPerView: 1, // На мобильных - одно изображение
              spaceBetween: 10, // Можно уменьшить отступ для мобильных
            },
            768: {
              slidesPerView: 1.5, // На планшетах и выше - 1.5 изображения
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div
                className={styles.imageContainer}
                onClick={() => openModal(index)}
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  width={240}
                  height={240}
                  className={styles.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImage !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>

            <div className={styles.fullscreenImage}>
              <Image
                src={images[selectedImage]}
                alt={`Fullscreen image ${selectedImage + 1}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className={styles.navigation}>
              <button
                className={styles.navButton}
                onClick={() => navigateImage("prev")}
              >
                &#10094;
              </button>
              <button
                className={styles.navButton}
                onClick={() => navigateImage("next")}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMeSlider;

import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import Title from "@/components/Title";
import TextScroll from "./TextScroll";

import image from "@/images/bg2.jpg";

import styles from "@/styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div>
      <section className={styles.about} id="about">
        <div className="container">
          <Title text="about me" />
          <div className={styles.wrapContent}>
            <div className={styles.imageWrap}>
              <Image
                src={image}
                alt="Преподаватель вокала"
                width={400}
                height={500}
              />
            </div>

            <div className={styles.content}>
              <div className={styles.subtitle}>
                <p>Профессиональный вокал для всех уровней</p>
              </div>

              <div className={styles.text}>
                <p>
                  Меня зовут [Имя], я — профессиональный вокалист и
                  преподаватель с [X] годами опыта. Моя методика сочетает
                  классическую школу и современные техники, помогая ученикам
                  раскрыть природный потенциал голоса.
                </p>
                <p>
                  Я закончила [Консерваторию/Академию], выступала на сценах
                  [Примеры], а теперь помогаю другим обрести уверенность в своем
                  голосе.
                </p>
              </div>
              <ul className={styles.list}>
                <li>Авторская программа обучения</li>
                <li>Работа с дыханием и дикцией</li>
                <li>Подготовка к выступлениям</li>
              </ul>
            </div>
          </div>
        </div>
        <TextScroll
          text={
            "Запишитесь на пробный урок вокала бесплатно! Раскройте свой голос с профессиональными педагогами."
          }
          speed={0.2}
          repeat={10}
        />
        <ImageSlider />
      </section>
    </div>
  );
};

export default AboutMe;

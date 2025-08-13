import Image from "next/image";

import image from "@/images/bg2.jpg";

import styles from "@/styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div>
      <section className={styles.about} id="about">
        <div className={styles.container}>
          <div className={styles.wrapContent}>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt="Преподаватель вокала"
                width={400}
                height={500}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>Обо мне</h2>
              <p className={styles.subtitle}>
                Профессиональный вокал для всех уровней
              </p>
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
                <li>✅ Авторская программа обучения</li>
                <li>✅ Работа с дыханием и дикцией</li>
                <li>✅ Подготовка к выступлениям</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

"use client";

import { useInView } from "react-intersection-observer";
import styles from "@/styles/HowItWork/Steps.module.css";
import { useEffect, useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

const stepsData: Step[] = [
  {
    id: 1,
    title: "Разминка",
    description: "Дыхательные упражнения и распевка для разогрева связок.",
  },
  {
    id: 2,
    title: "Работа над техникой",
    description: "Постановка голоса, диапазон, контроль дыхания.",
  },
  {
    id: 3,
    title: "Разбор песен",
    description: "Выбираем репертуар и отрабатываем его на практике.",
  },
  {
    id: 4,
    title: "Работа с микрофоном",
    description:
      "Освоение правильного положения микрофона и работы с аппаратурой.",
  },
  {
    id: 5,
    title: "Артикуляция и дикция",
    description: "Упражнения для четкого произношения текста.",
  },
  {
    id: 6,
    title: "Импровизация",
    description: "Развитие навыков вокальной импровизации и мелизматики.",
  },
  {
    id: 7,
    title: "Работа с резонаторами",
    description: "Нахождение и развитие грудного и головного резонирования.",
  },
  {
    id: 8,
    title: "Сценическое движение",
    description: "Сочетание пения с движением, работа над харизмой.",
  },
  {
    id: 9,
    title: "Запись в студии",
    description: "Практика работы в студийных условиях, дубляж.",
  },
];

const Steps = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Создаем массив refs и состояний inView для всех шагов заранее
  const stepObservers = stepsData.map(() => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
      rootMargin: "-50px 0px",
    });
    return { ref, inView };
  });

  // Рендер для десктопов (ряды по 3 шага)
  const renderDesktopRows = () => {
    const rows = [];
    for (let i = 0; i < stepsData.length; i += 3) {
      const rowSteps = stepsData.slice(i, i + 3);
      const rowObservers = stepObservers.slice(i, i + 3);

      rows.push(
        <div
          key={`row-${i}`}
          ref={rowObservers[0].ref} // Используем первый ref для всей строки
          className={`${styles.stepsRow} ${
            rowObservers.some((observer) => observer.inView)
              ? styles.animateIn
              : ""
          }`}
        >
          {rowSteps.map((step, index) => (
            <div key={step.id} className={styles.step}>
              <div className={styles.stepIcon}>{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  // Рендер для мобильных (отдельные шаги)
  const renderMobileSteps = () => {
    return stepsData.map((step, index) => {
      const { ref, inView } = stepObservers[index];

      return (
        <div
          key={step.id}
          ref={ref}
          className={`${styles.step} ${inView ? styles.animateIn : ""}`}
        >
          <div className={styles.stepIcon}>{step.id}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      );
    });
  };

  return (
    <div className={styles.steps}>
      {isMobile ? renderMobileSteps() : renderDesktopRows()}
    </div>
  );
};

export default Steps;

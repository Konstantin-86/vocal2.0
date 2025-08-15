"use client";

import { useInView } from "react-intersection-observer";
import styles from "@/styles/HowItWork/Steps.module.css";

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
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <div className={styles.steps} ref={ref}>
      <div className={`${styles.stepsGrid} ${inView ? styles.animateIn : ""}`}>
        {stepsData.map((step) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.stepIcon}>{step.id}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;

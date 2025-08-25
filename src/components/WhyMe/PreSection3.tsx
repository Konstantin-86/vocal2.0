import styles from "@/styles/WhyMe/PreSection.module.css";

const Content3 = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>в любой технике</h2>
      <div className={styles.techniques}>
        <div className={styles.techniqueCard}>
          <h3>Дыхание по системе Appoggio</h3>
          <p>Итальянская техника для контроля дыхания и поддержки звука</p>
        </div>
        <div className={styles.techniqueCard}>
          <h3>Speech Level Singing</h3>
          <p>Пение в речевой позиции без напряжения</p>
        </div>
        <div className={styles.techniqueCard}>
          <h3>Работа с резонаторами</h3>
          <p>Усиление естественного звучания голоса</p>
        </div>
        <div className={styles.techniqueCard}>
          <h3>Сценическая подача</h3>
          <p>Импровизация и работа с аудиторией</p>
        </div>
      </div>
    </div>
  );
};

export default Content3;

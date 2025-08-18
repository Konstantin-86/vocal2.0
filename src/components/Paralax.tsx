import styles from "@/styles/Paralax.module.css";
import Content1 from "./WhyMe/PreSection1";

const Paralax = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.s1}>
          <Content1 />
        </div>

        {/* Секция 2 - Преимущества */}
        <div className={styles.s2}>
          <div className={styles.content}>
            <h2 className={styles.title2}>свободно и уверенно</h2>
            <ul className={styles.perks}>
              <li className={styles.perkItem}>
                <span className={styles.perkIcon}>🎤</span>
                Избавитесь от зажимов и страха петь
              </li>
              <li className={styles.perkItem}>
                <span className={styles.perkIcon}>🎶</span>
                Научитесь брать высокие ноты без напряжения
              </li>
              <li className={styles.perkItem}>
                <span className={styles.perkIcon}>👂</span>
                Разовьёте музыкальный слух и ритм
              </li>
              <li className={styles.perkItem}>
                <span className={styles.perkIcon}>🌟</span>
                Подготовитесь к выступлениям или записи
              </li>
            </ul>
          </div>
        </div>

        {/* Секция 3 - Методики */}
        <div className={styles.s3}>
          <div className={styles.content}>
            <h2 className={styles.title}>в любой технике</h2>
            <div className={styles.techniques}>
              <div className={styles.techniqueCard}>
                <h3>Дыхание по системе Appoggio</h3>
                <p>
                  Итальянская техника для контроля дыхания и поддержки звука
                </p>
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
        </div>

        {/* Секция 4 - Призыв к действию */}
        <div className={styles.s4}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              <span className={styles.ctaLine}>Готовы</span>
              <span className={styles.ctaLine}>раскрыть</span>
              <span className={styles.ctaLine}>свой голос?</span>
            </h2>
            <button className={styles.ctaButton}>
              Записаться на пробный урок
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paralax;

import styles from "@/styles/Paralax.module.css";
import Content1 from "./PreSection1";
import Content2 from "./PreSection2";
import Content3 from "./PreSection3";

const WhyMe = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.s1}>
          <Content1 />
        </div>
        <div className={styles.s2}>
          <Content2 />
        </div>
        <div className={styles.s3}>
          <Content3 />
        </div>
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

export default WhyMe;

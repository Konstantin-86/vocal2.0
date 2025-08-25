import styles from "@/styles/Pricing/Pricing.module.css";

const pricingPlans = [
  {
    title: "Пробный урок",
    price: "500",
    description:
      "Знакомство, определение ваших целей и уровня, составление плана развития.",
    features: [
      "60 минут",
      "Разбор ваших сильных сторон",
      "Персональные рекомендации",
    ],
    recommended: false,
    ctaText: "Записаться на пробный",
  },
  {
    title: "Стандартный пакет",
    price: "3500",
    period: "за 4 занятия",
    description: "Идеально для регулярных занятий и стабильного прогресса.",
    features: [
      "4 занятия по 60 мин",
      "Аудиозапись каждого урока",
      "Домашние задания",
      "Подбор репертуара",
      "Поддержка в чате",
    ],
    recommended: true, // Этот тариф будет выделен
    ctaText: "Купить пакет",
  },
  {
    title: "Разовое занятие",
    price: "1000",
    description:
      "Для тех, кто хочет получить консультацию или не может заниматься регулярно.",
    features: [
      "60 минут",
      "Работа над конкретной задачей",
      "Аудиозапись урока",
    ],
    recommended: false,
    ctaText: "Записаться",
  },
];

const Pricing = () => {
  return (
    <>
      <section id="pricing" className={styles.pricing}>
        <div className={styles.container}>
          <h2 className={styles.title}>Стоимость занятий</h2>
          <p className={styles.subtitle}>
            Инвестируйте в свой голос — он того стоит
          </p>

          <div className={styles.grid}>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  plan.recommended ? styles.recommended : ""
                }`}
              >
                {plan.recommended && (
                  <div className={styles.badge}>Выбор учеников</div>
                )}

                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.priceValue}>{plan.price} ₽</span>
                  {plan.period && (
                    <span className={styles.pricePeriod}>/{plan.period}</span>
                  )}
                </div>
                <p className={styles.cardDescription}>{plan.description}</p>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles.button} ${
                    plan.recommended ? styles.primary : styles.secondary
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>

          <div className={styles.note}>
            <p>
              ⚡️ Акция! Приведи друга и получи скидку 15% на следующий месяц
              занятий!
            </p>
            <p>
              🎁 Также доступны подарочные сертификаты — идеальный подарок для
              близких.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

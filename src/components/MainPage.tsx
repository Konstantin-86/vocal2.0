import Image from "next/image";
import bgLarge from "@/images/bg.jpg";
/* import bgLarge2 from "@/images/bg2.jpg"; */
import styles from "@/styles/MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.inner}>
      <Image
        fill
        priority
        className={styles.mainBg}
        src={bgLarge}
        alt="Добро пожаловать!"
      />
      {/*  <Image fill priority className={styles.mainBg2} src={bgLarge2} alt="" /> */}

      <div className="container">
        <h1 className={styles.title}>Main title</h1>
        <h2 className={styles.subtitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          at, esse commodi totam sint corporis rerum nisi pariatur consequuntur
          perferendis illo, facilis unde magni, dolore voluptas debitis. Sunt,
          ab odio?
        </h2>
      </div>
      <div className={styles.bgShadow}></div>
    </div>
  );
};

export default MainPage;

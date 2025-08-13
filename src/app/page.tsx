import Link from "next/link";
import styles from "./page.module.css";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <>
      <div className={styles.inner}>
        <h1 className={styles.title}>Main title</h1>
        <h2 className={styles.subtitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          at, esse commodi totam sint corporis rerum nisi pariatur consequuntur
          perferendis illo, facilis unde magni, dolore voluptas debitis. Sunt,
          ab odio?
        </h2>
        <div className={styles.bg}></div>
      </div>
      <MainContent />
    </>
  );
}

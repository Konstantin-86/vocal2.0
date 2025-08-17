import Image from "next/image";
import Title from "@/components/Title";

import teacherPortrait from "@/images/About/teaher.jpg";
import diploma1 from "@/images/About/diplom1.jpg";
import diploma2 from "@/images/About/dioplom2.jpg";

import styles from "@/styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.titleWrapper}>
          <Title text="About Me" />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <Image
                src={teacherPortrait}
                alt="Professional vocal coach in studio"
                width={500}
                height={700}
                priority
                className={styles.portrait}
              />
            </div>

            <div className={styles.certificates}>
              <Image
                src={diploma1}
                alt="Vocal training certificate"
                width={200}
                height={150}
                className={styles.certificate}
              />
              <Image
                src={diploma2}
                alt="Music academy diploma"
                width={200}
                height={150}
                className={styles.certificate}
              />
            </div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.tagline}>
              Transform Your Voice with Professional Guidance
            </h2>

            <div className={styles.bio}>
              <p>
                Hi, I&apos;m [Your Name], a certified vocal coach with [X] years of
                professional teaching experience. My journey in music began at
                [Conservatory Name] and led me to perform at [Notable Venues].
              </p>
              <p>
                My teaching philosophy blends classical techniques with
                contemporary approaches, tailored to each student&apos;s unique
                voice. Whether you&apos;re preparing for auditions or just singing
                for joy, I&apos;ll help you unlock your full vocal potential.
              </p>
            </div>

            <ul className={styles.expertiseList}>
              <li className={styles.expertiseItem}>
                <span className={styles.checkIcon}>✓</span>
                Certified vocal pedagogy training
              </li>
              <li className={styles.expertiseItem}>
                <span className={styles.checkIcon}>✓</span>
                Performance psychology coaching
              </li>
              <li className={styles.expertiseItem}>
                <span className={styles.checkIcon}>✓</span>
                Customized vocal exercises
              </li>
              <li className={styles.expertiseItem}>
                <span className={styles.checkIcon}>✓</span>
                Stage presence development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
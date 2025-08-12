"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/styles/Header.module.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.active : styles.default}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/visit"
              className={pathname === "/visit" ? styles.active : styles.default}
            >
              visit
            </Link>
          </li>
          <li>
            <Link
              href="/other"
              className={pathname === "/other" ? styles.active : styles.default}
            >
              other
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

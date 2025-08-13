import Link from "next/link";
import styles from "./page.module.css";
import MainContent from "@/components/MainContent";
import MainPage from "@/components/MainPage";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <MainPage />
      <AboutMe />
      <MainContent />
    </>
  );
}

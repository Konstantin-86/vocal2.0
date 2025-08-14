import MainContent from "@/components/MainContent";
import MainPage from "@/components/MainPage";
import AboutMe from "@/components/AboutMe";
import HowItWorks from "@/components/HowItWork/HowItWorks";

export default function Home() {
  return (
    <>
      <MainPage />
      <AboutMe />
      <HowItWorks />
      <MainContent />
    </>
  );
}

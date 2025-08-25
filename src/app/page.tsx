import MainContent from "@/components/MainContent";
import MainPage from "@/components/MainPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import HowItWorks from "@/components/HowItWork/HowItWorks";
import Paralax from "@/components/Paralax";

export default function Home() {
  return (
    <>
      <MainPage />
      <AboutMe />
      <Paralax />
      <HowItWorks />
      <MainContent />
    </>
  );
}

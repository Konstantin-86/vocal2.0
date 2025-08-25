import Pricing from "@/components/Pricing/Pricing";
import MainPage from "@/components/MainPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import HowItWorks from "@/components/HowItWork/HowItWorks";
import WhyMe from "@/components/WhyMe/WhyMe";

export default function Home() {
  return (
    <>
      <MainPage />
      <AboutMe />
      <WhyMe />
      <HowItWorks />
      <Pricing />
    </>
  );
}

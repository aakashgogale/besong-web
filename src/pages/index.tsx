import Services from "@/components/section/Services";
import Navbar from "../components/layout/Navbar";
import Hero from "@/components/section/Hero";
import Innovation from "@/components/section/Innovation";
import Assistance from "@/components/section/Assistance";
import Expertise from "@/components/section/Expertise";
import Strategy from "@/components/section/Strategy";
import CardsGrid from "@/components/section/CardsGrid";
// import CTA from "@/components/section/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Innovation />
      <Assistance />
      <Expertise />
      <Strategy />
      <CardsGrid />
      {/* <CTA /> */}
      <Footer />
    </>
  );
}

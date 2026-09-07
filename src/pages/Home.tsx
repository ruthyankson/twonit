import Hero from "../components/Hero";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import SharedTruth from "../components/SharedTruth";
import ForArtisans from "../components/ForArtisans";
import ForCustomers from "../components/ForCustomers";
import Research from "../components/Research";
import BeyondTailoring from "../components/BeyondTailoring";
import Pilot from "../components/Pilot";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <SharedTruth />
      <ForArtisans />
      <ForCustomers />
      <Research />
      <BeyondTailoring />
      <Pilot />
      <About />
    </>
  );
}

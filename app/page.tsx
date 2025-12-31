import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import HowWeWork from "./components/HowWeWork";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}

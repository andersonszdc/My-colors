import React from "react";
import Cases from "./sections/Cases";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Statistics from "./Statistics";
import Global from "./styles/global";

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <Hero />
      <HowItWorks />
      <Statistics />
      <Cases />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

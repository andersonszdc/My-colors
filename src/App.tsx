import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Cases from "./sections/Cases";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Statistics from "./sections/Statistics";
import Global from "./styles/global";
import theme from "./styles/theme";

function App() {
  const [colors, setColors] = useState<any>({
    bg: theme.dark,
    fg: theme.yellow,
  });
  return (
    <div className="App">
      <ThemeProvider theme={{ theme, ...colors }}>
        <Global />
        <Header SetTheme={setColors} />
        <Hero />
        <HowItWorks SetTheme={setColors} />
        <Statistics />
        <Cases SetTheme={setColors} />
        <FAQ SetTheme={setColors} />
        <CTA />
        <Footer SetTheme={setColors} />
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Brands from "./components/Brands";
import Experience from "./components/Experience";
import MediaKit from "./components/MediaKit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Brands />
        <MediaKit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

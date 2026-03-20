import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Technologies from "./components/Technologies";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages

import FabricationPage from "./pages/fabrication"
import FireAlarmPage from "./pages/FireAlarmPage";
import HydrantPage from "./pages/HydrantPage";
import TrainingPage from "./pages/TrainingPage";
import AMCPage from "./pages/AMCPage";

// 🔥 Home Page Component (all sections)
function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="why">
        <WhyChooseUs />
      </section>

      <section id="tech">
        <Technologies />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Service Pages */}
        <Route path="/fabrication" element={<FabricationPage />} />
        <Route path="/fire-alarm" element={<FireAlarmPage />} />
        <Route path="/fire-hydrant" element={<HydrantPage />} />
        <Route path="/fire-training" element={<TrainingPage />} />
        <Route path="/amc" element={<AMCPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
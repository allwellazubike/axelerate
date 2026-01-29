import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import GrowthProtocol from "../components/GrowthProtocol";
import WhyAxelerate from "../components/WhyAxelerate";
import Partnership from "../components/Partnership";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <Philosophy />
      <GrowthProtocol />
      <WhyAxelerate />
      <Partnership />
      <Footer />
    </div>
  );
}

export default Home;

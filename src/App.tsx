import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Goods } from "./components/Goods";
import { Gallery } from "./components/Gallery";
import { CanvasWaves } from "./components/CanvasWaves";
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
      ReactGA.initialize('G-MTSH7E3L0F');
      ReactGA.send({ hitType: "pageview", page: window.location.pathname }); 
  }, []);

  return (
    <div className="min-h-screen text-[#e4e4e7] selection:bg-white/20 selection:text-white font-sans relative bg-black">
      <CanvasWaves />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Products />
        <Services />
        <Goods />
        <Gallery />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
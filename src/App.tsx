import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Goods } from "./components/Goods";
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
      ReactGA.initialize('G-MTSH7E3L0F');
      ReactGA.send({ hitType: "pageview", page: window.location.pathname }); 
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Goods />
      <Contacts />
      <Footer />
    </div>
  );
}
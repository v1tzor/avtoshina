import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Goods } from "./components/Goods";

export default function App() {
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

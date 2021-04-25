import React, { useEffect } from "react";
import "./App.scss";
import GallerySection from "./components/GallerySection/GallerySection";
import Header from "./components/Header/Header";
import CardsSection from "./components/CardsSection/CardsSection";
import RotatingCards from "./components/RotatingCards/RotatingCards";
import Stories from "./components/Stories/Stories";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";
import PopupNavigation from "./components/PopupNavigation/PopupNavigation";
import Dialog from "./components/Dialog/Dialog";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <div className="container">
        <PopupNavigation />
        <Header />
        <GallerySection />
        <CardsSection />
        <RotatingCards />
        <Stories />
        <FormSection />
        <Footer />
        <Dialog />
      </div>
    </div>
  );
}

export default App;

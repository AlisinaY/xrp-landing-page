import "./App.css";

import Nav from "./components/nav";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import Features from "./components/Features";
import Introduction from "./components/Introduction";
import Vision from "./components/Vision";
import NewFeatures from "./components/NewFeatures";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-violet-50">
      <Nav />
      <div className="xl:w-full xl:flex xl:justify-center">
        <div className="xl:w-[1349px]">
          <Header />
          <HeroSection />
          <BenefitsSection />
          <Features />
          <Introduction />
          <Vision />
          <NewFeatures />
          <Community />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

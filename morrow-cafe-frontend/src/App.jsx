import "./App.css";
import ClaimForm from "./components/ClaimForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Offer from "./components/Offer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offer />
        <HowItWorks />
        <ClaimForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

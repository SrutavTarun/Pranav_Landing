import "./styles/App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import SubFooter from "./components/subFooter";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <SubFooter />
      <Footer />
    </>
  );
};

export default App;

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Works />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

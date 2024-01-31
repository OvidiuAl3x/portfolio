import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./pages/Skills";
import Works from "./pages/Works";

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

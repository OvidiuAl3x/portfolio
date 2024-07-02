import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import CustomScrollbar from "./components/Scrollbar";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

function App() {
  return (
    <div className="relative w-[90%] xl:w-[70%] mx-auto">
      <CustomScrollbar />

      <Header />
      <Home />
      <About />
      <Work />
      <Projects />
      <Contacts />

      <ScrollToTop />
    </div>
  );
}

export default App;

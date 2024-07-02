import Animation from "./components/Animation";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

function App() {
  return (
    <div className="w-[90%] xl:w-[70%] mx-auto">
      <Header />
      <Home />

      <Animation props="animate-opacity">
        <About />
      </Animation>
      <Animation props="animate-opacity">
        <Work />
      </Animation>
      <Animation props="animate-opacity">
        <Projects />
      </Animation>

      <Animation props="animate-opacity">
        <Contacts />
      </Animation>
      <ScrollToTop />
    </div>
  );
}

export default App;

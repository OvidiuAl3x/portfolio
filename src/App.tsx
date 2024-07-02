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
    <>
      <CustomScrollbar />
      <Header />

      <div className=" w-[90%] xl:w-[70%] mx-auto">
        <Home />
        <About />
        <Work />
        <Projects />
        <Contacts />

        <ScrollToTop />
      </div>
    </>
  );
}

export default App;

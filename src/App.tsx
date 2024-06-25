import Header from "./components/Header";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

function App() {
  return (
    <div className=" w-[90%] xl:w-[70%] mx-auto">
      <Header />
      <Home />
      <About />
      <Work />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;

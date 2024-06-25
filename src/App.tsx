import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <div className=" w-[90%] xl:w-[70%] mx-auto">
      <Header />
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;

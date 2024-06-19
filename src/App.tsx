import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const RoutesProject = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Header />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <div className=" w-[90%] xl:w-[70%] mx-auto">
      <RoutesProject />
    </div>
  );
}

export default App;

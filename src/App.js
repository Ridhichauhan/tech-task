import { Route,BrowserRouter as Router, Routes, } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Pages from "./Components/Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pages" element={<Pages/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

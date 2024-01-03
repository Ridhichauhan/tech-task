import { Route,BrowserRouter as Router, Routes, } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

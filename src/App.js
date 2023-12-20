import { Route,BrowserRouter as Router, Routes, } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

// styles
import "./App.scss";

// pages
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<p>Projects</p>} />
        <Route path="/contact" element={<p>Contact</p>} />
        <Route path="*" element={<p>ErrorPage</p>} />
      </Routes>
    </div>
  );
}

export default App;

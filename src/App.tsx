import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Stars } from "./components/stars/Stars";
import { Footer } from "./components/footer/Footer";

// styles
import "./App.scss";

// pages
const Home = lazy(() => import("./pages/home/Home"));
import ErrorPage from "./pages/error-page/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Stars />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects" element={<p>Projects</p>} />
        <Route path="/contact" element={<p>Contact</p>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

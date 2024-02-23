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
          path="/personal-website-react-migration/"
          element={
            <Suspense fallback={<Stars />}>
              <Home />
              <Footer />
            </Suspense>
          }
        />
        <Route
          path="/personal-website-react-migration/about"
          element={<h1>About</h1>}
        />
        <Route
          path="/personal-website-react-migration/projects"
          element={<p>Projects</p>}
        />
        <Route
          path="/personal-website-react-migration/contact"
          element={<p>Contact</p>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

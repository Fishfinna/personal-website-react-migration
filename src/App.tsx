import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Stars } from "./components/stars/Stars";
import { Footer } from "./components/footer/Footer";

// styles
import "./App.scss";

// pages
const Home = lazy(() => import("./pages/home/Home"));
import ErrorPage from "./pages/error-page/ErrorPage";

export default function App() {
  const uri = ""; // can be changed if updated

  return (
    <div className="App">
      <Routes>
        <Route
          path={uri}
          element={
            <Suspense fallback={<Stars />}>
              <Home />
              <Footer />
            </Suspense>
          }
        />
        <Route path={uri + "/about"} element={<h1>About</h1>} />
        <Route path={uri + "/projects"} element={<p>Projects</p>} />
        <Route path={uri + "/contact"} element={<p>Contact</p>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

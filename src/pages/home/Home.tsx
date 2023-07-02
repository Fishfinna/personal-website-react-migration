import { useRef } from "react";
import { Stars } from "../../components/stars/Stars";
import "./Home.scss";

export default function Home() {
  const typewriterContent = [
    "web design.",
    "graphic design.",
    "backend programming.",
    "database management.",
    "fun stuff!",
  ];

  return (
    <>
      <Stars />
      <div className="hero">
        <div className="hero-content">
          <h1>Shanti S.</h1>

          <p className="hero-typewriter">I do</p>
        </div>
      </div>
    </>
  );
}

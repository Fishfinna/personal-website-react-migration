import { useRef, useEffect } from "react";
import { Stars } from "../../components/stars/Stars";
import "./Home.scss";

export default function Home() {
  const typewriterRef = useRef<HTMLParagraphElement | null>(null);

  // const typewriterContent = [
  //   "web design.",
  //   "graphic design.",
  //   "backend programming.",
  //   "database management.",
  //   "fun stuff!",
  // ];

  useEffect(() => {
    //finish this to change the text
    null;
  }, []);

  return (
    <>
      <Stars />
      <div className="hero">
        <div className="hero-content">
          <h1>Shanti S.</h1>

          <p className="hero-typewriter" ref={typewriterRef}>
            I do
          </p>
        </div>
      </div>
    </>
  );
}

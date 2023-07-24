import { useRef, useEffect, useState } from "react";
import { Stars } from "../../components/stars/Stars";
import "./Home.scss";

export default function Home() {
  const typewriterRef = useRef(null);
  const txtRef = useRef("");
  const isDeletingRef = useRef(false);
  const loopNumRef = useRef(0);
  const [typewriterState, updateTypeWriter] = useState<string>("");
  const typewriterContent = [
    "web development.",
    "graphic design.",
    "programming.",
    "fun stuff!",
  ];

  useEffect(() => {
    const tick = () => {
      const i = loopNumRef.current % typewriterContent.length;
      const fullTxt = typewriterContent[i];

      if (isDeletingRef.current) {
        txtRef.current = fullTxt.substring(0, txtRef.current.length - 1);
      } else {
        txtRef.current = fullTxt.substring(0, txtRef.current.length + 1);
      }

      updateTypeWriter(txtRef.current);

      let delta = 140 - Math.random() * 100;

      if (isDeletingRef.current) {
        delta /= 2;
      }

      if (!isDeletingRef.current && txtRef.current === fullTxt) {
        delta = 500;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && txtRef.current === "") {
        isDeletingRef.current = false;
        loopNumRef.current++;
        delta = 1000;
      }

      setTimeout(tick, delta);
    };

    tick();
  }, []);

  return (
    <>
      <Stars />
      <div className="hero">
        <h1>Shanti S.</h1>

        <p className="hero-typewriter" ref={typewriterRef}>
          I do {typewriterState}
        </p>
      </div>
    </>
  );
}

import { Stars } from "../../components/stars/Stars";
import { TypeWriter } from "../../components/typewriter/typewriter";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Stars />
      <div className="hero">
        <h1>Shanti S.</h1>
        <TypeWriter
          typewriterContent={[
            "web development.",
            "graphic design.",
            "programming.",
            "fun stuff!",
          ]}
        >
          I do
        </TypeWriter>
        <div className="scroll">
          <div className="scroll-dot"></div>
        </div>
      </div>

      <div className="about-me">
        <div className="stats">
          <p className="stats-title">Shanti Stein-Gagnon | She/Her | Lv.20</p>
        </div>

        <div className="my-image">
          <img src="/images/pixel-me.png"></img>
        </div>
      </div>
    </>
  );
}

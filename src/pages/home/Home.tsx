import { Stars } from "../../components/stars/Stars";
import { TypeWriter } from "../../components/typewriter/typewriter";
import { ScrollPrompt } from "../../components/scroll-prompt/scrollPrompt";
import "./Home.scss";
import { Waves } from "../../components/waves/Waves";

export default function Home() {
  return (
    <>
      <Waves />
      <Stars />
      <img src="/images/treeline.png" className="treeline"></img>
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
        <ScrollPrompt />
      </div>
      <div className="about-me">
        <div className="stats">
          <h2 className="stats-title">Shanti Stein-Gagnon | She/Her | Lv.20</h2>
          <div>
            <p className="stats-text">
              Hiya! I'm shanti. I'm a software developer, cartoon junkie, and
              general computer enthusiast.
            </p>
          </div>
        </div>

        <div className="my-image">
          <img src="/images/pixel-me.png"></img>
        </div>
      </div>
    </>
  );
}

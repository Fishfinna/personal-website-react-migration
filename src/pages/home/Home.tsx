import { Stars } from "../../components/stars/Stars";
import { TypeWriter } from "../../components/typewriter/typewriter";
import { ScrollPrompt } from "../../components/scroll-prompt/scrollPrompt";
import { Waves } from "../../components/waves/Waves";
import { AboutMe } from "../../components/about-me/about-me";
import { Email } from "../../components/email/email";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Waves />
      <Stars />
      <img src="/images/treeline.svg" className="treeline"></img>
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
      <AboutMe />
      <Email />
    </>
  );
}

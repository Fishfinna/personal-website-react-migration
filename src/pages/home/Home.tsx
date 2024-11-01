import { Stars } from "../../components/stars/Stars";
import { TypeWriter } from "../../components/typewriter/typewriter";
import { ScrollPrompt } from "../../components/scroll-prompt/scrollPrompt";
import { Waves } from "../../components/waves/Waves";
import { AboutMe } from "../../components/about-me/about-me";
import { Email } from "../../components/email/email";
import "./Home.scss";
import { CareerPath } from "../../components/career-path/careerPath";
import { Project } from "../../components/project/project";

export default function Home() {
  return (
    <>
      <Waves />
      <Stars />
      <img src="/images/treeline.png" className="treeline"></img>
      <div className="hero">
        <div className="hero-text">
          <h1>Shanti S.</h1>
          <TypeWriter
            typewriterContent={[
              "programming.",
              "web development.",
              "graphic design.",
              "fun stuff!",
            ]}
          >
            I do
          </TypeWriter>
        </div>
        <ScrollPrompt />
      </div>
      <AboutMe />

      <div className="project-list">
        <Project
          name="example"
          thumbnail="https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          websiteUrl="https://example.com"
          codeUrl="http://example.com"
        >
          this is an example project
        </Project>

        <Project
          name="example"
          thumbnail="https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          websiteUrl="https://example.com"
          codeUrl="http://example.com"
        >
          this is an example project
        </Project>

        <Project
          name="example"
          thumbnail="https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          websiteUrl="https://example.com"
          codeUrl="http://example.com"
        >
          this is an example project
        </Project>
      </div>
      <CareerPath />
      <Email />
    </>
  );
}

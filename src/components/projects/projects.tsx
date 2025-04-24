import {
  Project,
  ProjectParams,
} from "../../components/projects/project/project";
import { Fader } from "../fader/fader";
import "./projects.scss";

export function Projects() {
  const projectList: any[] = [];
  const projects: ProjectParams[] = [
    {
      name: "Shawn-tea Video",
      children:
        "shawn-tea video is a cross-platform anime streaming site with minimal bulk. It is inspired by the popular ani-cli command line tool, but runs completely on the browser.",
      thumbnail: "./images/projects/shawn-tea-video.png",
      websiteUrl: "https://fishfinna.github.io/anime/",
      codeUrl: "https://github.com/Fishfinna/anime",
      icon: "./icons/project-icons/tea-video.ico",
    },
    {
      name: "Quiz Me Katakana",
      children:
        "Quiz me katakana is a highly customizable gameification system for learning japanese katakana and hiragana characters.",
      thumbnail: "./images/projects/quiz-me-katakana.png",
      websiteUrl: "https://fishfinna.github.io/quiz-me-katakana/",
      codeUrl: "https://github.com/Fishfinna/quiz-me-katakana",
      icon: "./icons/project-icons/kana.ico",
    },
  ];

  projects.forEach((project, index) => {
    projectList.push(
      <Fader key={index}>
        <Project {...project}>{project.children}</Project>
      </Fader>
    );
  });

  return (
    <>
      <h1>Projects</h1>
      <div className="project-list">{projectList}</div>
    </>
  );
}

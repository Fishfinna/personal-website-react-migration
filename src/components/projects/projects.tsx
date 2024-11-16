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
        "shawn-tea video is a cross-platform anime streaming site with minimal bulk. It is based on the popular ani-cli command line tool, but runs completely on the browser.",
      thumbnail: "./images/projects/shawn-tea-video.png",
      websiteUrl: "https://fishfinna.github.io/anime/",
      codeUrl: "https://github.com/Fishfinna/anime",
    },
    {
      name: "example",
      children:
        "Example  text more goes here I did stuff and I did tghings and now the things are stufExample  text more goes here I did stuff and I did tghings and now the things are stExample  text more goes here I did stuff and I did tghings and now the things are stuff and uff and f and it is all good.",
      thumbnail:
        "https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      websiteUrl: "https://example.com",
      codeUrl: "http://example.com",
    },
    {
      name: "example",
      children:
        "Example  text more goes here I did stuff and I did tghings and now the things are stufExample  text more goes here I did stuff and I did tghings and now the things are stExample  text more goes here I did stuff and I did tghings and now the things are stuff and uff and f and it is all good.",
      thumbnail:
        "https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      websiteUrl: "https://example.com",
      codeUrl: "http://example.com",
    },
  ];

  projects.forEach((project, index) => {
    projectList.push(
      <Fader key={index}>
        <Project
          name={project.name}
          thumbnail={project.thumbnail}
          websiteUrl={project.websiteUrl}
          codeUrl={project.codeUrl}
        >
          {project.children}
        </Project>
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

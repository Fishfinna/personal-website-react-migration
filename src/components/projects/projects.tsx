import {
  Project,
  ProjectParams,
} from "../../components/projects/project/project";
import "./projects.scss";

export function Projects() {
  const projectList: any[] = [];
  const projects: ProjectParams[] = [
    {
      name: "example",
      children:
        "Example text goes here I did stuff and I did tghings and now the things are stuff and it is all good.",
      thumbnail:
        "https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      websiteUrl: "https://example.com",
      codeUrl: "http://example.com",
    },
  ];

  projects.forEach((project, index) => {
    projectList.push(
      //todo add the fader here
      <div key={project.name}>
        <Project
          name={project.name}
          thumbnail={project.thumbnail}
          websiteUrl={project.websiteUrl}
          codeUrl={project.codeUrl}
        >
          {project.children}
        </Project>
      </div>
    );
  });

  return <div className="project-list">{projectList}</div>;
}

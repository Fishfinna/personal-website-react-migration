import {
  Project,
  ProjectParams,
} from "../../components/projects/project/project";
import "./projects.scss";

export function Projects() {
  const projectList = [];
  const projects: ProjectParams[] = [
    {
      name: "example",
      thumbnail:
        "https://images.pexels.com/photos/28795942/pexels-photo-28795942/free-photo-of-elegant-bridal-bouquet-with-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      websiteUrl: "https://example.com",
      codeUrl: "http://example.com",
    },
  ];

  for (const project of projects) {
    projectList.push(project); //todo this properly
  }

  return <div></div>;
}

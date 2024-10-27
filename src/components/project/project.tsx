import "./project.scss";

interface ProjectParams {
  name: string;
  thumbnail: string;
  websiteUrl?: string;
  codeUrl?: string;
  children?: React.ReactNode;
}

export function Project(params: ProjectParams) {
  const projectImage = {
    "--project-thumbnail-url": `url(${params.thumbnail})`,
  } as React.CSSProperties;

  return (
    <div className="project-container" style={projectImage}>
      <h2>{params.name}</h2>
      <p>{params.children}</p>
      <div className="project-buttons">
        {params.codeUrl ? <a href={params.codeUrl}>code</a> : null}
        {params.websiteUrl ? <a href={params.websiteUrl}>website</a> : null}
      </div>
    </div>
  );
}

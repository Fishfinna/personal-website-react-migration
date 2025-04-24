import "./project.scss";

export interface ProjectParams {
  name: string;
  thumbnail: string;
  websiteUrl?: string;
  codeUrl?: string;
  children?: React.ReactNode;
  icon?: string;
}

export function Project(params: ProjectParams) {
  const projectImage = {
    "--project-thumbnail-url": `url(${params.thumbnail})`,
  } as React.CSSProperties;

  console.log({ ico: params.icon });

  return (
    <div className="project-item" style={projectImage}>
      <span>
        {params.icon ? (
          <img className="project-icon" src={params.icon} />
        ) : null}
        <h2>{params.name}</h2>
      </span>

      <p>{params.children}</p>
      <div className="project-buttons">
        {params.codeUrl ? (
          <a target="_blank" href={params.codeUrl}>
            code
          </a>
        ) : null}
        {params.websiteUrl ? (
          <a target="_blank" href={params.websiteUrl}>
            website
          </a>
        ) : null}
      </div>
    </div>
  );
}

interface ProjectParams {
  name: string;
  url: string;
  thumbnail: string;
  children?: React.ReactNode;
}

export function Project(params: ProjectParams) {
  return (
    <div>
      <h2>{params.name}</h2>
      <a href={params.url}>view</a>
      <img src={params.thumbnail} />
      <div>{params.children}</div>
    </div>
  );
}

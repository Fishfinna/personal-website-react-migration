
interface ProjectParams {
    name: string,
    url: string,
    thumbnail: string
    children?: React.ReactNode;
}


export function Project(params: ProjectParams) {
    return <div>
        <h2>{params.name}</h2>
        <div>{params.children}</div>
    </div>;
}
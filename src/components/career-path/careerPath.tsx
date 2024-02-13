import "./careerPath.scss";

export function CareerPath() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearList = [];

  for (let year = startYear; year <= currentYear; year++) {
    yearList.push(
      <div key={year} className="year">
        <h2>{year}</h2>
      </div>
    );
  }

  return (
    <>
      <h1>Career Path</h1>
      <div className="career-path">{yearList}</div>
    </>
  );
}

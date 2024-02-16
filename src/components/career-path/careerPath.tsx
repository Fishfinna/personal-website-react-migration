import { Fader } from "../fader/fader";
import "./careerPath.scss";

export function CareerPath() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearList = [];

  const events = {
    2021: [
      {
        Education:
          "Enrolled in the Computer Information Technology diploma at the British Columbia Institute of Technology",
      },
    ],
    2023: [
      {
        Work: "Worked as a Co-op student at RAZR Financial as a Jr.Software Developer",
      },
    ],
    2024: [
      {
        Work: "Started as a Software Developer at RAZR Financial",
      },
    ],
  };

  for (let year = startYear; year <= currentYear; year++) {
    yearList.push(
      <Fader bottom={-10}>
        <div className={`year-${year}`} key={year}>
          <h2>{year}</h2>
        </div>
      </Fader>
    );
  }

  return (
    <div className="career-path">
      <h1>My Lore</h1>
      <div>{yearList}</div>
    </div>
  );
}

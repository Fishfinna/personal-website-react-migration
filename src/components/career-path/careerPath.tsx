import { Fader } from "../fader/fader";
import "./careerPath.scss";

export function CareerPath() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearList = [];

  interface Event {
    year: number;
    type: "Education" | "Work";
    details: string;
  }

  const events: Event[] = [
    {
      year: 2021,
      type: "Education",
      details:
        "Enrolled in the Computer Information Technology diploma at the British Columbia Institute of Technology",
    },
    {
      year: 2022,
      type: "Work",
      details: "Created and Launched my first mobile app, Heli Rigger Pro",
    },
    {
      year: 2023,
      type: "Work",
      details:
        "Worked as a Co-op student at RAZR Financial as a Jr.Software Developer",
    },
    {
      year: 2023,
      type: "Education",
      details: "Graduated from BCIT with distinctions and a 94% GPA",
    },
    {
      year: 2024,
      type: "Work",
      details: "Started as a Software Developer at RAZR Financial",
    },
  ];

  for (let year = startYear; year <= currentYear; year++) {
    yearList.push(
      <Fader bottom={-10} className="center">
        <div className={`year-${year}`} key={year}>
          <h2>{year}</h2>
        </div>

        {events.map(({ year: eventYear, type, details }) => {
          if (year == eventYear) {
            return <p className={"details " + type}>{details}</p>;
          }
        })}

        <Fader className="center">
          {year != currentYear ? <div className="gap-year"></div> : null}
        </Fader>
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

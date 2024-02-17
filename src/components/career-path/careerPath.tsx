import { Fader } from "../fader/fader";
import "./careerPath.scss";

export function CareerPath() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearList = [];

  interface Event {
    year: number;
    type: "education" | "work";
    details: string;
  }

  const events: Event[] = [
    {
      year: 2021,
      type: "education",
      details:
        "Enrolled in the Computer Information Technology diploma at the British Columbia Institute of Technology",
    },
    {
      year: 2022,
      type: "work",
      details: "Created and Launched my first mobile app, Heli Rigger Pro",
    },
    {
      year: 2023,
      type: "work",
      details:
        "Worked as a Co-op student at RAZR Financial as a Jr.Software Developer",
    },
    {
      year: 2023,
      type: "education",
      details: "Graduated from BCIT with distinctions and a 94% GPA",
    },
    {
      year: 2024,
      type: "work",
      details: "Started as a Software Developer at RAZR Financial",
    },
  ];

  for (let year = startYear; year <= currentYear; year++) {
    yearList.push(
      <div>
        <Fader bottom={-10} className="center">
          <div className="node">
            <div className={`year-${year}`} key={year}>
              <h2>{year}</h2>
            </div>

            {["education", "work"].map((experience) => {
              return (
                <div className={"details " + experience}>
                  {events.map(({ year: eventYear, type, details }) => {
                    if (year == eventYear && type == experience) {
                      return (
                        <>
                          <h4>{type}</h4>
                          <p>{details}</p>
                        </>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
          {year != currentYear ? <div className="gap-year"></div> : null}
        </Fader>
      </div>
    );
  }

  return (
    <div className="career-path">
      <h1>My Lore</h1>
      <div>{yearList}</div>
    </div>
  );
}

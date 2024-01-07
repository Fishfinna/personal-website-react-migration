import "./about-me.scss";

export function AboutMe() {
  return (
    <div className="about-me">
      <div className="stats">
        <h1 className="stats-header">About</h1>
        <h2 className="stats-title">Shanti Stein-Gagnon | She/Her | Lv.20</h2>
        <div>
          <p className="stats-text">
            Hiya! I'm shanti. I'm a software developer, cartoon junkie, and
            general computer enthusiast.
          </p>
        </div>
      </div>

      <div className="my-image">
        <img src="/images/pixel-me.png"></img>
      </div>
    </div>
  );
}

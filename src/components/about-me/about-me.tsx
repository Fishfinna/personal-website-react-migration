import "./about-me.scss";

export function AboutMe() {
  return (
    <div className="about-me">
      <div className="stats">
        <h1 className="stats-header">About</h1>
        <h2 className="stats-title">Shanti Stein-Gagnon | She/Her | Lv.20</h2>
        <div>
          <p className="stats-text">
            Hiya! I'm shanti. I'm a software developer currently based out of
            vancouver.
            <br />I like music, art, and am a general computer enthusiast.
          </p>
        </div>

        <div className="stats-info">
          <ul>
            <li>
              Email:&nbsp;
              <span>Fishfinna12@gmail.com</span>
            </li>
            <li>
              Phone:&nbsp;
              <span>250-895-9055</span>
            </li>
            <li>
              GitHub:&nbsp;
              <span>
                <a href="https://github.com/Fishfinna">Fishfinna</a>
              </span>
            </li>
            <li>
              LinkedIn:&nbsp;
              <span>
                <a href="https://www.linkedin.com/in/shanti-sg/">shanti-sg</a>
              </span>
            </li>
          </ul>
          <div className="my-image">
            <img src="/images/pixel-me.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

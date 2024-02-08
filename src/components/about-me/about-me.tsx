import "./about-me.scss";
import { useRef, useEffect } from "react";

export function AboutMe() {
  const listRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const listItems = listRef.current.querySelectorAll("*");
        listItems.forEach((item: HTMLElement) => {
          const bounding = item.getBoundingClientRect();
          if (
            bounding.top >= -1000 &&
            bounding.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) +
                200
          ) {
            item.classList.add("fade-up-active");
          } else {
            item.classList.add("fade-up");
            item.classList.remove("fade-up-active");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-me">
      <div className="stats" ref={listRef}>
        <h1 className="stats-header">About</h1>
        <h2 className="stats-title">Shanti Stein-Gagnon | She/Her | Lv.20</h2>
        <div>
          <p className="stats-text">
            Hiya! I'm shanti. I'm a software engineer currently based out of
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

import { useRef, useEffect } from "react";
import "./fader.scss";

export function Fader({ children }: any) {
  const faderDiv = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (faderDiv.current) {
        const listItems = faderDiv.current.querySelectorAll("*");
        listItems.forEach((item: HTMLElement) => {
          const bounding = item.getBoundingClientRect();
          if (
            bounding.top >= -800 &&
            bounding.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) +
                400
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
    <div className="fader" ref={faderDiv}>
      {children}
    </div>
  );
}

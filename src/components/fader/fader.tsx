import { useRef, useEffect, ReactNode } from "react";
import "./fader.scss";

export function Fader({
  children,
  className = "",
  bottom = 400,
}: {
  children: ReactNode;
  className?: string;
  bottom?: number;
}) {
  const faderDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (faderDiv.current) {
        const listItems = faderDiv.current.querySelectorAll("*");
        listItems.forEach((item) => {
          const bounding = (item as HTMLElement).getBoundingClientRect();
          if (
            bounding.top >= -800 &&
            bounding.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) +
                bottom
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
  }, [bottom]);

  return (
    <div className={"fader " + className} ref={faderDiv}>
      {children}
    </div>
  );
}

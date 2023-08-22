import { useEffect, useState } from "react";
import "./scrollPrompt.scss";

export function ScrollPrompt() {
  const [haveScrolled, UpdateScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      UpdateScrolled(true);
    });
    return () =>
      window.removeEventListener("scroll", () => UpdateScrolled(false));
  }, []);

  return (
    <div className={`${haveScrolled ? "scroll fade-out" : "scroll"}`}>
      <div className="scroll-outline">
        <div className="scroll-dot"></div>
      </div>
      <p className="scroll-text">Scroll down, learn more</p>
    </div>
  );
}

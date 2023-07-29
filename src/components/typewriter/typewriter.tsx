import { ReactNode, useRef, useState, useEffect } from "react";
import "./typewriter.scss";

export function TypeWriter(props: {
  children: ReactNode;
  typewriterContent: string[];
}) {
  const typewriterRef = useRef(null);
  const txtRef = useRef("");
  const isDeletingRef = useRef(false);
  const loopNumRef = useRef(0);
  const [typewriterState, updateTypeWriter] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const i = loopNumRef.current % props.typewriterContent.length;
      const fullTxt = props.typewriterContent[i];

      if (isDeletingRef.current) {
        txtRef.current = fullTxt.substring(0, txtRef.current.length - 1);
      } else {
        txtRef.current = fullTxt.substring(0, txtRef.current.length + 1);
      }

      updateTypeWriter(txtRef.current);

      let delta = 150 - Math.random() * 100;

      if (isDeletingRef.current) {
        delta /= 2;
      }

      if (!isDeletingRef.current && txtRef.current === fullTxt) {
        delta = 500;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && txtRef.current === "") {
        isDeletingRef.current = false;
        loopNumRef.current++;
        delta = 200;
      }

      setTimeout(tick, delta);
    };

    tick();
  }, [props.typewriterContent]);

  return (
    <p ref={typewriterRef} className="typewriter">
      {props.children} {typewriterState}
    </p>
  );
}

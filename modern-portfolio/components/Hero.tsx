import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I'm Victer Phiathep.",
      "<Rutgers University Computer Science/>",
      "Check out my projects!"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span className="relative flex justify-center items-center">{text}</span>
        <Cursor cursorColor="F7AB0A" />
      </h1>
    </div>
  );
}

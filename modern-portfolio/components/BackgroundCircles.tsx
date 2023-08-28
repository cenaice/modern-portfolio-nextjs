import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />

      <div className="rounded-full border [#333333] h-[300px] w-[300px] mt-52 absolute animate-ping" />

      <div className="rounded-full border [#333333] h-[500px] w-[500px] mt-52 absolute animate-ping" />
      <div />
      <div />
    </div>
  );
};

export default BackgroundCircles;

import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
        <Image         
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/images/github-pic.jpg"
        alt="LinkedIn"
        width={200}
        height={200}/>
      </h3>
    </div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { IconBrandJavascript } from "@tabler/icons-react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiGooglecloud, SiSanity } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFirebase,
  TbBrandVscode,
} from "react-icons/tb";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Technologies I've Worked With
      </h3>

        <div className="grid grid-cols-4 gap-5 group relative cursor-pointer">
          <BiLogoJavascript className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter transition duration-300 ease-in-out " />
          <FaPython className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <SiTypescript className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <FaHtml5 className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <FaCss3Alt className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <FaJava className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <FaReact className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <TbBrandNextjs className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <TbBrandTailwind className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <FaDocker className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <BiLogoMongodb className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <TbBrandFirebase className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <SiGooglecloud className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <TbBrandVscode className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
          <FaGithub className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-16 sm:h-16 md:w-28 md:h-28 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out " />
        <SiSanity className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-16 sm:h-16 md:w-28 md:h-28 xl:w-32 filter transition duration-300 ease-in-out " />
        </div>
    </motion.div>
  );
};

export default Skills;

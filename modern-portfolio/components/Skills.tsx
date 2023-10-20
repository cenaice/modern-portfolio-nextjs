
import React from "react";
import { motion } from "framer-motion";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiGooglecloud, SiLinux, SiCsharp, SiDotnet } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFirebase,
} from "react-icons/tb";


const skillsData = [
  { name: "JavaScript", icon: BiLogoJavascript },
  { name: "Python", icon: FaPython },
  { name: "C#", icon: SiCsharp },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "Firebase", icon: TbBrandFirebase },
  { name: "Java", icon: FaJava },
  { name: "Docker", icon: FaDocker },
  { name: ".NET", icon: SiDotnet },
  { name: "Github", icon: FaGithub },
  { name: "Google Cloud Platforms", icon: SiGooglecloud },
  { name: "Linux (Ubuntu)", icon: SiLinux },
  { name: "TailwindCSS", icon: TbBrandTailwind },
];

const SkillCard: React.FC<{ name: string; Icon: any }> = ({ name, Icon }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center p-4 border border-gray-300 rounded-md space-y-2">
      <Icon size={50} style={{ color: '#d76b5f' }} />
      <span className="text-sm md:text-sm font-medium">{name}</span>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <div className="flex items-center justify-center">
          <h3 className="absolute top-20 lg:top-24 uppercase tracking-[20px] text-gray-500 xl:text-4xl text-xl ">
            Skills
          </h3>



          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 p-2 md:p-1 group relative cursor-pointer h-auto md:h-[50vh]">
            {skillsData.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} Icon={skill.icon} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};


export default Skills;


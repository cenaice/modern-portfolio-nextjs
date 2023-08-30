import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return(
  <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
    <motion.img
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-32 h-32 rounded-full md:rounded-full ml:w-[200px] xl:h-[200px] object-cover object-center"
      src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-high-quality-facebook-logo-cliparts-for-20.png"
      alt=""
    />

    <div className="px-0 md:px-5">
      <h4 className="text-2xl font-light">Software Engineer</h4>
      <p className="font-bold text-xl mt-1">Meta</p>
      <div className="flex space-x-2 my-2">
        {/* Tech Used */}
        <img
          className="h-10 w-10 rounded-full"
          src="http://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
        />
        <img
          className="h-10 w-10 rounded-full"
          src="http://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
        />
        <img
          className="h-10 w-10 rounded-full"
          src="http://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
        />
      </div>

      <p className="uppercase py-5 text-gray-300 ">
       January 1st 2023 - Present
      </p>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </li>
        <li>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </li>
        <li>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </li>
        <li>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </li>
        <li>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </li>
      </ul>
    </div>
  </article>
  )
}

export default ExperienceCard;

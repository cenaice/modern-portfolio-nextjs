import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <div
        className="bg-zinc-900 rounded-3xl overflow-clip flex flex-col
  bg-[url('https://i.redd.it/9x78p3yhho3a1.jpg')]  bg-cover bg-center"
      >
        <div className="flex flex-col px-48 py-48 bg-zinc-700 bg-opacity-50 items-center">
          <div className="flex items-center justify-center mt-[-125px] md:mt-[-175px]">
            <motion.img
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              src="/images/linked-in.jpg"
              className=" md:mb-0 flex-shrink-0 rounded-full w-36 h-36 object-cover lg:w-[100px] xl:h-[100px]"
            />
          </div>
          <div className="hidden md:block items-center justify-center font-bold text-3xl">
            <h1>Welcome to my page!</h1>
          </div>
          <div className=" md:hidden items-center justify-center font-bold text-3xl">
            <h1>Welcome!</h1>
          </div>
          <p className="mt-3 text-grey font-medium text-xs md:text-sm text-center">
            Hi! I'm Victer, a software engineer based in New Jersey. I am
            currently a senior at Rutgers University, pursuing a B.S. in
            Computer Science. I am passionate about building intuitive,
            user-friendly applications that provide users with a seamless
            experience. I am currently seeking full-time opportunities in
            software engineering. My journey here has been a long one, but I am
            excited to see where it takes me. Feel free to reach out to me at
            any time!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

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
        className=" md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h3 className=" lg:absolute lg:top-24 pt-8 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
        <p className="text-base lg:text-lg text-sm">
          Hi! I'm Victer, a software engineer based in New Jersey. I am
          currently a senior at Rutgers University, pursuing a B.S. in Computer
          Science. I am passionate about building intuitive, user-friendly
          applications that provide users with a seamless experience. I am
          currently seeking full-time opportunities in software engineering. My
          journey here has been a long one, but I am excited to see where it
          takes me. Feel free to reach out to me at any time!
        </p>
      </div>
    </motion.div>
  );
};

export default About;

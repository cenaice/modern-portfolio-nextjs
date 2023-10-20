
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
      className="h-screen flex flex-col relative text-center px-4 sm:px-10 lg:px-10 md:text-left max-w-7xl justify-evenly mx-auto items-center"
    >
      <div className="py-6 md:py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 mb-6 md:mb-0">
              <div className="rounded-full overflow-hidden border-2 border-gray-500">
                <Image
                  className="opacity-85"
                  src="/images/linked-in-removebg.png"
                  alt="image"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#c7594b] font-bold">
                Welcome to my page!
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                Hi! I'm Victer, a software engineer based in New Jersey. I am currently a senior at Rutgers University, pursuing a B.S. in Computer Science. I am passionate about building intuitive, user-friendly applications that provide users with a seamless experience. I am currently seeking full-time opportunities in software engineering. My journey here has been a long one, but I am excited to see where it takes me. Feel free to reach out to me at any time!
              </p>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
                Check out my projects below and the technologies I have worked with!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;


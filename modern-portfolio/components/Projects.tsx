import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

type Project = {
  header: string;
  title: string;
  description: string[];
  imageUrl: string;
};

function Projects({}: Props) {
  const projects: Project[] = [
    {
      header: "Project 1",
      title: "VicTube",
      description: [
        "Conceptualized and developed 'VicTube,' a YouTube clone project, utilizing TypeScript, Next.js, and Express.js, enabling users to seamlessly interact with and contribute to the platform's video-sharing capabilities.",
        "orchestrated microservices within a Docker environment, utilizing Google Cloud Run for containerized deployment, resulting in enhanced scalability, maintainability, and resource efficiency.",
        "Developed an intuitive video upload functionality, leveraging Google Cloud Storage to efficiently manage and store video content while ensuring optimal accessibility and scalability. While integrating a secure user authentication system using Firebase Auth, enabling seamless sign-in and sign-out functionality for users to access personalized features.",
      ],
      imageUrl: "https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png",
    },

    {
      header: "Project 2",
      title: "Weather Forecast Application",
      description: [
        "Developed a user-friendly weather application using TypeScript, ReactJS, and Node.js, providing real-time weather updates and forecasts to users.",
        " Integrated RESTful APIs to fetch weather data and utilized Node.js to manage server-side logic, optimizing data retrieval and ensuring smooth application performance.",
        " Leveraged TailwindCSS to efficiently style components and ensure consistent design across the application, resulting in a polished and professional user experience.",
      ],
      imageUrl:
        "https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png",
    },

    {
      header: "Project 3",
      title: "Yet Another Project",
      description: ["Coming soon..."],
      imageUrl: "https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#c7594b]/80 ">
        {projects.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            {
                <motion.img
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project.imageUrl}
                  alt=""
                  className="hidden md:block w-80"
                />}
            <div className="flex items-center justify-center">
              <h3 className="absolute top-20 lg:top-24 uppercase tracking-[20px] text-gray-500 xl:text-4xl text-xl ">
                Projects
              </h3>
            </div>
            <div className="space-y-3 px-0 md:px-10 max-w-6xl">
              <h4 className="sm:text-xs xl:text-4xl font-semibold text-center">
                <span className="underline decoration-[#c7594b]/50">
                  {" "}
                  {project.header}:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-xs xl:text-lg sm:text-left text-center md:text-left">
                {project.description}
              </p>

              <span className="flex items-center justify-center cursor-pointer">
                <SocialIcon
                  url="https://github.com/cenaice"
                  fgColor="gray"
                  bgColor="transparent"
                  style={{ height: 50, width: 50 }}
                />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#c7594b]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

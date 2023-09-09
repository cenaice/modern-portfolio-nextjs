import React from "react";
import { motion } from "framer-motion";

type Props = {};

type Project = {
  header: string;
  title: string;
  description: string;
  imageUrl: string;
};

function Projects({}: Props) {
  const projects: Project[] = [
    {
      header: "Project 1",
      title: "Weather Forecast Application",
      description:
        "Developed a user-friendly weather application using TypeScript, ReactJS, and Node.js, providing real-time weather updates and forecasts to users. Integrated RESTful APIs to fetch weather data and utilized Node.js to manage server-side logic, optimizing data retrieval and ensuring smooth application performance. I also leveraged TailwindCSS to efficiently style components and ensure consistent design across the application, resulting in a polished and professional user experience.",
      imageUrl: "https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png",
    },
    {
      header: "Project 2",
      title: "VicTube - YouTube Clone",
      description: "Conceptualized and developed 'VicTube,' a YouTube clone project, utilizing TypeScript, Next.js, and Express.js, enabling users to seamlessly interact with and contribute to the platform's video-sharing capabilities. I orchestrated microservices within a Docker environment, utilizing Google Cloud Run for containerized deployment, resulting in enhanced scalability, maintainability, and resource efficiency. Developed an intuitive video upload functionality, leveraging Google Cloud Storage to efficiently manage and store video content while ensuring optimal accessibility and scalability. While integrating a secure user authentication system using Firebase Auth, enabling seamless sign-in and sign-out functionality for users to access personalized features.",
      imageUrl: "URL for the second project's image goes here",
    },
    {
      header: "Project 3",
      title: "Yet Another Project",
      description: "Description for the third project goes here.",
      imageUrl: "URL for the third project's image goes here",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt=""
              className="w-80"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {" "}
                  {project.header}:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F6AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

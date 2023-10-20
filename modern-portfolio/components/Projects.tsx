
// NextJS Component

import Image from 'next/image';
import Head from 'next/head';
import { motion } from "framer-motion";
import { ReactElement } from 'react';

type Props = {};

type Project = {
  header: string;
  title: string;
  description: string[][];
  imageComponent: ReactElement;
}

function Projects({ }: Props) {
  const projects: Project[] = [
    {

      title: "VicTube - A YouTube Clone",
      header: "",
      description: [
        ['Technologies', "Conceptualized and developed 'VicTube,' a YouTube clone project, utilizing TypeScript, Next.js, and Express.js, enabling users to seamlessly interact with and contribute to the platform's video-sharing capabilities."],
        ['Docker', "Orchestrated microservices within a Docker environment, utilizing Google Cloud Run for containerized deployment, resulting in enhanced scalability, maintainability, and resource efficiency."],
        ['Google Cloud', "Developed an intuitive video upload functionality, leveraging Google Cloud Storage to efficiently manage and store video content while ensuring optimal accessibility and scalability. While integrating a secure user authentication system using Firebase Auth, enabling seamless sign-in and sign-out functionality for users to access personalized features."],
        ['Github', "Check out my project on Github!"]
      ],
      imageComponent: (
        <Image
          alt="..."
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
          className="w-full align-middle rounded-t-lg"
          layout="responsive"
          width={700}
          height={467}
        />)
    },

    {
      header: "Project 2",
      title: "Weather Forecast Application",
      description: [
        ['Technologies', 'Developed a user-friendly weather application using TypeScript, ReactJS, and Node.js, providing real-time weather updates and forecasts to users.'],
        ['API', "Integrated RESTful APIs to fetch weather data and utilized Node.js to manage server-side logic, optimizing data retrieval and ensuring smooth application performance.",
        ],
        ['TailWindCSS', "Developed a user-friendly weather application using TypeScript, ReactJS, and Node.js, providing real-time weather updates and forecasts to users.",
        ],
        ['Github', 'Check out my project on Github!'],

      ],
      imageComponent: (
        <Image
          alt="..."
          src="/images/weather-application.png"
          className="w-full align-middle rounded-t-lg"
          layout="responsive"
          width={700}
          height={467}
        />)

    },

    {
      header: "Introducing my innovative Tech Job Portal, a platform tailored for tech enthusiasts seeking their next career milestone. At its core, this portal is a harmonious fusion of technology and utility, designed to bridge the gap between job seekers and their dream positions in the tech realm.",
      title: "Tech Job Portal (In Development)",
      description: [
        ['API Integrations', "Seamlessly integrated with LinkedIn and Indeed APIs, the portal offers a vast array of job listings, fetching real-time data to ensure users have access to the latest opportunities."],
        ['Frontend', "Leveraging the power and flexibility of ReactJS, the portal's frontend delivers a responsive, intuitive, and user-friendly experience."],
        ['UI Componnents', "Enhanced with MantineUI, the design elements are not only aesthetically pleasing but also optimized for functionality, ensuring that users can navigate and operate with ease.",],
        ['Backend & Authentication', "Powered by Google Firebase, the platform guarantees secure data management and storage. Coupled with Google Auth, users can expect a robust and secure authentication process, ensuring their data's safety and integrity."
        ],
      ],
      imageComponent: (
        <Image
          alt="..."
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
          className="w-full align-middle rounded-t-lg"
          layout="responsive"
          width={700}
          height={467}
        />)
    }];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"

    >
      <Head>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>

      <section className="relative pt-16 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#c7594b]/80">
        <div className="flex space-x-4 container mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="w-screen flex-none w-screen snap-center flex flex-wrap items-center px-8">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                  {project.imageComponent}
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-gray-500">
                      {project.title}
                    </h4>
                    <p className="text-md font-light mt-2 text-gray-500">
                      {project.header}
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Rest of your content */}
              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-sitemap"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">{project.description[0][0]}</h6>
                        <p className="mb-4 text-blueGray-500">
                          {project.description[1][1]}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {project.description[1][0]}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {project.description[1][1]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-newspaper"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">{project.description[2][0]}</h6>
                        <p className="mb-4 text-blueGray-500">
                          {project.description[2][1]}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">{project.description[3][0]}</h6>
                        <p className="mb-4 text-blueGray-500">
                          {project.description[3][1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;


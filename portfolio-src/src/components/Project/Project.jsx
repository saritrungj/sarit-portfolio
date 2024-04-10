import React from 'react'
import bannerProject1 from '../../assets/project-1.jpg'
import { FaGithub, FaLink } from 'react-icons/fa'

const Project = () => {

  const myProject = [
    {
      id: 1,
      banner: bannerProject1,
      title: `ValoAgent`,
      description: `Develop a website valoagent By Vite, React, TailwindCSS and Valorant-Api`,
      linkGit: "https://github.com/saritrungj/mini-projects/tree/main/03-agents-valorant-with-react-and-tailwindcss",
      linkDemo: "https://saritrungj.github.io/valoagent-with-valorant-api/",
    },
    {
      id: 2,
      banner: "",
      title: `Project 2`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, praesentium provident.",
      linkGit: "#",
      linkDemo: "#",
    },
    {
      id: 3,
      banner: "",
      title: `Project 3`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, praesentium provident.",
      linkGit: "#",
      linkDemo: "#",
    },
    {
      id: 4,
      banner: "",
      title: `Project 4`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, praesentium provident.",
      linkGit: "#",
      linkDemo: "#",
    },
    {
      id: 5,
      banner: "",
      title: `Project 5`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, praesentium provident.",
      linkGit: "#",
      linkDemo: "#",
    },
    {
      id: 6,
      banner: "",
      title: `Project 6`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, praesentium provident.",
      linkGit: "#",
      linkDemo: "#",
    },
  ]

  return (
    <section id="project" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      <div className="container mx-auto flex items-center justify-center">
        <div className="px-4 py-10">
          <h1 className="my-12 text-center font-bold text-3xl md:text-4xl text-pink-500 uppercase">Projects </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            {myProject.map((project) => (
              <div
                className="flex flex-col items-center gap-2"
                key={project.id}>

                {project.banner !== ""
                  ?
                  <img className="w-[200px] h-[160px] md:w-full md:h-[180px] object-cover rounded-lg shadow-md shadow-pink-500/70 md:hover:scale-110 duration-200" src={project.banner} alt="bannerImage" />
                  :
                  <div className="w-[200px] h-[160px] md:w-full md:h-[180px] rounded-md object-cover md:hover:scale-110 duration-200 text-center bg-gradient-to-r from-pink-500 to-purple-300 border border-pink-500 shadow-md shadow-pink-500/70 flex items-center justify-center px-1">
                    <p className="font-bold text-xl drop-shadow-md">Not Avaliable</p>
                  </div>
                }

                <h3 className="mt-2 text-md md:text-xl font-semibold">{project.title}</h3>
                <p className="hidden md:block font-light text-sm text-black text-wrap text-center dark:text-gray-300">{project.description}</p>
                <div className="flex md:gap-10 gap-6 my-2">
                  <a
                    className="text-md md:text-xl hover:text-pink-500 duration-200"
                    target='_blank'
                    href={project.linkGit}><FaGithub />
                  </a>
                  <a
                    className="text-md md:text-xl hover:text-pink-500 duration-200"
                    target='_blank'
                    href={project.linkDemo}><FaLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
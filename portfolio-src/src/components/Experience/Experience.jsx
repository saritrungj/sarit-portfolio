import React from 'react'
import { MdOutlineWork, MdLocationPin } from 'react-icons/md'

const Experience = () => {

  const myExperience = [
    {
      id: 1,
      role: "IT SUPPORT",
      company: "NEP Realty and Industry PLC, Thailand",
      date: "June 2023 - Present",
      responsibility: [
        {
          id: 1,
          title: "- Monitoring and backup data",
        },
        {
          id: 2,
          title: "- Suggest and advice computer issues hardwere/software",
        },
        {
          id: 3,
          title: "- Develop Web Applications from user requirements",
        },
        {
          id: 4,
          title: "- Install/Fix Computer system and network system",
        },
      ]
    },
    {
      id: 2,
      role: "IT SUPPORT (Internship)",
      company: "Sakae Rat Tawat Suksa School, Thailand",
      date: "Dec 2022 - Apr 2023",
      responsibility: [
        {
          id: 1,
          title: "- Suggest and advice computer issues hardwere/software",
        },
        {
          id: 2,
          title: "- Install/Fix Computer system and network system",
        },
        {
          id: 3,
          title: " - Preparing events location for users",
        },
      ]
    },
    {
      id: 3,
      role: "COMPUTER TECHNICIAN (Internship)",
      company: "Comtech, Thailand",
      date: "Oct 2016 - Mar 2017",
      responsibility: [
        {
          id: 1,
          title: "- Suggest and advice computer issues hardwere/software.",
        },
        {
          id: 2,
          title: "- Install/Fix Computer system and network system",
        },
      ]
    },
  ]

  return (
    <section id="experience" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 !scroll-smooth">
      <div className="container mx-auto flex items-center justify-center">
        <div className="px-6 md:px-4 py-10">

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center font-bold text-4xl md:text-5xl text-pink-500  uppercase">Experience</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-pink-500 w-[10px] h-[10px]"></div>Present
              <div className="bg-purple-500 w-[10px] h-[10px]"></div>Former
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {myExperience.map((data) => (
              <div
                className={
                  data.id < 2
                    ? "animate-border-pink bg-pink-500 rounded-md p-5 text-black dark:text-white"
                    : "animate-border-purple bg-purple-500 rounded-md p-5 text-black dark:text-white"
                }
                key={data.id}>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-md md:text-lg font-bold flex items-center gap-2"><MdOutlineWork className="text-2xl" /> {data.role}</h3>
                    <h4 className="text-md md:text-lg font-bold flex items-center gap-2"><MdLocationPin className="text-2xl" />{data.company}</h4>
                  </div>
                  <div>
                    {data.responsibility.map((dataRespon) => (
                      <p key={dataRespon.id} className="text-sm">{dataRespon.title}</p>
                    ))}
                  </div>
                  <p className="text-black/70 dark:text-white/70 font-semibold">{data.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
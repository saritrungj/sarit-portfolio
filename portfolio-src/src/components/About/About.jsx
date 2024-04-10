import React from 'react'
import aboutImage from '../../assets/aboutme.png'

const About = () => {

  return (
    <section id="about" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 !scroll-smooth">
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:gap-x-[10rem] items-center md:justify-between">
            <div className="flex items-end">
              <img
                className="w-64 h-full rounded-xl object-contain object-center animate-transY md:ml-10"
                src={aboutImage}
                alt="aboutImage"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm md:text-lg p-5 md:w-[700px]">
              <h1 className="text-3xl md:text-4xl uppercase font-bold text-pink-500">
                About me
              </h1>
              <p className="indent-5 text-wrap">
                Hi, My name is Sarit Rungjapoh. Everyone call me
                <span className="ml-1 uppercase font-bold text-pink-500">
                  Tawan.
                </span> <br />
                I graduated from
                <span className="px-2 mx-2 bg-white dark:bg-gray-900 hover:bg-gradient-to-r from-green-500 to-yellow-400 border border-green-500 rounded-md duration-500">
                  NRRU
                </span>
                Nakhon Ratchasima Rajabhat University in Computer Science and Currently, I live in Nakhon Ratchasima, Thailand.  Am really love to develop beautiful Website with ReactJS and TailwindCSS and learn new web technology.
              </p>
              <p className="indent-5">
                In my spare time I must looking for learn something in frontend dev.
              </p>
              <div className="text-lg md:text-xl uppercase font-bold text-pink-500 flex flex-col items-start gap-2">
                <h4>Languages, Frameworks and Tools</h4>
                <img
                  className="w-1/1"
                  src="https://skillicons.dev/icons?i=bootstrap,tailwindcss,html,css,js,react,php,nodejs,mysql" />
                <img
                  className="w-2/3"
                  src="https://skillicons.dev/icons?i=npm,vite,postman,github,vscode,windows" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
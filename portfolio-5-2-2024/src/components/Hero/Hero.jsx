import React from 'react'
import bannerImage from '../../assets/hero.png'
import resumePdf from '../../assets/saritrungj.pdf'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Typing } from 'react-typing-animate'

const Hero = () => {

  const SocialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com/saritrungj27",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      link: "https://github.com/saritrungj",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/sarit-rungjapoh-48bba323b/",
      icon: <FaLinkedinIn />,
    },
  ]

  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 !scroll-smooth">
        <div className="container mx-auto h-screen flex items-center justify-center">
          <div className="px-4 pb-10 md:scale-110 w-[900px]">
            <div className="flex flex-col md:flex-row-reverse items-center justify-evenly gap-8">
              <img
                className="w-80 h-80 rounded-xl object-contain object-center animate-transY"
                src={bannerImage}
                alt="bannerImage"
              />
              <div className="flex flex-col gap-2 text-center w-full md:text-left">
                <h1 className="text-4xl font-bold uppercase md:text-7xl">Hi, I'm Sarit.</h1>
                <p className="flex items-center justify-center text-2xl font-semibold md:text-4xl md:justify-start">I'm a  <span className="text-pink-500 "><Typing
                  text={['Frontend Developer']}
                  repeat={true}
                  speed={200}
                />
                </span>
                </p>
                <p className="text-xl text-wrap">Consistency always win</p>
                <div className="flex justify-evenly md:justify-start mt-2">
                  {SocialLinks.map((social => (
                    <div className="text-4xl hover:text-pink-500 duration-200 md:mr-10"
                      key={social.id}>
                      <a href={social.link} target="_blank">{social.icon}</a>
                    </div>
                  )))}
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <a
                    className="w-48 h-10 mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-2 rounded-lg flex justify-center hover:scale-110 duration-200 text-center text-md font-bold"
                    href={resumePdf}
                    download={true}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
import { useState } from 'react'
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = ({ darkMode, setDarkMode }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleNavigation = () => {
    setOpenNavigation(!openNavigation)
  }
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 !scroll-smooth">
      <div className="container mx-auto">
        {/* LINK NAD  */}
        <div className="flex justify-between items-center mx-auto h-24 px-4">
          <h1 className="text-3xl font-bold uppercase">sarit</h1>
          <ul className="hidden md:flex uppercase">
            <li className="p-2 text-xl hover:text-pink-500 hover:scale-110 duration-200">
              <a href="#home">Home</a>
            </li>
            <li
              className="p-2 text-xl hover:text-pink-500 hover:scale-110 duration-200"
            >
              <a href="#about">About</a>
            </li>
            <li
              className="p-2 text-xl hover:text-pink-500 hover:scale-110 duration-200"
            ><a href="#project">Projects</a>
            </li>
            <li
              className="p-2 text-xl hover:text-pink-500 hover:scale-110 duration-200"
            ><a href="#experience">Experiences</a>
            </li>
            <li
              className="p-2 text-xl hover:text-pink-500 hover:scale-110 duration-200"
            ><a href="#contact">Contact</a>
            </li>
          </ul>

          {/* DARKMODE SECTION */}
          <div onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode
                ? <MdWbSunny className="text-3xl cursor-pointer" />
                : <MdNightsStay className="text-3xl cursor-pointer" />
            }
          </div>

          {/* MOBILE SCREEN NAVBAR */}
          <div className="block md:hidden" onClick={handleNavigation}>
            {
              openNavigation
                ? <AiOutlineClose className="cursor-pointer" size={30} />
                : <AiOutlineMenu className="cursor-pointer" size={30} />
            }
          </div>
          <div className={
            darkMode
              ? openNavigation
                ? "z-10 text-white fixed h-full left-0 top-0 w-[60%] border-r-8   border-r-pink-500 bg-orange-300 ease-in-out duration-500"
                : "fixed left-[-100%]"

              : openNavigation
                ? "z-10 text-black fixed h-full left-0 top-0 w-[60%] border-r-8  border-r-orange-500 bg-purple-300 ease-in-out duration-500"
                : "fixed left-[-100%]"
          }>
            <h1 className="text-3xl font-bold primary-color m-4 uppercase">sarit</h1>
            <ul className="p-8 text-2xl uppercase ">
              <li
                className="p-2 hover:text-pink-500 hover:scale-105 duration-200">
                <a onClick={() => handleNavigation(false)} href="#home">Home</a>
              </li>
              <li
                className="p-2 hover:text-pink-500 hover:scale-105 duration-200">
                <a onClick={() => handleNavigation(false)} href="#about">About</a>
              </li>
              <li
                className="p-2 hover:text-pink-500 hover:scale-105 duration-200">
                <a onClick={() => handleNavigation(false)} href="#project">Projects</a>
              </li>
              <li
                className="p-2 hover:text-pink-500 hover:scale-105 duration-200">
                <a onClick={() => handleNavigation(false)} href="#experience">Experiences</a>
              </li>
              <li
                className="p-2 text-xl hover:text-pink-500 hover:scale-110 duration-200"
              ><a onClick={() => handleNavigation(false)} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
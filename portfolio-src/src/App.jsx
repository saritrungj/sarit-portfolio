import { useState } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Project from "./components/Project/Project"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from 'react-icons/fa'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className={darkMode && "dark"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Project />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop
          smooth
          color="white"
          width="20"
          component={<FaArrowUp />}
          className="flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-400 hover:scale-110 duration-200 px-2 text-white text-2xl" />
        </div>
    </>
  )
}

export default App

import React from 'react'
import contactImage from '../../assets/contact.png'

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 !scroll-smooth">
      <div className="container mx-auto flex items-center justify-center">
        <div className="px-4 py-10">
        <h1 className="text-center font-bold text-4xl md:text-5xl text-pink-500  uppercase my-4">Contact</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="flex items-center justify-center">
              <img
                className="w-72 h-72 animate-transY"
                src={contactImage}
                alt="contactImage" />
            </div>
            <div className="my-10">
              <form action="" className="flex flex-col items-center justify-center  bg-gradient-to-tr from-pink-500 to-purple-300 text-black py-7 px-10 rounded-md shadow-lg shadow-pink-500/70">
                <div className="w-full flex flex-col gap-2">
                  <p>Name:</p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="py-2 px-10 w-full rounded-md"
                  />
                  <p>Email:</p>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="py-2 px-10 w-full rounded-md"
                  />
                  <p>Subject:</p>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="py-2 px-10 w-full rounded-md"
                  />
                  <p>Message</p>
                  <textarea className="p-3 w-full rounded-md" rows={5}></textarea>
                </div>
              </form>
              <div className="mt-7 flex items-center justify-center">
                <button className="text-md font-bold text-white bg-gradient-to-tr from-pink-500 to-purple-500 p-3 rounded-lg shadow-md shadow-pink-500/70 hover:scale-105 duration-200">Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
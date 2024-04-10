import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 dark:text-white min-h-fit flex flex-col justify-start items-center py-10 px-5 text-center">
      <p className="max-w-xl font-light text-md">&copy; {new Date().getFullYear()} SARIT RUNGJAPOH. All Rights Reserved. 💖</p>
    </footer>
  )
}

export default Footer
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface PopUpProps {
  showPopUp: boolean
}

const PopUp: React.FC<PopUpProps> = ({ showPopUp }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (showPopUp) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [showPopUp])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-xl font-bold mb-4">New Open-Source Project!</h2>
        <p className="mb-4">
          Sorry to interrupt, but I recently published an open-source software that reads your emails and adds all tasks to your calendar, locally. You can install it for free in less than 2 mins.
        </p>
        <div className="flex justify-between">
          <Link
            href="#projects"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setIsVisible(false)}
          >
            View Project
          </Link>
          <button
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setIsVisible(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopUp


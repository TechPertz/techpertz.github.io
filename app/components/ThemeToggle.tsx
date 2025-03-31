'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  defaultDark?: boolean
}

const ThemeToggle = ({ defaultDark = false }: ThemeToggleProps) => {
  const [darkMode, setDarkMode] = useState(defaultDark)

  useEffect(() => {
    if (defaultDark) {
      document.documentElement.classList.add('dark')
    }
  }, [defaultDark])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

export default ThemeToggle


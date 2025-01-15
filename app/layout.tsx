import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reet Nandy | Software Developer',
  description: 'Portfolio of Reet Nandy, a passionate software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.className} min-h-screen dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}


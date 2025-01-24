import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import DynamicFavicon from './components/DynamicFavicon'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reet Nandy | SWE+AI',
  description: 'Portfolio of Reet Nandy, a passionate software + AI developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/light.ico" /> 
      </head>
      <body className={`${jetbrainsMono.className} min-h-screen dark:bg-gray-900`}>
        <DynamicFavicon />
        {children}
      </body>
    </html>
  )
}

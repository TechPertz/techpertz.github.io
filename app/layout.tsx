import './globals.css'
import { Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'

const openSans = Open_Sans({ subsets: ['latin'] })

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
        <link rel="icon" href="/favicon.ico" /> {/* Update favicon link to use the new favicon */}
      </head>
      <body className={`${openSans.className} min-h-screen dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}


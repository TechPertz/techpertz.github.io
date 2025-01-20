import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Reet Nandy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="mailto:reet.nandy@nyu.edu" className="text-blue-500 hover:underline">
              reet.nandy@nyu.edu
            </Link>
            <Link href="tel:+15189306116" className="text-blue-500 hover:underline">
              +1 518-930-6116
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-300">
            Made with ❤️ by Reet Nandy
          </p>
          {/* <p className="text-gray-600 dark:text-gray-300">
            This site has been made using Next.js and Tailwind CSS.
          </p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer


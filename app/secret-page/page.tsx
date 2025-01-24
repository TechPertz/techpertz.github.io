import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

export default function SecretPage() {
  return (
    <>
      <Header activeSection="" />
      <div className="flex flex-col items-center justify-center min-h-screen py-12">
        <div className="neu-card p-8 rounded-corners text-center dark:bg-gray-800 dark:text-white">
          <Image
            src="/Dog.jpg?height=300&width=300"
            alt="John Doe"
            width={300}
            height={300}
            className="rounded-corners mb-6"
          />
          <p className="text-xl font-semibold mb-4">Why did u click bro? 👀👀</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Go back home 
          </Link>
        </div>
      </div>
    </>
  )
}


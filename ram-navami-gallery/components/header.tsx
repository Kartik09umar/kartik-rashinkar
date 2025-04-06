import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-700 py-6 text-white shadow-md">
      <div className="container mx-auto px-4">
        <Link href="/">
          <h1 className="text-center text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Shree Ram HD Photos
          </h1>
          <p className="mt-2 text-center text-sm md:text-base">High Quality Images for Ram Navami</p>
        </Link>
      </div>
    </header>
  )
}


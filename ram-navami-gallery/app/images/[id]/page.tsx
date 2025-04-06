import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImageById } from "@/lib/image-data"
import type { Metadata } from "next"

interface ImagePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ImagePageProps): Promise<Metadata> {
  const image = getImageById(params.id)

  return {
    title: `${image?.title || "Lord Ram Image"} | Shree Ram HD Photos`,
    description: `High quality HD image of ${image?.title || "Lord Ram"} for Ram Navami. Download this beautiful image for free.`,
    openGraph: {
      images: [image?.src || ""],
    },
  }
}

export default function ImagePage({ params }: ImagePageProps) {
  const image = getImageById(params.id)

  if (!image) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-800">Image not found</h1>
        <Link href="/" className="mt-4 inline-block text-orange-600 hover:text-orange-800">
          Return to gallery
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to gallery
        </Link>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-red-800">{image.title}</h1>

        <div className="relative mb-6 overflow-hidden rounded-lg">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.title}
            width={1200}
            height={800}
            className="mx-auto"
            priority
          />
        </div>

        <div className="flex justify-center">
          <a href={image.src} download target="_blank" rel="noopener noreferrer">
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Download className="mr-2 h-4 w-4" />
              Download Image
            </Button>
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p>Resolution: {image.resolution}</p>
          <p>Category: {image.category}</p>
        </div>
      </div>
    </div>
  )
}


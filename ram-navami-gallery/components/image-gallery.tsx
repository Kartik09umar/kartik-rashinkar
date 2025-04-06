import Link from "next/link"
import Image from "next/image"
import type { ImageType } from "@/lib/image-data"

interface ImageGalleryProps {
  images: ImageType[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => (
        <Link
          href={`/images/${image.id}`}
          key={image.id}
          className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-3">
            <h3 className="text-lg font-medium text-red-800">{image.title}</h3>
            <p className="text-sm text-gray-600">{image.category}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}


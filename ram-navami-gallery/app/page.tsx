"use client"

import { useState } from "react"
import Header from "@/components/header"
import SearchBar from "@/components/search-bar"
import ImageGallery from "@/components/image-gallery"
import { getAllImages } from "@/lib/image-data"

export default function Home() {
  const allImages = getAllImages()
  const [searchTerm, setSearchTerm] = useState("")

  // 🧠 Filter by tags or alt text
  const filteredImages = allImages.filter((image) =>
    image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <SearchBar onSearch={setSearchTerm} />
        <ImageGallery images={filteredImages} />
      </div>
    </main>
  )
}


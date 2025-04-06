export interface ImageType {
  id: string
  title: string
  src: string
  category: string
  resolution: string
  tags: string[]
  alt: string
}

const images: ImageType[] = [
  {
    id: "1",
    title: "Lord Ram with Bow",
    url: "https://cdn.magicdecor.in/com/2023/12/28160322/Ram-ji-With-Dhanush-and-Baan-Portrait-Wallpaper-for-Wall-M.jpg",
    src: "/placeholder.svg?height=800&width=600",
    category: "Ram Navami",
    resolution: "1920x1080",
    tags: ["Ram", "Bow", "Ram Navami"],
    alt: "Lord Ram holding his divine bow",
  },
  {
    id: "2",
    title: "Ram Darbar",
    src: "/placeholder.svg?height=800&width=600",
    category: "Ram Darbar",
    resolution: "1920x1080",
    tags: ["Ram Darbar", "Sita", "Laxman", "Hanuman"],
    alt: "Ram Darbar with Lord Ram, Sita, Laxman and Hanuman",
  },
  {
    id: "3",
    title: "Ram Sita Laxman",
    src: "/placeholder.svg?height=800&width=600",
    category: "Ram Navami",
    resolution: "1920x1080",
    tags: ["Ram", "Sita", "Laxman", "Family"],
    alt: "Lord Ram with Sita and Laxman",
  },
  {
    id: "4",
    title: "Lord Ram Portrait",
    src: "/placeholder.svg?height=800&width=600",
    category: "Portrait",
    resolution: "1920x1080",
    tags: ["Ram", "Portrait", "Face"],
    alt: "Portrait of Lord Ram",
  },
  {
    id: "5",
    title: "Ram Navami Celebration",
    src: "/placeholder.svg?height=800&width=600",
    category: "Festival",
    resolution: "1920x1080",
    tags: ["Ram Navami", "Celebration", "Festival"],
    alt: "Ram Navami celebration with decorations",
  },
  {
    id: "6",
    title: "Ayodhya Ram Mandir",
    src: "/placeholder.svg?height=800&width=600",
    category: "Temple",
    resolution: "1920x1080",
    tags: ["Ayodhya", "Ram Mandir", "Temple"],
    alt: "Ayodhya Ram Mandir temple",
  },
  {
    id: "7",
    title: "Ram Setu",
    src: "/placeholder.svg?height=800&width=600",
    category: "Historical",
    resolution: "1920x1080",
    tags: ["Ram Setu", "Bridge", "Historical"],
    alt: "Ram Setu bridge built by Lord Ram's army",
  },
  {
    id: "8",
    title: "Ram and Hanuman",
    src: "/placeholder.svg?height=800&width=600",
    category: "Devotional",
    resolution: "1920x1080",
    tags: ["Ram", "Hanuman", "Devotion"],
    alt: "Lord Ram with devoted Hanuman",
  },
  {
    id: "9",
    title: "Ram Navami Puja",
    src: "/placeholder.svg?height=800&width=600",
    category: "Ritual",
    resolution: "1920x1080",
    tags: ["Ram Navami", "Puja", "Ritual"],
    alt: "Ram Navami puja ritual",
  },
  {
    id: "10",
    title: "Ram Janmabhoomi",
    src: "/placeholder.svg?height=800&width=600",
    category: "Historical",
    resolution: "1920x1080",
    tags: ["Ram Janmabhoomi", "Birthplace", "Historical"],
    alt: "Ram Janmabhoomi, birthplace of Lord Ram",
  },
  {
    id: "11",
    title: "Ram Lalla",
    src: "/placeholder.svg?height=800&width=600",
    category: "Devotional",
    resolution: "1920x1080",
    tags: ["Ram Lalla", "Child Ram", "Devotional"],
    alt: "Ram Lalla, child form of Lord Ram",
  },
  {
    id: "12",
    title: "Ram Navami Wallpaper",
    src: "/placeholder.svg?height=800&width=600",
    category: "Wallpaper",
    resolution: "1920x1080",
    tags: ["Ram Navami", "Wallpaper", "Digital Art"],
    alt: "Ram Navami decorative wallpaper",
  },
]

export function getAllImages(): ImageType[] {
  return images
}

export function getImageById(id: string): ImageType | undefined {
  return images.find((image) => image.id === id)
}

export function searchImages(query: string): ImageType[] {
  const lowercaseQuery = query.toLowerCase()
  return images.filter(
    (image) =>
      image.title.toLowerCase().includes(lowercaseQuery) || image.category.toLowerCase().includes(lowercaseQuery),
  )
}


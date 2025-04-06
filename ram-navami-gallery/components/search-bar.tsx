"use client"

import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query) // 🔥 send query to parent
  }

  return (
    <form onSubmit={handleSearch} className="mb-8 mt-4">
      <div className="flex w-full max-w-3xl items-center gap-2 rounded-full bg-white p-2 shadow-md mx-auto">
        <Input
          type="text"
          placeholder="Search for Ram Navami images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button type="submit" size="icon" className="rounded-full bg-orange-600 hover:bg-orange-700">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  )
}


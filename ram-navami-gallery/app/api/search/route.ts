import { type NextRequest, NextResponse } from "next/server"
import { searchImages } from "@/lib/image-data"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  const results = searchImages(query)

  return NextResponse.json({ results })
}


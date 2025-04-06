import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {

  title: "Shree Ram HD Photos | Ram Navami Image Gallery",
  description:
    "Browse and download high-quality HD images of Lord Ram for Ram Navami celebrations. Free Ram Navami photos and wallpapers.",
  keywords: "Ram Navami, Lord Ram, HD Photos, Ram Navami Images, Ram Wallpapers, Shree Ram, jai shree ram,ayodyapti ram , 3d ram photos",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'
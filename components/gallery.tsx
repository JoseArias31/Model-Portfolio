"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Fashion editorial shoot",
      caption: "Vogue Italia, Spring 2024",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Commercial campaign",
      caption: "Luxury brand campaign",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Runway show",
      caption: "Paris Fashion Week 2023",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Beauty campaign",
      caption: "Cosmetics brand photoshoot",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Swimwear photoshoot",
      caption: "Summer collection 2024",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Lifestyle campaign",
      caption: "Lifestyle brand campaign",
    },
  ]

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedImage(image.src)}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-[300px] object-cover" />
            <p className="text-sm text-gray-500 mt-2">{image.caption}</p>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <img src={selectedImage || "/placeholder.svg"} alt="Enlarged portfolio image" className="w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}


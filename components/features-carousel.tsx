"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Palette, Camera, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    logo: "Visual Stories",
    icon: Palette,
    title: "Share your creative journey through visual narratives that captivate and inspire others.",
    image: "/digital-art-gallery-interface.jpg",
  },
  {
    logo: "Photography",
    icon: Camera,
    title: "Showcase your photography portfolio and connect with fellow photographers worldwide.",
    image: "/photography-portfolio-app.jpg",
  },
  {
    logo: "AI Art",
    icon: Sparkles,
    title: "Explore the cutting edge of AI-generated art and share your experimental creations.",
    image: "/ai-art-showcase.png",
  },
  {
    logo: "Community",
    icon: Users,
    title: "Join creative groups, collaborate on projects, and grow your artistic network.",
    image: "/creative-community-collaboration.jpg",
  },
]

export function FeaturesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 340
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Creative Spaces</h2>
          <p className="mt-2 text-gray-600">Discover different ways to express and share your art</p>
        </div>
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {features.map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#2563eb]" : "bg-gray-300"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  logo,
  icon: Icon,
  title,
  image,
}: {
  logo: string
  icon: React.ElementType
  title: string
  image: string
}) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 snap-start">
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl">{logo}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{title}</p>
      </div>
      <div className="px-4 pb-4">
        <img src={image || "/placeholder.svg"} alt={logo} className="w-full h-48 object-cover rounded-xl" />
      </div>
    </div>
  )
}

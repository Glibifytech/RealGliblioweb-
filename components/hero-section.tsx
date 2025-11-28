import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/phone-mockup"
import { Palette, Camera, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Palette className="w-10 h-10 text-gray-700" />
              <Camera className="w-10 h-10 text-gray-700" />
              <Sparkles className="w-10 h-10 text-orange-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              A place you can create
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              A <span className="text-[#2563eb] font-medium">visual-first social space</span> for{" "}
              <span className="font-semibold text-gray-900">artists, designers, and creative minds</span> to share work
              and find inspiration on Gliblio.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">
                <Palette className="w-4 h-4" />
                Visual Stories
              </span>
              <span className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">
                <Camera className="w-4 h-4" />
                Photography
              </span>
              <span className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 text-orange-400" />
                AI Art
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full px-8 py-6 text-base font-semibold">
                Start Creating
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-gray-300 bg-transparent"
              >
                Explore Art
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function AppStoreBadge() {
  return (
    <a href="https://apps.apple.com/kz/app/gliblio/id6755159466" className="inline-block">
      <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] leading-tight">Download on the</div>
          <div className="text-sm font-semibold leading-tight">App Store</div>
        </div>
      </div>
    </a>
  )
}

function GooglePlayBadge() {
  return (
    <a href="https://play.google.com/store/apps/details?id=com.gliblio.app" className="inline-block">
      <div className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.79.64 1.18 0 .4-.23.86-.64 1.18l-2.15 1.23-2.55-2.55 2.55-2.55 2.15 1.51zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] leading-tight">GET IT ON</div>
          <div className="text-sm font-semibold leading-tight">Google Play</div>
        </div>
      </div>
    </a>
  )
}

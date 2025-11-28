import Image from "next/image"

export function PhoneMockup() {
  return (
    <div className="relative">
      {/* Floating labels */}
      <div className="absolute -left-8 top-8 z-10">
        <FloatingLabel text="Share & Discover" highlight="Creative Work" position="left" />
      </div>
      <div className="absolute -right-4 top-1/3 z-10">
        <FloatingLabel text="Connect With" highlight="Fellow Artists" position="right" />
      </div>
      <div className="absolute -left-4 bottom-1/3 z-10">
        <FloatingLabel text="Get Inspired" highlight="Every Day" position="left" />
      </div>

      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] sm:w-[320px]">
        <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden">
            <Image
              src="/images/gliblio-feed.png"
              alt="Gliblio App Feed"
              width={320}
              height={640}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500">
        <path d="M 50 80 Q 120 60 160 100" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <path d="M 350 180 Q 300 160 280 200" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <path d="M 80 320 Q 130 300 160 340" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      </svg>
    </div>
  )
}

function FloatingLabel({ text, highlight, position }: { text: string; highlight: string; position: "left" | "right" }) {
  return (
    <div
      className={`bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100 whitespace-nowrap ${position === "right" ? "text-right" : "text-left"}`}
    >
      <div className="text-sm font-medium text-gray-900">{text}</div>
      <div className="text-sm font-semibold text-[#2563eb]">{highlight}</div>
    </div>
  )
}

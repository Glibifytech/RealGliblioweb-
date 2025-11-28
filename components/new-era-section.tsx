import Image from "next/image"

export function NewEraSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#2563eb] font-medium text-sm uppercase tracking-wide">Welcome to Gliblio</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
            The <span className="text-[#2563eb]">Creative Hub</span> for Visual Storytellers
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
            {
              "We're building a visual-first social space where artists, designers, and creative minds come together to share their work and find inspiration. Whether you're into photography, digital art, AI-generated creations, or visual storytelling—Gliblio is your canvas. Connect with fellow creators, showcase your portfolio, and be part of a community that celebrates creativity in all its forms."
            }
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto">
          <Image
            src="/images/gliblio-landing.png"
            alt="Creative community workspace"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

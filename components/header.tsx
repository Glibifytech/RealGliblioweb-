import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GliblioLogo } from "@/components/gliblio-logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <GliblioLogo className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Explore Art
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                About Gliblio
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                For Creators
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Join Gliblio
            </Link>
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full px-6">Log in</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

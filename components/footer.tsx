import Link from "next/link"
import { GliblioLogo } from "@/components/gliblio-logo"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <GliblioLogo className="h-8 w-auto mb-4" />
            <p className="text-sm text-gray-500">A visual-first social space for creatives.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Creators</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Artist Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Inspiration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="https://youthful-truffle-5c7.notion.site/2698dac6fc58803a8042f62628105fd5?source=copy_link" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="https://youthful-truffle-5c7.notion.site/Gliblio-2ad8dac6fc588013bdbee0cb07efeb60?source=copy_link" className="text-sm text-gray-500 hover:text-gray-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          © 2025 Gliblio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

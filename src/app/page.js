import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-bg-pic bg-cover">
      <nav className="bg-black text-white rounded-full p-4 shadow-md fixed top-4 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">Envialink</div>
          <div className="hidden md:flex">
            <ul className="flex space-x-6 list-none">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 transition duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            {" "}
            {/* Hamburger menu for mobile */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-4 py-2">
              Menu
            </Button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-4 py-2 hidden md:block">
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}

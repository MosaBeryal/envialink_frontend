"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Section */}
      <div className="relative w-full min-h-[600px] bg-center bg-cover bg-[url('/bg.png')]">
        {/* Blue Blur Overlay */}
        <div className="absolute inset-0 bg-[#2f407c] bg-opacity-40 backdrop-blur-xs"></div>

        {/* Navbar */}
        <nav className="relative z-50 bg-white text-black rounded-full p-4 shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-7xl">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-semibold text-[#2048D6]">
              Envialink
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
              <ul className="flex space-x-8 list-none">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#2048D6] transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#2048D6] transition duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#2048D6] transition duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#2048D6] transition duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="focus:outline-none"
              >
                {/* Toggle Icon */}
                {isNavOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isNavOpen && (
            <div className="md:hidden mt-4">
              <ul className="space-y-4 text-center">
                <li>
                  <Link href="/" className="block text-lg hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block text-lg hover:text-gray-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block text-lg hover:text-gray-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-lg hover:text-gray-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-8 h-full">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
            International Parcel Forwarding Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Buy Products in the USA, China, and Europe (including popular
            countries like the UK, Austria, Australia, Germany, France), We'll
            Ship Them to Mozambique, Malawi, and Zimbabwe.
          </p>
          <Button className="bg-white text-[#2048D6] rounded-full px-6 py-3 flex items-center space-x-4">
            <span>SignUp</span>
            <ArrowRight
              size={16}
              className="bg-[#2048D6] text-white p-1 rounded-full"
            />
          </Button>
        </div>
      </div>

      {/* How it works */}
      <section className="py-16 bg-[#e1e0f8] w-full h-[600px] mt-10 flex justify-between px-10">
        {/* Left Section */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-3xl font-bold text-[#2048D6] mb-4">
            How it works
          </h1>

          {/* Step 1 */}
          <div className="flex items-center space-x-3">
            <span>
              <Check
                size={20}
                className="text-white bg-[#2048D6] rounded-full"
              />
            </span>
            <p className="text-lg">
              Create an Account – Sign up with Envialink to receive your
              shipping addresses in the US, UK, and Europe.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex items-center space-x-3">
            <span>
              <Check
                size={20}
                className="text-white bg-[#2048D6] rounded-full"
              />
            </span>
            <p className="text-lg">
              Shop Online – Purchase items from online stores and ship them to
              your Envialink addresses.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex items-center space-x-3">
            <span>
              <Check
                size={20}
                className="text-white bg-[#2048D6] rounded-full"
              />
            </span>
            <p className="text-lg">
              Parcel Forwarding – Once your items arrive at our warehouse, we’ll
              send them to your door.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex items-center space-x-3">
            <span>
              <Check
                size={20}
                className="text-white bg-[#2048D6] rounded-full"
              />
            </span>
            <p className="text-lg">
              Consolidate Orders – Save on shipping by consolidating multiple
              orders into one package.
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex items-center space-x-3">
            <span>
              <Check
                size={20}
                className="text-white bg-[#2048D6] rounded-full"
              />
            </span>
            <p className="text-lg">
              Track Your Orders – Stay updated with real-time tracking until
              your parcel arrives.
            </p>
          </div>
          {/* button */}
          <div className="flex items-center space-x-3">
            <Button className="text-white bg-[#2048D6] rounded-full px-6 py-3 flex justify-between items-center space-x-4 h-14 w-52">
              <span>Learn More</span>
              <ArrowRight
                size={16}
                className="text-[#2048D6] bg-white p-1 rounded-full"
              />
            </Button>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="flex space-x-5">
          <div>
            <Image
              src="/signup.png"
              width={200}
              height={500}
              alt="Process image 1"
              className="mb-5"
            />
            <Image
              src="/box.png"
              width={200}
              height={500}
              alt="Process image 2"
            />
          </div>
          <div className="mt-5">
            <Image
              src="/mobile.png"
              width={200}
              height={500}
              alt="Process image 3"
              className="mb-5"
            />
            <Image
              src="/boys.png"
              width={200}
              height={500}
              alt="Process image 4"
            />
          </div>
        </div>
      </section>

      {/* Brands */}

      <section className="px-4 py-8">
        <h1 className="text-center text-3xl font-bold mb-4">
          Popular US, Europe, and China Brands You Will Love
        </h1>
        <p className="text-center text-lg mb-8">
          Envialink makes it easy for you to shop U.S, Europe, Canada, and
          receive your packages in our secure warehouse.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/** First Column Group */}
          <div className="flex flex-col gap-4 items-center">
            <div>
              <Image
                src="/amazon.png"
                width={200}
                height={500}
                alt="Amazon"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Amazon</p>
            </div>
            <div>
              <Image
                src="/taobao.png"
                width={200}
                height={500}
                alt="Taobao"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Taobao</p>
            </div>
          </div>

          {/** Second Column Group */}
          <div className="flex flex-col gap-4 items-center mt-20">
            <div>
              <Image
                src="/bohoo.png"
                width={200}
                height={500}
                alt="Boohoo"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Boohoo</p>
            </div>
            <div>
              <Image
                src="/wallmart.png"
                width={200}
                height={500}
                alt="Walmart"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Walmart</p>
            </div>
          </div>

          {/** Third Column Group */}
          <div className="flex flex-col gap-4 items-center">
            <div>
              <Image
                src="/pinduoduo.png"
                width={200}
                height={500}
                alt="Pinduoduo"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Pinduoduo</p>
            </div>
            <div>
              <Image
                src="/shein.png"
                width={200}
                height={500}
                alt="Shein"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Shein</p>
            </div>
          </div>

          {/** Fourth Column Group */}
          <div className="flex flex-col gap-4 items-center mt-20">
            <div>
              <Image
                src="/asos.png"
                width={200}
                height={500}
                alt="ASOS"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">ASOS</p>
            </div>
            <div>
              <Image
                src="/ebay.png"
                width={200}
                height={500}
                alt="eBay"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">eBay</p>
            </div>
          </div>

          {/** Fifth Column Group */}
          <div className="flex flex-col gap-4 items-center">
            <div>
              <Image
                src="/alibaba.png"
                width={200}
                height={500}
                alt="Alibaba"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Alibaba</p>
            </div>
            <div>
              <Image
                src="/aliexpress.png"
                width={200}
                height={500}
                alt="AliExpress"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">AliExpress</p>
            </div>
          </div>

          {/** Sixth Column Group */}
          <div className="flex flex-col gap-4 items-center mt-20">
            <div>
              <Image
                src="/tesco.png"
                width={200}
                height={500}
                alt="Tesco"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Tesco</p>
            </div>
            <div>
              <Image
                src="/bohoo.png"
                width={200}
                height={500}
                alt="Boohoo"
                className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <p className="text-center mt-2 font-semibold">Boohoo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

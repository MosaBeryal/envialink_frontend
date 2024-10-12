"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Layers,
  Package,
  SeparatorHorizontal,
  ShoppingBag,
  Truck,
  UserPlus,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Background Section */}
      <div className="relative w-full min-h-[600px] bg-center bg-cover bg-[url('/bg.png')]">
        {/* Blue Blur Overlay */}
        <div className="absolute inset-0 bg-[#101113] bg-opacity-40 backdrop-blur-[2px]"></div>

        {/* Navbar */}
        <nav className="relative z-50 bg-white text-black rounded-sm md:rounded-full p-4 shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-7xl">
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
            <div className="transition-all duration-500 ease-in-out transform overflow-hidden">
              <ul className="space-y-4 text-center mt-4">
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4 h-auto min-h-[500px] lg:h-[600px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-4">
            International Parcel Forwarding Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6">
            Buy products from the USA, China, Europe, and we’ll ship them to
            Mozambique, Malawi, and Zimbabwe.
          </p>
          <button className="bg-white text-[#2048D6] rounded-full px-6 py-3 lg:py-4 flex items-center space-x-4 w-auto lg:w-40 hover:bg-[#2048D6] hover:text-white transition-all duration-300">
            <span>Sign In</span>
            <ArrowRight
              size={16}
              className="bg-[#2048D6] text-white p-1 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* How it works */}
      <section className="py-16 bg-white w-full">
        {/* Left Section - Steps */}
        <div className="h-auto mt-10 flex flex-col lg:flex-row justify-between px-5 lg:px-10 container mx-auto">
          <div className="flex-1 space-y-8 lg:max-w-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              How It Works
            </h1>

            {/* Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <UserPlus className="text-blue-500 w-6 h-6" />
                </div>
                <p className="text-lg text-gray-700">
                  <strong>Create an Account</strong> – Sign up with Envialink to
                  receive your shipping addresses in the US, UK, and Europe.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <ShoppingBag className="text-blue-500 w-6 h-6" />
                </div>
                <p className="text-lg text-gray-700">
                  <strong>Shop Online</strong> – Purchase items from online
                  stores and ship them to your Envialink addresses.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Package className="text-blue-500 w-6 h-6" />
                </div>
                <p className="text-lg text-gray-700">
                  <strong>Parcel Forwarding</strong> – Once your items arrive at
                  our warehouse, we’ll send them to your door.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Layers className="text-blue-500 w-6 h-6" />
                </div>
                <p className="text-lg text-gray-700">
                  <strong>Consolidate Orders</strong> – Save on shipping by
                  consolidating multiple orders into one package.
                </p>
              </div>

              {/* Step 5 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Truck className="text-blue-500 w-6 h-6" />
                </div>
                <p className="text-lg text-gray-700">
                  <strong>Track Your Orders</strong> – Stay updated with
                  real-time tracking until your parcel arrives.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button className="text-white bg-blue-500 rounded-full px-8 py-3 flex items-center space-x-3 transition duration-300 hover:bg-blue-600">
                <span className="text-lg">Learn More</span>
                <ArrowRight
                  size={16}
                  className="text-blue-500 bg-white p-1 rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex-1 mt-10 lg:mt-0 flex justify-center items-center">
            <Image
              width={600}
              height={600}
              src="/howwork.png"
              alt="Process flow illustration"
              className="max-w-lg w-full"
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
                height={200}
                alt="Amazon"
                className="rounded-lg transition-transform transform hover:scale-105 w-32 h-32"
              />
              <p className="text-center mt-2 font-semibold">Amazon</p>
            </div>
            <div>
              <Image
                src="/taobao.png"
                width={200}
                height={200}
                alt="Taobao"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
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
                height={200}
                alt="Boohoo"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
              />
              <p className="text-center mt-2 font-semibold">Boohoo</p>
            </div>
            <div>
              <Image
                src="/wallmart.png"
                width={200}
                height={200}
                alt="Walmart"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
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
                height={200}
                alt="Pinduoduo"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
              />
              <p className="text-center mt-2 font-semibold">Pinduoduo</p>
            </div>
            <div>
              <Image
                src="/shein.png"
                width={200}
                height={200}
                alt="Shein"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
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
                height={200}
                alt="ASOS"
                className="rounded-lg  transition-transform transform hover:scale-105  w-32 h-32"
              />
              <p className="text-center mt-2 font-semibold">ASOS</p>
            </div>
            <div>
              <Image
                src="/ebay.png"
                width={200}
                height={200}
                alt="eBay"
                className="rounded-lg  transition-transform transform hover:scale-105  w-32 h-32"
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
                height={200}
                alt="Alibaba"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
              />
              <p className="text-center mt-2 font-semibold">Alibaba</p>
            </div>
            <div>
              <Image
                src="/aliexpress.png"
                width={200}
                height={200}
                alt="AliExpress"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
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
                height={200}
                alt="Tesco"
                className="rounded-lg transition-transform transform hover:scale-105  w-32 h-32"
              />
              <p className="text-center mt-2 font-semibold">Tesco</p>
            </div>
            <div>
              <Image
                src="/bohoo.png"
                width={200}
                height={200}
                alt="Boohoo"
                className="rounded-lg  transition-transform transform hover:scale-105  w-32 h-32"
              />
              <p className="text-center mt-2 font-semibold">Boohoo</p>
            </div>
          </div>
        </div>
      </section>

      {/* why choose evalink section */}
      <section className="flex flex-col items-center px-6 lg:px-16 py-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Why Choose Envialink?
        </h1>

        <p className="text-lg text-gray-600 mb-8 text-center">
          Envialink helps you save money and simplifies your international
          shopping experience. Discover the benefits below!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-3xl">
          {[
            {
              id: 1,
              title: "No USA Sales Tax",
              description:
                "Shop from US stores without worrying about additional sales tax, saving you even more on your purchases.",
            },
            {
              id: 2,
              title: "No Membership Fees",
              description:
                "Enjoy our services with no upfront costs or recurring fees—only pay when you ship.",
            },
            {
              id: 3,
              title: "Free 30-Day Storage",
              description:
                "Manage your shipments at your own pace with 30 days of free storage.",
            },
            {
              id: 4,
              title: "Buy For Me Service",
              description:
                "Use our Buy For Me service to purchase your favorite products with local mobile money methods.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-6 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-semibold mb-4">
                {`0${item.id}`}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-3 transition duration-300">
          Learn More
        </button>
      </section>

      {/* buy for me section */}
      <section className="flex justify-center items-center py-12">
        <div className="text-center w-full px-4 md:px-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            Buy For Me
          </h1>
          <div className="flex justify-center">
            <Image
              src="/buy.png"
              width={700}
              height={400}
              alt="Tesco"
              className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* slider */}
      <section className="w-full flex flex-col items-center py-16 bg-[#0558E226]">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
          What Our Clients Say About Us
        </h1>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-6xl px-4 sm:px-8"
        >
          <CarouselContent className="flex space-x-6">
            {/* Card 1 */}
            <CarouselItem className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-500">
                <div className="flex justify-center mt-6">
                  <Image
                    src="/men_3.png"
                    alt="Tinashe Muzvineyi"
                    width={90}
                    height={90}
                    className="rounded-full border-4 border-blue-400"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800">
                    Tinashe Muzvineyi
                  </h3>
                  <p className="text-center text-gray-500 text-sm">Zimbabwe</p>
                  <p className="text-gray-600 mt-4 text-center text-sm md:text-base leading-relaxed">
                    “I’m so glad to know about Envialink! Buying my phones
                    directly from Apple in the USA used to be expensive, but now
                    shipping is only $50 to Zimbabwe. No more hustles to go
                    through Zimra—they handle everything on my behalf!”
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Card 2 */}
            <CarouselItem className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-500">
                <div className="flex justify-center mt-6">
                  <Image
                    src="/men_1.png"
                    alt="Domingos João Mondlane"
                    width={90}
                    height={90}
                    className="rounded-full border-4 border-blue-400"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800">
                    Domingos João Mondlane
                  </h3>
                  <p className="text-center text-gray-500 text-sm">
                    Mozambique
                  </p>
                  <p className="text-gray-600 mt-4 text-center text-sm md:text-base leading-relaxed">
                    “Sempre tive dificuldade em comprar na Amazon e eBay na
                    América, já que não enviam para Moçambique. Fiquei muito
                    feliz quando descobri a Envialink agora posso comprar
                    facilmente e economizar!”
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Card 3 */}
            <CarouselItem className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-500">
                <div className="flex justify-center mt-6">
                  <Image
                    src="/men_2.png"
                    alt="Michael Nkwazi Dulani"
                    width={90}
                    height={90}
                    className="rounded-full border-4 border-blue-400"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800">
                    Michael Nkwazi Dulani
                  </h3>
                  <p className="text-center text-gray-500 text-sm">Malawi</p>
                  <p className="text-gray-600 mt-4 text-center text-sm md:text-base leading-relaxed">
                    “I love buying products from the USA and UK, but my bank
                    often wouldn’t accept my purchases. With Envialink, I can
                    shop anywhere online using Airtel Money and Mpamba, and the
                    shipping costs are low!”
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-8 space-x-2 hidden md:flex">
            <CarouselPrevious className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300" />
            <CarouselNext className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300" />
          </div>
        </Carousel>
      </section>

      {/* frequently asked questions */}
      <section className="py-10 px-5 bg-gray-50">
        <div className="text-center mb-10">
          <h1 className="font-semibold text-3xl text-gray-800 mb-4 font-inter">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-500">
            Can’t find the answer here?{" "}
            <a href="/help-center" className="text-blue-600 underline">
              Check out our Help Center
            </a>
            .
          </p>
        </div>

        <div className="container mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors text-start">
                What is Envialink?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-2">
                Envialink provides international parcel forwarding services from
                the USA, UK, and China to Africa, helping customers shop from
                international stores and ship their items easily.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors text-start">
                How does Envialink help save money?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-2">
                Envialink offers services such as no USA sales tax, free 30-day
                storage, and no membership fees, making international shipping
                more affordable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors text-start">
                How do I track my shipment?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-2">
                After your package is shipped, you can track its status using
                the tracking number provided in your dashboard or via email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors text-start">
                What payment methods are accepted?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-2">
                Envialink accepts multiple payment methods, including credit
                cards, PayPal, and local mobile money solutions in Africa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors text-start">
                What happens if my package is delayed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 mt-2">
                If your package is delayed, our customer service team will help
                you resolve the issue and ensure your parcel is delivered as
                soon as possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* footer  section */}

      <section className="flex flex-col bg-gray-50 py-10 px-5">
        {/* First Section: Join Envialink */}
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10  space-y-8 md:space-y-0 mb-10 mx-auto container">
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-3xl font-bold text-black mb-4">
              Join Envialink Today
            </h1>
            <p className="text-gray-700 mb-6">
              Buy products in the USA, China, and Europe (including popular
              countries like the UK, Austria, Australia, Germany, France). We'll
              ship them to Mozambique, Malawi, and Zimbabwe.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="text-white bg-[#2048D6] rounded-full px-6 py-3 flex justify-center items-center space-x-4 h-14 w-52">
                <span>Learn More</span>
                <ArrowRight
                  size={16}
                  className="text-[#2048D6] bg-white p-1 rounded-full"
                />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/box_footer.png"
              alt="Domingos João Mondlane"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Section: Footer Navigation */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-300">
          {/* Logo */}
          <div className="text-2xl font-semibold text-[#2048D6] mb-4 md:mb-0">
            Envialink
          </div>

          {/* Footer Navigation */}
          <ul className="flex space-x-8 list-none text-gray-700">
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

        {/* Bottom Section: Copyright */}
        <div className="container mx-auto text-center py-4 text-gray-500 text-sm">
          <p>All Rights Reserved &copy; 2024 Envialink</p>
        </div>
      </section>
    </div>
  );
}

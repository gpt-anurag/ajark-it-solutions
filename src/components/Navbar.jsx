"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [onMouseOverTrainings, setOnMouseOverTrainings] = useState(false);
  const [onMouseOverCV, setOnMouseOverCV] = useState(false);
  const path = usePathname();

  return (
    <div className="absolute top-0 z-10 w-full text-xl font-semibold text-white">
      <div className="mx-auto my-0 flex max-w-screen-2xl justify-between px-8 py-8 md:w-11/12 md:px-0 md:text-xl 2xl:w-4/5">
        <Link href="/" className="text-4xl">
          <Image src={"/logo.png"} height={200} width={200} alt="logo" />
        </Link>

        {/* NavBar */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li className={`cursor-pointer ${path === "/" && "border-b-2"}`}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={`cursor-pointer`}>
              <Link href={"/#about-section"}>About</Link>
            </li>
            <li className="group relative">
              <div className="mb-4 flex items-center gap-2">
                <Link href={"/services?q=0"} className="">
                  All Services
                </Link>
                <FaAngleDown />
              </div>
              <ul className="absolute flex hidden w-max flex-col gap-4 rounded bg-white p-4 text-black/50 group-hover:block">
                <li className="cursor-pointer pb-4 hover:text-black">
                  <div
                    className="relative"
                    onMouseEnter={() => setOnMouseOverTrainings(true)}
                    onMouseLeave={() => setOnMouseOverTrainings(false)}
                  >
                    <p>Trainings</p>
                    {onMouseOverTrainings && (
                      <ul className="absolute top-0 z-10 flex hidden w-max translate-x-32 flex-col gap-4 rounded border bg-white p-4 text-black/50 group-hover:block">
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/services?q=0"}>Soft Skills</Link>
                        </li>
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/services?q=1"}>FrontEnd</Link>
                        </li>
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/services?q=2"}>BackEnd</Link>
                        </li>
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/services?q=3"}>Cloud</Link>
                        </li>
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/services?q=4"}>Testing</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <li className="cursor-pointer pb-4 hover:text-black">
                  <div
                    className="relative"
                    onMouseEnter={() => setOnMouseOverCV(true)}
                    onMouseLeave={() => setOnMouseOverCV(false)}
                  >
                    <Link href={"/resume"}>Resume & CV&apos;s</Link>
                    {onMouseOverCV && (
                      <ul className="absolute top-0 z-10 flex hidden w-max translate-x-32 flex-col gap-4 rounded border bg-white p-4 text-black/50 group-hover:block">
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/resume"}>CV Review</Link>
                        </li>
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/resume"}>CV Building</Link>
                        </li>
                        <li className="cursor-pointer p-2 hover:text-black">
                          <Link href={"/resume"}>Abroad CV Building</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <li className="cursor-pointer pb-4 hover:text-black">
                  <Link href={"/career-consulting"}>Career Consultants</Link>
                </li>
                <li className="cursor-pointer pb-4 hover:text-black">
                  <Link href={"/staffing-outsourcing"}>
                    Staffing & Oursourcing
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Button
                className="bg-brand/80 text-xl font-semibold text-green-950 hover:bg-brand"
                asChild
              >
                <Link href={"/#contact-section"} scroll={true}>
                  Contact Us
                </Link>
              </Button>
            </li>
          </ul>
        </nav>

        <div className="cursor-pointer text-4xl md:hidden">
          {isSidebarOpen ? (
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ) : (
            <GiHamburgerMenu onClick={() => setIsSidebarOpen(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

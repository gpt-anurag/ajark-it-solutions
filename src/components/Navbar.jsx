"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [onMouseOverEl, setOnMouseOverEl] = useState(false);

  return (
    <div className="absolute z-10 w-full text-xl font-semibold text-white">
      <div className="mx-auto my-0 flex max-w-screen-2xl justify-between px-8 py-8 md:w-11/12 md:px-0 md:text-xl 2xl:w-4/5">
        <Link href="/" className="text-4xl">
          AJARK
        </Link>

        {/* NavBar */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/#about-section"}>About</Link>
            </li>
            <li
              className="group relative"
              onMouseLeave={() => setOnMouseOverEl(false)}
            >
              <Link href={"/"}>All Services</Link>
              <ul className="absolute flex hidden w-max flex-col gap-4 rounded bg-white p-4 text-black/50 group-hover:block">
                <li className="cursor-pointer hover:text-black">
                  <div
                    className="relative"
                    onMouseEnter={() => setOnMouseOverEl(true)}
                    // onMouseLeave={() => setOnMouseOverEl(false)}
                  >
                    <p>Trainings</p>
                    {onMouseOverEl && (
                      <ul className="absolute top-10 flex hidden w-max -translate-x-36 flex-col gap-4 rounded bg-white p-4 text-black/50 group-hover:block">
                        <li className="cursor-pointer hover:text-black">
                          Soft Skills
                        </li>
                        <li className="cursor-pointer hover:text-black">
                          FrontEnd
                        </li>
                        <li className="cursor-pointer hover:text-black">
                          BackEnd
                        </li>
                        <li className="cursor-pointer hover:text-black">
                          FullStack
                        </li>
                        <li className="cursor-pointer hover:text-black">
                          Testing
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <li className="cursor-pointer hover:text-black">
                  Resume & CV's
                </li>
                <li className="cursor-pointer hover:text-black">
                  Career Consultants
                </li>
                <li className="cursor-pointer hover:text-black">Staffing</li>
                <li className="cursor-pointer hover:text-black">Outsourcing</li>
              </ul>
            </li>
            <li>
              <Button className="bg-brand font-semibold text-green-950" asChild>
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
            <GiHamburgerMenu onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

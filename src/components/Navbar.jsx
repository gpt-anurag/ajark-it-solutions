"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  useEffect(() => {
    console.log(triggerRef);
    if (triggerRef.current) {
      const { top, left, height } = triggerRef.current.getBoundingClientRect();
      setPosition({ top, left });
    }
  }, []);

  return (
<<<<<<< HEAD
    <>
      <div
        className="absolute z-50 h-10 w-10 bg-pink-600"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      ></div>
      <div className="absolute z-10 w-full text-xl font-semibold text-white">
        <div className="mx-auto my-0 flex justify-between px-4 py-8 md:w-2/3 md:px-0 md:2xl:w-4/5">
          <Link href="/" className="text-4xl">
            AJARK
          </Link>
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList className="justify-end gap-10">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href={"/"}>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href={"/#about-section"} scroll={true}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="static">
                <NavigationMenuTrigger className="flex gap-2" ref={triggerRef}>
                  All Services
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="absolute"
                  style={{
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                  }}
                >
                  <ul className="fixed flex flex-col gap-4 rounded bg-white p-4 text-black/50">
                    <li className="cursor-pointer hover:text-black">
                      Trainings
                    </li>
                    <li className="cursor-pointer hover:text-black">
                      Resume & CV&apos;s
                    </li>
                    <li className="cursor-pointer hover:text-black">
                      Career Consultants
                    </li>
                    <li className="cursor-pointer hover:text-black">
                      Staffing
                    </li>
                    <li className="cursor-pointer hover:text-black">
                      Outsourcing
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <Button className="bg-brand font-semibold text-green-950" asChild>
                <Link href={"/#contact-section"} scroll={true}>
                  Contact Us
                </Link>
              </Button>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="cursor-pointer text-4xl sm:hidden">
            {isSidebarOpen ? (
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              />
            )}
          </div>
=======
    <div className="absolute z-10 w-full text-xl font-semibold text-white">
      <div className="mx-auto my-0 flex justify-between px-4 py-8 md:w-2/3 md:px-0 md:2xl:w-4/5">
        <Link href="/" className="text-4xl">
          AJARK
        </Link>
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="justify-end gap-10">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={"/"}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={"/#about-section"} scroll={true}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="flex gap-2" ref={triggerRef}>
                All Services
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="relative"
                style={{
                  position: "absolute",
                  top: `${position.top}px`,
                  left: `${position.left}px`,
                }}
              >
                <ul className="fixed flex flex-col gap-4 rounded bg-white p-4 text-black/50">
                  <li className="cursor-pointer hover:text-black">Trainings</li>
                  <li className="cursor-pointer hover:text-black">
                    Resume & CV&apos;s
                  </li>
                  <li className="cursor-pointer hover:text-black">
                    Career Consultants
                  </li>
                  <li className="cursor-pointer hover:text-black">Staffing</li>
                  <li className="cursor-pointer hover:text-black">
                    Outsourcing
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Button className="bg-brand font-semibold text-green-950" asChild>
              <Link href={"/#contact-section"} scroll={true}>
                Contact Us
              </Link>
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="cursor-pointer text-4xl sm:hidden">
          {isSidebarOpen ? (
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ) : (
            <GiHamburgerMenu onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          )}
>>>>>>> 1a53af53615f8a2caaea01abd1559d2bc29a54d2
        </div>
      </div>
    </>
  );
};

export default Navbar;

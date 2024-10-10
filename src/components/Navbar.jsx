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
      // Adjust the dropdown position just below the trigger button
      setPosition({ top, left });
    }
  }, []);

  return (
    <div className="absolute z-10 w-full text-xl font-semibold text-white">
      <div className="mx-auto my-0 flex justify-end px-4 py-8 sm:w-2/3 sm:px-0 sm:2xl:w-4/5">
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
                <Link href={"/services"}>About</Link>
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
            <Button className="bg-brand font-semibold text-green-950">
              Contact Us
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

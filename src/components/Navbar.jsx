"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="absolute z-10 w-full text-xl font-semibold text-white">
      <div className="mx-auto my-0 flex items-center justify-between px-4 py-8 sm:w-2/3 sm:px-0 sm:2xl:w-4/5">
        <a href="#" className="text-4xl">
          AJARK
        </a>
        <nav className="flex hidden items-center sm:block">
          <ul className="flex flex-row gap-8">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/services"}>About</Link>
            </li>
            <li className="">
              <DropdownMenu className="bg-white text-black">
                <DropdownMenuTrigger>All Services</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup className="bg-white text-black">
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Trainings</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white text-black">
                          <DropdownMenuItem>Soft Skills</DropdownMenuItem>
                          <DropdownMenuItem>Frontend</DropdownMenuItem>
                          <DropdownMenuItem>Backend</DropdownMenuItem>
                          <DropdownMenuItem>FullStack</DropdownMenuItem>
                          <DropdownMenuItem>Testing</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator className="bg-black pb-[1px] text-black" />

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Resumes & CVs
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="bg-white text-black">
                          <DropdownMenuItem>CV Review</DropdownMenuItem>
                          <DropdownMenuItem>CV Building</DropdownMenuItem>
                          <DropdownMenuItem>
                            Abroad CV Building
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator className="bg-black pb-[1px] text-black" />
                    <DropdownMenuItem>Career Consultants</DropdownMenuItem>
                    <DropdownMenuItem>Staffing</DropdownMenuItem>
                    <DropdownMenuItem>Outsourcing</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>Contact US</li>
          </ul>
        </nav>
        <div className="text-4xl">
          {isSidebarOpen ? (
            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ) : (
            <GiHamburgerMenu onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          )}
          {/* {sidebarOpen && <Sidebar />} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

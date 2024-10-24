"use client";

import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();

  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <section
      className={`fixed left-0 top-0 h-full w-full transform overflow-y-auto bg-white text-black transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between p-8">
        <Link href="/" className="text-4xl" onClick={handleClick}>
          AJARK
        </Link>

        <div className="text-5xl text-red-600 hover:text-red-900">
          <IoClose onClick={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      <div className="px-4">
        <ul className="flex cursor-pointer flex-col gap-0 text-2xl text-black/30">
          <li
            className={`rounded p-2 text-black/40 hover:bg-brand/30 hover:text-black/60 ${path === "/" && "bg-brand/30"}`}
          >
            <Link href={"/"} onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="rounded p-2 text-black/40 hover:bg-brand/30 hover:text-black/60">
            <Link href={"/#about-section"} onClick={handleClick}>
              About
            </Link>
          </li>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger
                className={`rounded p-2 text-2xl text-black/40 hover:bg-brand/30 hover:font-bold hover:text-black data-[state=open]:bg-brand data-[state=open]:font-bold data-[state=open]:text-black ${path === "/services" && "data-[state=close]:bg-brand data-[state=open]:bg-brand data-[state=close]:font-bold data-[state=open]:font-bold data-[state=close]:text-black data-[state=open]:text-black"}`}
              >
                <Link href={"/services?q=0"} className="">
                  All Services
                </Link>
              </AccordionTrigger>
              <AccordionContent className="ml-4">
                <Accordion type="single" collapsible className="w-full" asChild>
                  <AccordionItem value="item-2" className="border-b-0">
                    <AccordionTrigger className="rounded p-2 text-xl hover:bg-brand/30 hover:font-bold hover:text-black hover:no-underline data-[state=open]:font-bold data-[state=open]:text-black">
                      Trainings
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul
                        className="ml-8 flex flex-col gap-0 text-lg"
                        onClick={() => {
                          setIsSidebarOpen(!isSidebarOpen);
                          handleClick();
                        }}
                      >
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/services?q=0`)}>
                            Soft Skills
                          </p>
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/services?q=1`)}>
                            Frontend
                          </p>
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/services?q=2`)}>
                            Backend
                          </p>
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/services?q=3`)}>
                            Cloud
                          </p>
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/services?q=4`)}>
                            Testing
                          </p>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full" asChild>
                  <AccordionItem value="item-3" className="border-b-0">
                    <AccordionTrigger className="rounded p-2 text-xl hover:bg-brand/30 hover:font-bold hover:text-black data-[state=open]:font-bold data-[state=open]:text-black">
                      <p onClick={() => router.push(`/resume`)}>
                        Resume & CV&apos;s
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-8 flex flex-col gap-0 text-lg">
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/resume`)}>
                            CV Review
                          </p>
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/resume`)}>
                            CV Building
                          </p>
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          <p onClick={() => router.push(`/resume`)}>
                            Abroad CV Building
                          </p>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <li className="rounded p-2 text-black/40 hover:bg-brand/30 hover:text-black/60">
            <Link
              href={"/#contact-section"}
              scroll={true}
              onClick={handleClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

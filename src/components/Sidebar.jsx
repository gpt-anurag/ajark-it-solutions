"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);

  return (
    <section
      className={`fixed left-0 top-0 h-full w-full transform overflow-y-auto bg-white text-black transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between p-8">
        <div>AJARK</div>

        <div className="text-5xl text-red-600 hover:text-red-900">
          <IoClose onClick={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      <div className="px-4">
        <ul className="flex cursor-pointer flex-col gap-0 text-2xl text-black/30">
          <li className="rounded p-2 text-black/40 hover:bg-brand/30 hover:text-black/60">
            Home
          </li>
          <li className="rounded p-2 text-black/40 hover:bg-brand/30 hover:text-black/60">
            About
          </li>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="rounded p-2 text-2xl text-black/40 hover:bg-brand/30 hover:font-bold hover:text-black data-[state=open]:bg-brand data-[state=open]:font-bold">
                All Services
              </AccordionTrigger>
              <AccordionContent className="ml-4">
                <Accordion type="single" collapsible className="w-full" asChild>
                  <AccordionItem value="item-2" className="border-b-0">
                    <AccordionTrigger className="rounded p-2 text-xl hover:bg-brand/30 hover:font-bold hover:text-black hover:no-underline data-[state=open]:font-bold data-[state=open]:text-black">
                      Trainings
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-8 flex flex-col gap-0 text-lg">
                        <li className="rounded p-2 hover:text-black">
                          Soft Sills
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          FrontEnd
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          BackEnd
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          FullStack
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          Testing
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full" asChild>
                  <AccordionItem value="item-3" className="border-b-0">
                    <AccordionTrigger className="rounded p-2 text-xl hover:bg-brand/30 hover:font-bold hover:text-black data-[state=open]:font-bold data-[state=open]:text-black">
                      Resume & CV
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-8 flex flex-col gap-0 text-lg">
                        <li className="rounded p-2 hover:text-black">
                          CV Review
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          CV Building
                        </li>
                        <li className="rounded p-2 hover:text-black">
                          Abroad CV Building
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <li className="rounded p-2 text-black/40 hover:bg-brand/30 hover:text-black/60">
            Contact Us
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

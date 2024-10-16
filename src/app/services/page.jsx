"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WebDesignPage from "./components/WebDesignPage";
import Image from "next/image";

const service_data = [
  {
    id: 0,
    title: "Web Design",
    page: <WebDesignPage />,
  },
  {
    id: 1,
    title: "Software Devlopment",
    page: <></>,
  },
  {
    id: 2,
    title: "Product Management",
    page: <></>,
  },
  {
    id: 3,
    title: "Graphic Design",
    page: <></>,
  },
  {
    id: 4,
    title: "Management",
    page: <></>,
  },
];

const ServicesPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <main className="flex flex-col">
      <div className="relative h-[40vh] w-screen overflow-hidden bg-black">
        <Image
          src={"/img/page-title-bg.jpg"}
          alt="blog image"
          fill
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute flex h-full w-full items-center justify-center">
          <h1 className="text-9xl font-bold uppercase text-white/70">
            Courses
          </h1>
        </div>
      </div>
      <div className="mx-auto my-0 w-2/3 py-8 2xl:w-4/5">
        <section className="flex gap-4">
          <div className="w-1/3">
            <ul className="flex flex-col gap-4 rounded border p-4 font-semibold">
              {service_data.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer border-l-[3px] pl-3 ${
                    currentTab === item.id
                      ? "border-brand text-black"
                      : "border-black/10 text-black/40"
                  } `}
                  onClick={() => setCurrentTab(item.id)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3">{service_data[currentTab].page}</div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;

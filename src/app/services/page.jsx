"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import FrontEndPage from "./components/FrontEndPage";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BackEndPage from "./components/BackEndPage";
import CloudPage from "./components/CloudPage";
import TestingPage from "./components/TestingPage";
import SoftSkills from "./components/SoftSkills";
// import { useRouter } from "next/router";

const service_data = [
  {
    id: 0,
    title: "SoftSkills",
    page: <SoftSkills />,
    link_id: "softskills",
  },
  {
    id: 1,
    title: "FrontEnd",
    page: <FrontEndPage />,
    link_id: "frontend",
  },
  {
    id: 2,
    title: "BackEnd",
    page: <BackEndPage />,
    link_id: "backend",
  },
  {
    id: 3,
    title: "Cloud",
    page: <CloudPage />,
    link_id: "cloud",
  },
  {
    id: 4,
    title: "Testing",
    page: <TestingPage />,
    link_id: "testing",
  },
];

const Services = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    setCurrentTab(parseInt(search));
    router.push(`${path}?q=${search}`);
  }, [search]);

  return (
    <main className="flex flex-col">
      <div className="relative mb-12 h-[40vh] w-screen overflow-x-hidden bg-black">
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
      <div className="mx-auto my-0 w-full px-4 py-8 lg:w-2/3 2xl:w-4/5">
        <section className="flex flex-col gap-8 lg:flex-row lg:gap-4 lg:text-xl">
          <div className="w-full lg:w-1/5">
            <ul className="flex justify-between gap-4 p-2 font-semibold lg:flex-col lg:border-r-4 lg:p-4">
              {service_data.map((item) => (
                <li
                  key={item.id}
                  id={item.link_id}
                  className={`cursor-pointer rounded border-l-[6px] pl-3 text-lg lg:px-4 lg:py-6 lg:text-3xl ${
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
          <div className="w-full lg:w-4/5 lg:px-44">
            {service_data[currentTab].page}
          </div>
        </section>
      </div>
    </main>
  );
};

const ServicesPage = () => {
  return (
    <Suspense>
      <Services />
    </Suspense>
  );
};

export default ServicesPage;

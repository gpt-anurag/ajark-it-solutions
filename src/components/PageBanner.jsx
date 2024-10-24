import Image from "next/image";
import React from "react";

const PageBanner = ({ children, title }) => {
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
          <h1 className="text-wrap text-center text-5xl font-bold uppercase text-white/70 sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>
      </div>
      <div className="mx-auto my-0 max-w-screen-2xl px-8 py-8 md:w-11/12 md:px-0 md:text-xl 2xl:w-4/5">
        {children}
      </div>
    </main>
  );
};

export default PageBanner;

import Image from "next/image";
import React from "react";

const CareerConsultingPage = () => {
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
            career consulting
          </h1>
        </div>
      </div>
    </main>
  );
};

export default CareerConsultingPage;

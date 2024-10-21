import React from "react";
import Image from "next/image";

const BackEndPage = () => {
  return (
    <section className="">
      <div className="flex w-full justify-center gap-20">
        <figure className="flex flex-col justify-between">
          <Image
            src={"/spring-3.svg"}
            alt="spring icon"
            width={200}
            height={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#35550d]">
            Springboot
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-between">
          <Image
            src={"/nodejs-icon.svg"}
            alt="node icon"
            width={200}
            height={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#35550d]">
            Node
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default BackEndPage;

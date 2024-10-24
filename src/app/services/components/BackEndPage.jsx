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
      <div className="mt-10">
        <p className="text-justify">
          Backend development powers the unseen parts of websites and
          applications. It involves using languages like Spring Boot or Node.js
          to manage databases and server operations. Mastering backend skills
          ensures smooth functionality and data handling, creating a seamless
          experience for users everywhere.
        </p>
      </div>
    </section>
  );
};

export default BackEndPage;

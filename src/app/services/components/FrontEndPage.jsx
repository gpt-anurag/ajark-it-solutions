import Image from "next/image";
import React from "react";

const FrontEndPage = () => {
  return (
    <section className="">
      <div className="flex w-full justify-center gap-16">
        <figure className="flex flex-col justify-between">
          <Image
            src={"/react-2.svg"}
            alt="react icon"
            height={200}
            width={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#23272f]">
            React
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-between">
          <Image
            src={"/angular-logo.svg"}
            alt="angular icon"
            width={200}
            height={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#b02290]">
            Angular
          </figcaption>
        </figure>
      </div>

      <div className="mt-10">
        <p className="text-justify">
          Frontend development focuses on creating the visual part of websites
          and applications using HTML, CSS, and JavaScript. With frameworks like
          React and Angular, you can build dynamic, user-friendly interfaces.
          Mastering these tools allows you to bring ideas to life, ensuring
          engaging user experiences
        </p>
      </div>
    </section>
  );
};

export default FrontEndPage;

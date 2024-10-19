import Image from "next/image";
import React from "react";

const TestingPage = () => {
  return (
    <section className="">
      <div className="flex w-full justify-center gap-20">
        <figure className="flex flex-col justify-between">
          <Image
            src={"/selenium-icon.svg"}
            alt="selenium icon"
            width={200}
            height={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#135619]">
            Selenium
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-between">
          <Image
            src={"/playwright-logo.svg"}
            alt="playwright icon"
            width={200}
            height={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#c04b41]">
            Playwright
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestingPage;

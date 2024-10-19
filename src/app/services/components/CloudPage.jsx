import Image from "next/image";
import React from "react";

const CloudPage = () => {
  return (
    <section className="">
      <div className="flex w-full justify-center gap-20">
        <figure className="flex flex-col justify-between">
          <Image
            src={"/aws-2.svg"}
            alt="aws icon"
            width={200}
            height={200}
            className="mt-8"
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#252f3e]">
            AWS
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-between">
          <Image
            src={"/azure-2.svg"}
            alt="azure icon"
            width={200}
            height={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#0d407a]">
            Azure
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default CloudPage;

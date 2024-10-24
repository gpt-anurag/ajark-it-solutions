import Image from "next/image";
import React from "react";

const SoftSkills = () => {
  return (
    <section className="">
      <div className="flex w-full flex-col items-center gap-10">
        <figure className="flex flex-col justify-between">
          <Image
            src={"/softskills.svg"}
            alt="softskills"
            width={350}
            height={350}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#35550d]">
            Softskills
          </figcaption>
        </figure>
        <p>
          Soft skills are essential in today’s job market, Developing these
          skills enhances your ability to collaborate effectively, navigate
          challenges, and build strong relationships, making you a valuable
          asset to any organization. Prioritize soft skills training to boost
          your career potential!
        </p>
      </div>
    </section>
  );
};

export default SoftSkills;

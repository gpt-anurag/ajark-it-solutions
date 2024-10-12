import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsCheck2All } from "react-icons/bs";

const About = () => {
  return (
    <div className="text-black" id="about-section">
      <div className="mx-auto my-0 flex flex-col gap-4 px-6 py-4 md:w-11/12 md:px-0 md:py-8 2xl:w-4/5">
        <div className="flex items-center gap-3">
          <span className="font-bold text-black/30">ABOUT</span>
          <div className="h-[0.5px] w-40 bg-red-600"></div>
        </div>
        <h2 className="intersect:animate-fade-down intersect:animate-once text-4xl">
          <span className="intersect:animate-fade-down intersect:animate-once font-bold">
            ABOUT{" "}
          </span>
          US
        </h2>
        <h3 className="mb-4 text-3xl font-bold sm:text-center">
          We are your one-stop solution
        </h3>
        <div className="flex gap-4 text-black/70">
          <div className="flex flex-1 flex-col gap-4">
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
              <li className="flex gap-2">
                <span className="mt-1 text-xl text-brand">
                  <BsCheck2All />
                </span>
                <div className="flex-col">
                  <h2 className="text-xl font-semibold">
                    Real-World Experience{" "}
                  </h2>
                  <p>{`Gain hands-on experience by working on actual projects, boosting your resume and confidence`}</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-xl text-brand">
                  <BsCheck2All />
                </span>
                <div className="flex-col">
                  <h2 className="text-xl font-semibold">Expert Training </h2>
                  <p>{`Learn from industry professionals through tailored training programs designed to equip you with in-demand skills`}</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-xl text-brand">
                  <BsCheck2All />
                </span>
                <div className="flex-col">
                  <h2 className="text-xl font-semibold">Job Opportunities </h2>
                  <p>{`Connect with top companies looking for fresh talent, giving you a direct path to employment after training`}</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-xl text-brand">
                  <BsCheck2All />
                </span>
                <div className="flex-col">
                  <h2 className="text-xl font-semibold">
                    Supportive Community{" "}
                  </h2>
                  <p>{` Join a network of like-minded peers and mentors who are dedicated to your success and growth`}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="rounded-md bg-brand px-3 py-4 font-bold text-white hover:bg-brand/60"
            asChild
          >
            <Link href={"/services"}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;

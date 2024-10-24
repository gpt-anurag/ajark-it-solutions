"use client";

import Link from "next/link";
import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";

export const featured_services_data = [
  {
    id: 1,
    icon: <BsBarChart />,
    title: "Transformative Training",
    description: `Equip yourself with in-demand skills through training designed for all skill levels, bridging the gap between education and real-world IT demands`,
    service_link: "/services?q=0",
  },
  {
    id: 2,
    icon: <BsCardChecklist />,
    title: "Internships & Placements",
    description: `Jumpstart your career with our exclusive job placement services, connecting high-performing candidates with internships and job roles in leading companies`,
    service_link: "/resume",
  },
  {
    id: 3,
    icon: <BsBriefcase />,
    title: "Staffing & Outsourcing",
    description: `Meet your business goals with our expert staffing services, providing both emerging talent and experienced professionals to enhance your team’s capabilities`,
    service_link: "/career-consulting",
  },
];

const FeaturedServices = ({ onCardClick }) => {
  return (
    <section className="absolute bottom-0 bg-[#060606]/50 text-white">
      <div className="mx-auto my-0 flex flex-col justify-between gap-0 py-8 md:w-11/12 md:flex-row md:py-10 2xl:w-4/5">
        {featured_services_data.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                onCardClick(item.id - 1);
              }}
              className={`flex cursor-pointer gap-4 p-4 hover:bg-white/10 ${
                item.id === 2
                  ? "border-2 border-x-0 border-white/30 md:border md:border-y-0"
                  : ""
              }`}
            >
              <div className="text-5xl font-extrabold text-brand">
                {item.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl font-semibold hover:text-brand">
                  {item.title}
                </h4>
                <p className="text-white/80">{item.description}</p>
                <Link
                  href={item.service_link}
                  className="font-bold text-white/70 hover:text-brand"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedServices;

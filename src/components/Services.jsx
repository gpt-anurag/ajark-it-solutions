import React from "react";
import {
  BsBinoculars,
  BsBriefcase,
  BsCalendar4Week,
  BsSun,
  BsBarChart,
  BsCardChecklist,
} from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <BsCalendar4Week />,
    title: "Skill Development Workshops",
    description: ` Offer workshops focused on essential skills (technical, soft skills, and industry-specific knowledge) to prepare freshers for real-world challenges`,
  },
  {
    id: 2,
    icon: <BsSun />,
    title: "Mentorship and Coaching",
    description: ` Connect students with experienced professionals for personalized guidance, helping them navigate their careers and develop industry-specific knowledge`,
  },
  {
    id: 3,
    icon: <BsBarChart />,
    title: "Project-Based Learning",
    description: `Provide opportunities for students to work on actual client projects, enabling them to apply their skills in a professional setting and showcase their abilities to potential employers`,
  },
  {
    id: 4,
    icon: <BsBriefcase />,
    title: "Internship Placement Programs",
    description: `Facilitate internship opportunities with MNCs, allowing freshers to gain hands-on experience while companies benefit from fresh perspectives`,
  },
  {
    id: 5,
    icon: <BsCardChecklist />,
    title: "Resume Building and Interview Guidance",
    description: `Offer services that assist students in crafting impactful resumes and preparing for interviews, making them more competitive in the job market`,
  },
  {
    id: 6,
    icon: <BsBinoculars />,
    title: "Talent Outsourcing Solutions for Clients",
    description: `Provide MNCs with access to a pool of trained, enthusiastic freshers, tailored to meet their specific project needs while ensuring quality and reliability`,
  },
];

const Services = () => {
  return (
    <div className="text-black">
      <div className="mx-auto my-0 flex flex-col gap-4 p-8 md:w-11/12 md:px-0 md:py-16 2xl:w-4/5">
        <div className="flex items-center gap-3">
          <span className="font-bold text-black/30">SERVICES</span>
          <div className="h-[0.5px] w-40 bg-red-600"></div>
        </div>
        <h2 className="mb-8 text-4xl">
          <span className="font-bold">OUR </span>SERVICES
        </h2>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex flex-col gap-4 rounded border p-6 shadow sm:flex-row sm:p-4`}
              >
                <div className="mt-1 text-4xl text-brand">{item.icon}</div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

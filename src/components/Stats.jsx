import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { BsJournalRichtext } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <BsEmojiSmile />,
    stat_type: "Clients",
    stat_number: "20+",
  },
  {
    id: 2,
    icon: <BsJournalRichtext />,
    stat_type: "Projects",
    stat_number: 10,
  },
  {
    id: 3,
    icon: <BsHeadset />,
    stat_type: "Candidates Supported",
    stat_number: 145,
  },
  {
    id: 4,
    icon: <BsPeople />,
    stat_type: "Team Members",
    stat_number: "50+",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto my-0 grid w-2/3 grid-cols-1 justify-between gap-14 py-12 sm:grid-cols-2 sm:gap-10 md:w-11/12 md:grid-cols-4">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center gap-4">
              <p className="text-6xl sm:text-4xl">{item.icon}</p>
              <p className="text-5xl font-bold text-brand">
                {item.stat_number}
              </p>
              <p className="text-2xl font-semibold sm:text-lg md:text-base">
                {item.stat_type}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    id: 1,
    question: "What unique skills will I gain from your training programs?",
    answer:
      "Our programs focus on both technical and soft skills, including coding, project management, communication, and problem-solving, tailored to industry demands",
    question_type: "student",
  },
  {
    id: 2,
    question: "What are the benefits of partnering with your organization?",
    answer:
      "By partnering with us, you gain access to a pool of trained talent ready to contribute, save on recruitment and training costs, and ensure project success through our specialized training and support services",
    question_type: "client",
  },
  {
    id: 3,
    question: "How will your training help me stand out in the job market?",
    answer:
      "We emphasize hands-on experience and real-world projects, enabling you to build a strong portfolio and gain practical knowledge that employers value",
    question_type: "student",
  },
  {
    id: 4,
    question:
      "What measures do you take to ensure the success of the outsourced talent?",
    answer:
      "We conduct regular performance evaluations, provide ongoing training, and maintain open communication to ensure our resources meet and exceed your expectations",
    question_type: "client",
  },
  {
    id: 5,
    question:
      "What kind of support will I receive after completing the training?",
    answer:
      "We offer ongoing career support, including job placement assistance, resume reviews, and interview coaching to help you land your desired role",
    question_type: "student",
  },
  {
    id: 6,
    question:
      "Can you provide resources for both short-term and long-term projects?",
    answer:
      "Absolutely! We offer flexible solutions to provide skilled resources for both immediate project needs and ongoing long-term engagements",
    question_type: "client",
  },
  {
    id: 7,
    question: "What is the cost of your training programs?",
    answer:
      "Program costs vary based on the training offered. We also provide flexible payment options and scholarships for eligible students.",
    question_type: "student",
  },
  {
    id: 8,
    question:
      "Do you customize your services to fit our specific industry requirements?",
    answer:
      "We work closely with you to understand your needs and tailor our training programs and talent solutions to align with your industry standards and objectives",
    question_type: "client",
  },
];

const FAQ = () => {
  return (
    <div className="bg-[#f7f7f7] text-black">
      <div className="mx-auto my-0 flex flex-col gap-4 p-4 sm:w-2/3 sm:px-0 sm:py-16 2xl:w-4/5">
        <div className="flex items-center gap-3">
          <span className="font-bold uppercase text-black/30">
            Frequently Asked Questions
          </span>
          <div className="h-[0.5px] w-40 bg-red-600"></div>
        </div>
        <h2 className="mb-8 text-4xl">
          <span className="font-bold">ASK US </span>ANYTHING
        </h2>
        <div className="flex flex-col justify-around gap-8 sm:flex-row">
          <div className="flex basis-1/2 flex-col gap-4 rounded bg-red-400/30 p-4">
            <div className="text-center text-2xl font-bold text-red-400">
              Students
            </div>

            {data
              .filter((item) => item.question_type === "student")
              .map((item) => {
                return (
                  <>
                    <Accordion
                      key={item.id}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem
                        value="item-1"
                        className={`rounded border bg-white px-4 py-2 shadow`}
                      >
                        <AccordionTrigger className="text-left font-semibold">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </>
                );
              })}
          </div>
          <div className="flex basis-1/2 flex-col gap-4 rounded bg-green-400/30 p-4">
            <div className="text-center text-2xl font-bold text-green-400">
              Clients
            </div>
            {data
              .filter((item) => item.question_type === "client")
              .map((item) => {
                return (
                  <>
                    <Accordion
                      key={item.id}
                      type="single"
                      collapsible
                      className=""
                    >
                      <AccordionItem
                        value="item-1"
                        className={`rounded border bg-white px-4 py-2 shadow`}
                      >
                        <AccordionTrigger className="text-left font-semibold">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import PageBanner from "@/src/components/PageBanner";
import Image from "next/image";
import React from "react";

const CareerConsultingPage = () => {
  return (
    <PageBanner title={`Career Consultancy`}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <div className="flex items-center justify-center p-4">
            <Image
              src="/consulting.svg"
              objectFit="cover"
              height={500}
              width={500}
              alt="Consulting illustration"
              className=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 text-justify">
          <div className="mt-4 flex flex-col gap-10 md:flex-row">
            <div className="rounded border p-8">
              <h1 className="mb-4 text-left text-2xl font-semibold">
                Personalized Career Guidance
              </h1>
              <p className="text-lg">
                We offer one-on-one consultations to give tailored advice that
                aligns with your unique skills, interests, and goals, helping
                you navigate your career path effectively. <br /> Our experts
                help identify your strengths and areas for improvement,
                providing insights into the skills most in demand in the
                industry.
              </p>
            </div>
            <div className="rounded border p-8">
              <h3 className="mb-4 mt-2 text-left text-2xl font-semibold">
                Expert Resume and Interview Support
              </h3>
              <p className="text-lg">
                Get professional insights on crafting an impactful resume and
                mastering interview techniques, ensuring you stand out to
                potential employers. <br /> We guide you through various career
                options in IT, helping you understand the paths that align with
                your aspirations
              </p>
            </div>
          </div>
          <div className="max-w-[600px] self-center rounded border p-8">
            <h3 className="mb-4 text-left text-2xl font-semibold">
              Industry Insights and Networking Opportunities
            </h3>
            <p className="text-lg">
              Gain valuable knowledge about industry trends, salary
              expectations, and hiring practices. We connect you with industry
              professionals, expanding your network and enhancing your job
              prospects.
            </p>
          </div>
        </div>
      </div>
    </PageBanner>
  );
};

export default CareerConsultingPage;

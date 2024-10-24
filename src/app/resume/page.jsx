import PageBanner from "@/src/components/PageBanner";
import Image from "next/image";
import React from "react";

const ResumePage = () => {
  return (
    <PageBanner title={`Resume Services`}>
      <div className="flex flex-col gap-8">
        <div className="mx-auto my-0 max-w-[800px] text-justify">
          <h1 className="mb-4 hidden text-3xl font-bold">
            Resume Review and Building Services
          </h1>
          <p className="mb-4">
            Crafting a standout resume is crucial in today’s competitive job
            market. Our resume review and building services are designed to help
            you present your skills and experiences effectively, and standout in
            both domestic or international settings
          </p>
          <p className="mb-4">
            With our support, you can confidently approach job applications,
            increase your chances of landing interviews, and ultimately secure
            the position you desire. Let us help you make a strong first
            impression and take the next step in your professional journey!
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="">
            <div className="flex justify-center p-4">
              <Image
                src="/feedback.svg"
                objectFit="cover"
                height={450}
                width={450}
                alt="Feedback illustration"
                className=""
              />
            </div>
            <div className="rounded border p-8">
              <h2 className="mb-2 text-2xl font-semibold">Resume Review</h2>
              <p className="mb-4">
                Our experts will evaluate your current resume, providing
                personalized feedback on format, content, and clarity. We’ll
                identify strengths to highlight and areas for improvement,
                ensuring your resume catches the attention of recruiters.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center p-4">
              <Image
                src="/portfolio-review-2.svg"
                height={350}
                width={350}
                objectFit="cover"
                alt="Portfolio Review illustration"
                className=""
              />
            </div>
            <div className="rounded border p-8">
              <h2 className="mb-2 text-2xl font-semibold">Resume Building</h2>
              <p className="mb-4">
                {`If you're starting from scratch or looking to revamp your
                existing resume, our team will work with you to create a
                tailored resume that showcases your unique skills and
                experiences. We focus on industry-specific language, keywords,
                and formatting that align with job descriptions in the IT field.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageBanner>
  );
};

export default ResumePage;

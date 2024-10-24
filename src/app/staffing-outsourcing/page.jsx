import PageBanner from "@/src/components/PageBanner";
import Image from "next/image";
import React from "react";

const StaffingPage = () => {
  return (
    <PageBanner title={`Staffing & Outsourcing`}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-start">
          <div className="flex items-center justify-center rounded border p-4">
            <Image
              src="/staffing.svg"
              objectFit="cover"
              height={500}
              width={500}
              alt="Staffing illustration"
              className=""
            />
          </div>
        </div>
        <div className="flex max-w-[800px] flex-col gap-2">
          <h1 className="mb-4 text-3xl font-bold">Staffing & Outsourcing</h1>
          <h2 className="mt-2 text-2xl font-semibold">Staffing</h2>
          <p className="text-lg">
            Our staffing services connect businesses with the best candidates,
            ensuring a perfect match for their needs. We focus on finding
            candidates who not only have the skills but also fit your company
            culture, helping you build strong teams that drive success.
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Outsourcing</h3>
          <p className="text-lg">
            Our outsourcing solutions give you access to skilled professionals
            for specific tasks, allowing your business to streamline operations.
            By leveraging external expertise, you can focus on your core
            activities while improving efficiency and achieving better results
            in your projects.
          </p>
        </div>
      </div>
    </PageBanner>
  );
};

export default StaffingPage;

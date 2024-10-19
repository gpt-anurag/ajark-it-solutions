import Image from "next/image";
import React from "react";

const FrontEndPage = () => {
  return (
    <section className="">
      <div className="flex w-full justify-center gap-20">
        <figure className="flex flex-col justify-between">
          <Image
            src={"/react-2.svg"}
            alt="react icon"
            height={200}
            width={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#23272f]">
            React
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-between">
          <Image
            src={"/angular-logo.svg"}
            alt="angular icon"
            width={200}
            height={200}
          />
          <figcaption className="mt-4 text-center text-4xl font-bold text-[#b02290]">
            Angular
          </figcaption>
        </figure>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi velit
          harum dicta iure! Magnam, impedit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repudiandae deserunt odio voluptatum
          reprehenderit cum nam numquam facilis quidem dolorum, delectus ab
          harum sit id ex neque, minima quas exercitationem velit sequi! Autem
          sapiente cupiditate error expedita, saepe incidunt quibusdam sunt,
          magni eveniet iusto voluptas distinctio laboriosam officia inventore
          nostrum? Non!
        </p>
      </div>
    </section>
  );
};

export default FrontEndPage;

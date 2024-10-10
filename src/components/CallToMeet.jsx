import React from "react";

const CallToMeet = () => {
  return (
    <section className="bg-[#11423c] text-xl text-white">
      <div className="mx-auto my-0 flex flex-col items-center gap-12 px-6 pb-24 pt-8 sm:w-2/3 sm:pt-12">
        <h3 className="text-4xl font-thin">
          <span className="font-bold">Let’s Connect</span> in Person (put pulse
          animation)
        </h3>
        <div className="w-full text-center sm:w-3/5">
          At AJARK IT Solutions, we’re passionate about bridging the gap between
          education and industry in the IT sector.we ensure our aspirants are
          well-prepared to meet the challenges of a dynamic workplace.
          <br />
          <br />
          We invite you to visit our office to discover how we can work together
        </div>
        <div className="mb-8 grid grid-cols-1 items-center justify-between sm:grid-cols-12 sm:gap-5">
          <p className="col-span-5 place-content-center text-center text-2xl">
            whether you’re a student eager to kickstart your career
          </p>
          <h2 className="col-span-2 place-items-center text-center text-8xl">
            or
          </h2>
          <p className="col-span-5 place-content-center text-center text-2xl">
            a client looking for skilled talent. Let’s connect and explore the
            exciting opportunities that lie ahead!
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60898.52405920879!2d78.36947000000002!3d17.452162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb931fa7aa6827%3A0x77727cd7075984e1!2sWorkafella%20Western%20Aqua%2C%20HiTech%20City!5e0!3m2!1sen!2sus!4v1727582024888!5m2!1sen!2sus"
          width="100%"
          height="400px"
          style={{ border: "0px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded"
        ></iframe>
      </div>
    </section>
  );
};

export default CallToMeet;

import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const useful_links = [
  { id: 1, link: "Home", href: "#" },
  { id: 2, link: "About us", href: "#" },
  { id: 3, link: "Services", href: "/services" },
  { id: 4, link: "Terms of service", href: "#" },
  { id: 5, link: "Privacy policy", href: "#" },
];
const services_links = [
  { id: 1, link: "Web Design" },
  { id: 2, link: "Training" },
  { id: 3, link: "Career Consultants" },
  { id: 4, link: "CV Review" },
];

const socials = [
  { id: 1, icon: <BsTwitterX /> },
  { id: 2, icon: <BsFacebook /> },
  { id: 3, icon: <BsInstagram /> },
  { id: 4, icon: <BsLinkedin /> },
];

const Footer = () => {
  return (
    <div className="bg-[#060606] text-white">
      <div className="mx-auto my-0 flex flex-col justify-between gap-10 px-8 py-8 md:w-11/12 md:flex-row md:px-0 2xl:w-4/5">
        <div className="order-2 flex flex-col justify-between border-t border-white/30 py-4 md:order-1 md:border-0">
          <div className="mb-4">
            <h2 className="text-3xl font-bold">AJARK</h2>
            <br />
            <p>
              12th Floor, Workafella, Western Aqua Building, <br /> Opp Tech
              Mahindra, Kondapur,
              <br />
              Hyderabad - 500081
            </p>
            <br />
            <p>
              <span className="font-semibold">Phone:</span> +91 630194972
            </p>
            <p>
              <span className="font-semibold">Email:</span> info@example.com
            </p>
          </div>
          <div className="flex gap-2 sm:justify-start">
            {socials.map((item) => {
              return (
                <div
                  key={item.id}
                  className="cursor-pointer rounded-full border border-white p-4"
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-10 sm:flex-col md:order-2 md:flex-row">
          <div className="">
            <h5 className="mb-2 font-semibold">Useful Links</h5>
            <ul className="ml-2">
              {useful_links.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="mb-2 cursor-pointer text-white/60 hover:text-white/80"
                  >
                    <Link href={`${item.href ? item.href : "#"}`}>
                      <span className="font-semibold text-brand">&#62;</span>{" "}
                      {item.link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <h5 className="mb-2 font-semibold">Our Services</h5>
            <ul className="ml-2">
              {services_links.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="mb-2 cursor-pointer text-white/60 hover:text-white/80"
                  >
                    <span className="font-semibold text-brand">&#62;</span>{" "}
                    {item.link}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden rounded lg:block">
            <h5 className="mb-2 font-semibold">In Person Meeting</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60898.52405920879!2d78.36947000000002!3d17.452162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb931fa7aa6827%3A0x77727cd7075984e1!2sWorkafella%20Western%20Aqua%2C%20HiTech%20City!5e0!3m2!1sen!2sus!4v1727582024888!5m2!1sen!2sus"
              style={{ border: "0px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-t border-white/30 py-4">
        <p className="text-center">
          © Copyright {<span>AJARK IT Solutions</span>} All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

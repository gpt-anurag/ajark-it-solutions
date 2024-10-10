import React from "react";
import { LuMapPin } from "react-icons/lu";
import { BiEnvelope } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
// import Form from './ContactUsForm'
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="bg-[#f6f9fd] text-black/80">
      <div className="mx-auto my-0 flex flex-col gap-4 p-8 sm:w-2/3 sm:py-16 2xl:w-4/5">
        <div className="flex items-center gap-3">
          <span className="font-bold uppercase text-black/30">Contact</span>
          <div className="h-[0.5px] w-40 bg-red-600"></div>
        </div>
        <h2 className="mb-8 text-4xl">
          <span className="font-bold">CONTACT </span>US
        </h2>
        <div className="grid grid-cols-1 justify-between gap-8 sm:grid-cols-4 sm:grid-rows-2">
          <div className="row-start-1 row-end-1 flex flex-col items-center rounded border bg-white p-4 shadow sm:col-start-1 sm:col-end-3">
            <a
              target="_"
              href="https://www.google.com/maps/dir//Western+Aqua,+Whitefields,+HITEC+City,+Kondapur,+Telangana+500081/@17.4522014,78.2870895,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb93c45446dfcf:0xd4a8392fcd7203ea!2m2!1d78.3694913!2d17.4522184?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
              className=""
            >
              <div className="mb-2 flex flex-col justify-between rounded-full border p-4 text-3xl text-brand hover:bg-brand/30">
                <LuMapPin />
              </div>
            </a>
            <h4 className="mb-4 text-2xl font-semibold text-brand">
              Our Address
            </h4>
            <p className="text-center">
              12th Floor, Workafella, Western Aqua Building, Opp Tech Mahindra,
              Kondapur, Hyderabad - 500081
            </p>
          </div>
          <div className="flex flex-col items-center justify-start rounded border bg-white p-4 shadow sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-4">
            <a href="mailto:info@ajarkitsolutions.com?cc=accounts@ajarkitsolutions.com&subject=Enquiry to Connect with AJARK IT Solutions">
              <div className="mb-2 rounded-full border p-4 text-3xl text-brand hover:bg-brand/30">
                <BiEnvelope />
              </div>
            </a>
            <h4 className="mb-4 text-2xl font-semibold text-brand">Email</h4>
            <p>info@example.com</p>
          </div>
          <div className="flex flex-col items-center justify-start rounded border bg-white p-4 shadow sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4">
            <a href="tel:+91630194972">
              <div className="mb-2 rounded-full border p-4 text-3xl text-brand hover:bg-brand/30">
                <FiPhoneCall />
              </div>
            </a>
            <h4 className="mb-4 text-2xl font-semibold text-brand">Call Us</h4>
            <p>+91 630194972</p>
          </div>
          <div className="grid w-full rounded border bg-white p-4 shadow sm:col-start-3 sm:col-end-5 sm:row-start-1 sm:row-end-4">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const ContactUsForm = () => {
  const formUrl = "https://formspree.io/f/xjkvkyvw";

  // Initialize React Hook Form
  const {
    register, // Registers the inputs
    handleSubmit, // Handles form submission
    reset,
    formState: { errors }, // Contains validation errors
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
    const formUrl = "https://formspree.io/f/xjkvkyvw"; // Replace with your Formspree form URL

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed.");
      }
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      {/* Name */}
      <div className="col-span-1">
        <label htmlFor="name" className="hidden">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className="w-full rounded border p-2"
        />
        {errors.name && (
          <p className="ml-2 text-xs font-bold text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="col-span-1">
        <input
          id="phone"
          type="tel"
          placeholder="Mobile No."
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
          className="w-full rounded border p-2"
        />
        {errors.phone && (
          <p className="ml-2 text-xs font-bold text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="col-span-2">
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="w-full rounded border p-2"
        />
        {errors.email && (
          <p className="ml-2 text-xs font-bold text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="col-span-2">
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: false })}
          className="w-full rounded border p-2"
        />
        {errors.subject && (
          <p className="ml-2 text-xs font-bold text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message (Text Area) */}
      <div className="col-span-2 row-span-2">
        <textarea
          id="message"
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
          className="w-full rounded border p-2"
          rows="4"
        ></textarea>
        {errors.message && (
          <p className="ml-2 text-xs font-bold text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="col-span-2">
        {/* <button type='submit' className=''>
          Submit
        </button> */}
        <Button variant="secondary" className="w-full rounded bg-brand">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;

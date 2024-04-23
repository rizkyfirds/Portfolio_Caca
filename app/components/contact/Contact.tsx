"use client";

import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnjjko");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="py-[80px] px-[156px]">
      <p className="w-full text-[#FD7092] font-bold text-[148px] text-center mb-[64px]">
        Contact
      </p>
      <div className="flex justify-center gap-x-[24px]">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-x-[24px]">
            <div className="">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                className="p-[32px] border-2 border-[#FD7092] rounded-full text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[30px] text-[30px]"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="p-[32px] border-2 border-[#FD7092] rounded-full text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[30px] text-[30px]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="py-[32px]">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full p-[32px] border-2 border-[#FD7092] rounded-3xl text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[30px] text-[30px]"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full p-[32px] border-2 bg-[#FD7092] rounded-full text-white text-[30px]"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-[64px] grid justify-items-center gap-y-[24px]">
        <p className="text-[#FD7092] font-bold text-[24px]">
          Call Me: +62 813-2424-0982
        </p>
        <div className="flex gap-x-[24px]">
          <button className="p-[16px] border-[#FD7092] border-2 rounded-full text-[#FD7092]">
            <FiLinkedin className="text-[24px]" />
          </button>
          <button className="p-[16px] border-[#FD7092] border-2 rounded-full text-[#FD7092]">
            <FiGithub className="text-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

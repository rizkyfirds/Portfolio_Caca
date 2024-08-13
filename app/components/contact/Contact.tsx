import React, { useState, useEffect } from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnjjko");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      handleSubmit({});
    }
  }, [state.succeeded]);

  return (
    <div className="py-[24px] px-[15px] lg:px-[180px] lg:py-[30px]">
      <div className="flex-col w-4/5 lg:w-3/5 mx-auto">
        <p className="text-[#FD7092] font-bold text-[47px] lg:text-6xl text-center mb-[32px] lg:mb-[64px]">
          Contact
        </p>
        <div className="flex justify-center gap-x-[12px] lg:gap-x-[24px]">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full mx-auto lg:flex gap-x-[24px] gap-y-4 ">
              <div className="w-full lg:w-1/2">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mb-2 p-[8px] lg:p-[12px] border-2 border-[#FD7092] focus:outline-none focus:ring-1 focus:ring-[#FD7092] rounded-full text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[12px] text-[12px] lg:placeholder:text-[16px] lg:text-[16px]"
                  // className="w-full mb-4 lg:mb-0 p-[8px] lg:p-[20px] border-2 border-[#FD7092] rounded-full text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[15px] text-[15px] lg:placeholder:text-[20px] lg:text-[20px]"
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="w-full lg:w-1/2">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-[8px] lg:p-[12px] border-2 border-[#FD7092] focus:outline-none focus:ring-1 focus:ring-[#FD7092] rounded-full text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[12px] text-[12px] lg:placeholder:text-[16px] lg:text-[16px]"
              />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="py-2 lg:py-[20px]">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-[8px] lg:p-[20px] border-2 border-[#FD7092] focus:outline-none focus:ring-1 focus:ring-[#FD7092] rounded-3xl text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[12px] text-[12px] lg:placeholder:text-[16px] lg:text-[16px]"
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
              className="w-full p-[8px] lg:p-[10px] border-2 bg-[#FD7092] rounded-full text-white text-[12px] lg:text-[14px]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-[14px] grid justify-items-center gap-y-[16px]">
          <p className="text-[#FD7092] font-bold text-[12px] lg:text-[18px]">
            Call Me: +62 813-2424-0982
          </p>
          <div className="flex gap-x-[24px]">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://www.linkedin.com/in/salsabilaawwaliyyahlestari/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[8px] lg:p-[12px] border-[#FD7092] border-2 rounded-full text-[#FD7092] hover:bg-[#FD7092] hover:text-white hover:font-semibold"
            >
              <FiLinkedin className="text-[10px] lg:text-[18px]" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://github.com/salsabilaawwaliyyah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[8px] lg:p-[12px] border-[#FD7092] border-2 rounded-full text-[#FD7092] hover:bg-[#FD7092] hover:text-white hover:font-semibold"
            >
              <FiGithub className="text-[10px] lg:text-[18px]" />
            </motion.a>
          </div>
          <div className="flex gap-x-2 py-1 text-[#FD7092] -bottom-0">
              <FaRegCopyright className=" my-auto text-sm " />
              <p className="text-xs font-semibold ">
                2024 Muhammad Rizky Firdaus
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

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
    <div className="py-[24px] px-[15px] lg:px-[180px] lg:py-[80px]">
      <div className="flex-col w-4/5 lg:w-3/5 mx-auto">
        <p className="text-[#FD7092] font-bold text-[47px] lg:text-8xl text-center mb-[32px] lg:mb-[64px]">
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
                  className="w-full mb-4 lg:mb-0 p-[8px] lg:p-[20px] border-2 border-[#FD7092] rounded-full text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[15px] text-[15px] lg:placeholder:text-[20px] lg:text-[20px]"
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
                  className="w-full p-[8px] lg:p-[20px] border-2 border-[#FD7092] rounded-full text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[15px] text-[15px] lg:placeholder:text-[20px] lg:text-[20px]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="py-4 lg:py-[20px]">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-[8px] lg:p-[30px] border-2 border-[#FD7092] rounded-3xl text-[#FD7092] placeholder:text-[#FD7092] placeholder:text-[15px] text-[15px] lg:placeholder:text-[20px] lg:text-[20px]"
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
              className="w-full p-[8px] lg:p-[18px] border-2 bg-[#FD7092] rounded-full text-white text-[15px] lg:text-[20px]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-[34px] grid justify-items-center gap-y-[16px]">
          <p className="text-[#FD7092] font-bold text-[12px] lg:text-[24px]">
            Call Me: +62 813-2424-0982
          </p>
          <div className="flex gap-x-[24px]">
            <a
              href="https://www.linkedin.com/in/salsabilaawwaliyyahlestari/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[8px] lg:p-[16px] border-[#FD7092] border-2 rounded-full text-[#FD7092]"
            >
              <FiLinkedin className="text-[12px] lg:text-[24px]" />
            </a>
            <a
              href="https://github.com/salsabilaawwaliyyah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[8px] lg:p-[16px] border-[#FD7092] border-2 rounded-full text-[#FD7092]"
            >
              <FiGithub className="text-[12px] lg:text-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

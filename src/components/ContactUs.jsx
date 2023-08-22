/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import { useForm } from "react-hook-form";
import { HiUserCircle, HiMail, HiOutlinePencilAlt } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import mailBox from "../lottieFile/contact_us_lottieFile.json";
import twitter from "../icons/icons_Twitter.svg";
import linkedIn from "../icons/icon_linkedin.svg";
import facebook from "../icons/icon_facebook.svg";
import phone from "../icons/icon_phone.svg";

import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const form = useRef();

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        "service_nd857p7",
        "template_0liycub",
        form.current,
        "DvyYTrHzMghHjXCHS"
      );

      setIsSuccess(true);
      setIsError(false);
      reset();
      // Display success message for 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);

      // Display error message for 3 seconds
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: mailBox,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
    AOS.refresh();
  }, []);

  const loading = watch("loading");

  return (
    <>
      <section class="bg-white border-b border-t py-8" id="services">
        <div class="container max-w-5xl mx-auto m-8">
          <div class="flex flex-wrap flex-col sm:flex-row" data-aos="fade-up">
            <div class="w-full sm:w-1/2 p-6">
              <div class="text-gray-600 mb-8 text-justify">
                <h1 className="text-4xl font-bold leading-none sm:text-4xl text-purple-header">
                  READY <br />
                  <span className="text-purple"> FOR </span>
                  PARTNERSHIP?
                </h1>
              </div>

              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiUserCircle className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`${
                        errors.name ? "border-red-500" : ""
                      } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight
                      focus:outline-none focus:border-purple`}
                      type="text"
                      placeholder="Enter your full name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      Name is required
                    </p>
                  )}
                </div>

                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`${
                        errors.email ? "border-red-500" : ""
                      } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight
                        focus:outline-none focus:border-purple`}
                      type="email"
                      placeholder="mail@example.com"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      Invalid email address
                    </p>
                  )}
                </div>

                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`${
                        errors.phone ? "border-red-500" : ""
                      } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700
                        leading-tight focus:outline-none focus:border-purple`}
                      type="phone"
                      placeholder="phone number"
                      {...register("phone", {
                        required: true,
                        pattern: /^\+?[0-9]{1,}$/,
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      Invalid phone number
                    </p>
                  )}
                </div>

                <div className="mb-4 mx-2">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                      <HiOutlinePencilAlt className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      className={`${
                        errors.message ? "border-red-500" : ""
                      } appearance-none border
                        rounded-lg w-full py-2 px-3 pl-10
                        text-gray-700 leading-tight focus:outline-none focus:border-purple`
                      }
                      placeholder="Write your message here"
                      rows="6"
                      {...register("message", { required: true })}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      Message is required
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-center">
                <button
  className={`${
    loading
      ? "bg-purple cursor-not-allowed"
      : "bg-purple transform hover:scale-110 transition-transform duration-300"
  } text-white font-bold py-2 px-4 rounded-lg flex items-center focus:outline-none`}
  type="submit"
  disabled={loading}
>
  {loading ? (
    <>
      <span className="mr-2">Loading</span>
      <AiOutlineLoading className="animate-spin h-5 w-5 text-white" />
    </>
  ) : (
    <>
      <span>Submit</span>
      <IoIosSend className="ml-2 h-5 w-5" />
    </>
  )}
</button>
                </div>
                <input type="hidden" value={loading} {...register("loading")} />

                {isSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-2">
                    <span className="block sm:inline">
                      Form submitted successfully!
                    </span>
                  </div>
                )}

                {isError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-2">
                    <span className="block sm:inline">
                      Failed to submit the form. Please try again.
                    </span>
                  </div>
                )}
              </form>
            </div>

            <div
              class="w-full sm:w-1/2 p-6 sm:order-first flex-col
              flex justify-center item-center"
            >

              <Lottie options={animationOptions} height={350} width={350} />

              <div
                className="flex space-y-0 sm:items-center
                  sm:flex-row sm:space-y-0 space-x-4 mt-6
                  sm:space-x-4 lg:justify-center md:items-center"
              >
                <a
                  rel="GitHub noreferrer"
                  href="#"
                  target="_blank"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-10 h-10" src={twitter} alt="image" />
                </a>

                <a
                  rel="LinkedIn noreferrer"
                  href="#"
                  target="_blank"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-10 h-10 " src={linkedIn} alt="image" />
                </a>

                <a
                  rel="facebook noreferrer"
                  href="#"
                  target="_blank"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-10 h-10 " src={facebook} alt="image" />
                </a>

                <a
                  rel="phone"
                  href="tel: +23279000000"
                  className="px-4 py-2 flex justify-center
                    transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-10 h-10 " src={phone} alt="image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default ContactUs;

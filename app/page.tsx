/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import useRegisterModal from "./hooks/useRegisterModal";


const LandingPage = () => {
  const registerModal = useRegisterModal();

  return (
    <div className="grid pt-10 lg:pt-5 w-full grid-cols-1 overflow-x-hidden md:grid-cols-2 grid-rows-1 gap-2 md:gap-8 bg-[#FFE569] p-5 md:p-20">

      <div className="flex flex-col  md:text-left text-center justify-evenly items-center">

        <h1 className="text-4xl md:text-6xl font-medium leading-snug uppercase text-white mb-6">
          Launching soon
        </h1>

        <div className="w-full h-fit grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-1 grid-rows-2 gap-2 flex-wrap lg:flex-nowrap md:justify-between items-center">

          <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
            <div className="w-[100px] bg-buttoncolor rounded-full h-[100px] md:w-[130px] md:h-[130px] flex flex-col items-center justify-center ">
              <span className="text-3xl md:text-5xl text-primarycolor2">85</span>{" "}
              <span className="text-base md:text-xl stroke-[0.7px]">Days</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
            <div className="rounded-full bg-buttoncolor w-[100px] h-[100px] md:w-[130px] md:h-[130px] flex flex-col items-center justify-center ">
              <span className="text-3xl md:text-5xl text-primarycolor2">12</span>{" "}
              <span className="text-base md:text-xl stroke-[0.7px]">Hours</span>
            </div>
          </div>



          <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
            <div className="rounded-full bg-buttoncolor w-[100px] h-[100px] md:w-[130px] md:h-[130px] flex flex-col items-center justify-center ">
              <span className="text-3xl md:text-5xl text-primarycolor2">39</span>{" "}
              <span className="text-base md:text-xl stroke-[0.7px]">Minutes</span>
            </div>
          </div>

  <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
            <div className="rounded-full bg-buttoncolor w-[100px] h-[100px] md:w-[130px] md:h-[130px] flex flex-col items-center justify-center ">
              <span className="text-3xl md:text-5xl text-primarycolor2">48</span>{" "}
              <span className="text-base md:text-xl stroke-[0.7px]">Seconds</span>
            </div>
          </div>

        </div>

        <p className="mt-6 md:mt-8">
          <span className="text-justify text-xl md:text-xl">
            Byte & Crunch is an application created exclusively for Covenant University students, aimed
            at improving your dining experience by eliminating the inconvenience of waiting in long
            lines. We prioritize convenience, efficiency, and effortless food ordering, allowing you to
            easily access various on-campus vendors with just a few taps on their devices.
          </span>
          <span className="inline-block mt-4 md:mt-8">
            With Byte & Crunch, students can enjoy a seamless dining experience, ensuring your
            satisfaction and saving valuable time
          </span>
        </p>

        <p>
          <h3 className="text-xl md:text-2xl font-semibold">Get notified when we launch</h3>
        </p>

        {/* <button
          onClick={registerModal.onOpen}
          className="h-fit w-[150px] rounded-3xl bg-buttoncolor p-3.5 font-medium text-white drop-shadow-xl hover:scale-110 transition hover:drop-shadow-md hover:text-black hover:opacity-70"
          type="button"
        >
          Start for free
        </button> */}
      </div>


      <div className="flex items-center justify-center">
        <img
          className="object-cover md:object-contain w-full h-[300px] md:h-auto"
          src="https://assets.materialup.com/uploads/45b248c8-e813-4437-8e76-3e54d8621933/preview.jpg"
          alt="LandingPageImage"
        />
      </div>

    </div>
  );
};

export default LandingPage;

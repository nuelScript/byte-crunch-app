/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import useRegisterModal from "./hooks/useRegisterModal";

const LandingPage = () => {
  const registerModal = useRegisterModal();

  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-1 gap-8 bg-[#FFE569] p-20">
      <div className="flex h-fit w-full flex-col justify-between">
        <h1 className="text-6xl font-medium leading-snug uppercase text-white mb-6">
          Launching soon
        </h1>
        <div className="w-[620px] flex justify-between items-center">
          <div className="rounded-full w-[130px] h-[130px] bg-buttoncolor flex flex-col justify-center items-center">
            <span className="text-5xl text-primarycolor2">85</span> <span className="text-xl stroke-[0.7px]">Days</span>
          </div>
          <div className="rounded-full w-[130px] h-[130px] bg-buttoncolor flex flex-col justify-center items-center">
            <span className="text-5xl text-primarycolor2">12</span> <span className="text-xl">Hours</span>
          </div>
          <div className="rounded-full w-[130px] h-[130px] bg-buttoncolor flex flex-col justify-center items-center">
            <span className="text-5xl text-primarycolor2">39</span> <span className="text-xl">Minutes</span>
          </div>
          <div className="rounded-full w-[130px] h-[130px] bg-buttoncolor flex flex-col justify-center items-center">
            <span className="text-5xl text-primarycolor2">48</span> <span className="text-xl">Seconds</span>
          </div>
        </div>
        <p className="mt-8 text-white">
          <span className="text-justify text-base">Byte & Crunch is an application created exclusively for Covenant University students, aimed <br />
            at improving your dining experience by eliminating the inconvenience of waiting in long <br />
            lines. We prioritize convenience, efficiency, and effortless food ordering, allowing you to <br />
            easily access various on-campus vendors with just a few taps on their devices.</span>
          <span className="inline-block mt-8">
            With Byte & Crunch, students can enjoy a seamless dining experience, ensuring your <br />
            satisfaction and saving valuable time
          </span>          
        </p>
        <p>
          <h3 className="text-2xl font-semibold">Get notified when we launch</h3>
        </p>


        {/* <button
          onClick={registerModal.onOpen}
          className="h-fit w-[150px] rounded-3xl bg-buttoncolor p-3.5 font-medium text-white drop-shadow-xl hover:scale-110 transition hover:drop-shadow-md hover:text-black hover:opacity-70"
          type="button"
        >
          Start for free
        </button> */}
      </div>
      <div className="flex h-full w-full items-start justify-center">
        <img
          className="object-contain"
          src="https://assets.materialup.com/uploads/45b248c8-e813-4437-8e76-3e54d8621933/preview.jpg"
          width={1920}
          height={1080}
          alt="LandingPageImage"
        />
      </div>
    </div>
  );
};

export default LandingPage;

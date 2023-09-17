/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 gap-2 overflow-x-hidden bg-[#FFE569] p-5 pt-10 md:grid-cols-2 md:gap-8 md:p-20 lg:pt-5">
      <div className="flex flex-col  items-center justify-evenly text-center md:text-left">
        <h1 className="mb-6 text-4xl font-medium uppercase leading-snug text-white md:text-6xl">
          Launching soon
        </h1>

        <div className="grid h-fit w-full grid-cols-2 grid-rows-2 flex-wrap items-center gap-2 md:justify-between lg:grid-cols-4 lg:grid-rows-1 lg:flex-nowrap">
          <div className="mb-4 flex flex-col items-center justify-center md:mb-0">
            <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[130px] md:w-[130px] ">
              <span className="text-3xl text-primarycolor2 md:text-5xl">
                85
              </span>{" "}
              <span className="stroke-[0.7px] text-base md:text-xl">Days</span>
            </div>
          </div>

          <div className="mb-4 flex flex-col items-center justify-center md:mb-0">
            <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[130px] md:w-[130px] ">
              <span className="text-3xl text-primarycolor2 md:text-5xl">
                12
              </span>{" "}
              <span className="stroke-[0.7px] text-base md:text-xl">Hours</span>
            </div>
          </div>

          <div className="mb-4 flex flex-col items-center justify-center md:mb-0">
            <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[130px] md:w-[130px] ">
              <span className="text-3xl text-primarycolor2 md:text-5xl">
                39
              </span>{" "}
              <span className="stroke-[0.7px] text-base md:text-xl">
                Minutes
              </span>
            </div>
          </div>

          <div className="mb-4 flex flex-col items-center justify-center md:mb-0">
            <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[130px] md:w-[130px] ">
              <span className="text-3xl text-primarycolor2 md:text-5xl">
                48
              </span>{" "}
              <span className="stroke-[0.7px] text-base md:text-xl">
                Seconds
              </span>
            </div>
          </div>
        </div>
        <p className="mt-6 md:mt-8">
          <span className="text-justify text-xl md:text-xl">
            Byte & Crunch is an application created exclusively for Covenant
            University students, aimed at improving your dining experience by
            eliminating the inconvenience of waiting in long lines. We
            prioritize convenience, efficiency, and effortless food ordering,
            allowing you to easily access various on-campus vendors with just a
            few taps on their devices.
          </span>
          <span className="mt-4 inline-block md:mt-8">
            With Byte & Crunch, students can enjoy a seamless dining experience,
            ensuring your satisfaction and saving valuable time
          </span>
        </p>

        <p>
          <h3 className="text-xl font-semibold md:text-2xl">
            Get notified when we launch
          </h3>
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
          className="h-[300px] w-full object-cover md:h-auto md:object-contain"
          src="https://assets.materialup.com/uploads/45b248c8-e813-4437-8e76-3e54d8621933/preview.jpg"
          alt="LandingPageImage"
        />
      </div>
    </div>
  );
};

export default LandingPage;

/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FaInstagram, FaSnapchatGhost, FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="grid min-h-full w-full grid-cols-2 grid-rows-1 gap-8 bg-[#FFE569] p-8">
      <div className="flex h-fit w-full flex-col justify-between">
        <h1 className="mb-6 text-2xl font-medium uppercase leading-snug text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Launching soon
        </h1>
        <div className="flex w-[420px] items-center justify-between md:w-[480px] lg:w-[520px] xl:w-[580px] 2xl:w-[620px]">
          <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px] 2xl:h-[130px] 2xl:w-[130px]">
            <span className="text-xl text-primarycolor2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              85
            </span>{" "}
            <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Days
            </span>
          </div>
          <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px] 2xl:h-[130px] 2xl:w-[130px]">
            <span className="text-xl text-primarycolor2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              12
            </span>{" "}
            <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Hours
            </span>
          </div>
          <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px] 2xl:h-[130px] 2xl:w-[130px]">
            <span className="text-xl text-primarycolor2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              39
            </span>{" "}
            <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Minutes
            </span>
          </div>
          <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-buttoncolor md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] xl:h-[120px] xl:w-[120px] 2xl:h-[130px] 2xl:w-[130px]">
            <span className="text-xl text-primarycolor2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              48
            </span>{" "}
            <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Seconds
            </span>
          </div>
        </div>
        <p className="mb-12 mt-8 text-white">
          <span className="text-justify text-base">
            Byte & Crunch is an application created exclusively for Covenant
            University students, aimed <br />
            at improving your dining experience by eliminating the inconvenience
            of waiting in long <br />
            lines. We prioritize convenience, efficiency, and effortless food
            ordering, allowing you to <br />
            easily access various on-campus vendors with just a few taps on
            their devices.
          </span>
          <span className="mt-8 inline-block">
            With Byte & Crunch, students can enjoy a seamless dining experience,
            ensuring your <br />
            satisfaction and saving valuable time
          </span>
        </p>

        <h3 className="text-2xl font-semibold">Get notified when we launch</h3>
        <p className="mb-2 text-sm text-white">
          for updates , discounts , and so much more
        </p>
        <div className="mb-4 flex cursor-pointer rounded-md transition hover:shadow-md">
          <input
            type="text"
            className="w-1/2 rounded-s-md border-none px-4 py-4 text-[0.85rem] outline-none"
            placeholder="Email"
          />
          <div className="flex items-center rounded-e-md bg-buttoncolor text-white">
            <button
              type="button"
              className="rounded-e-md px-4 text-[0.85rem] uppercase"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-3 font-semibold">Become a Courier</p>
          <button
            type="button"
            className="w-3/5 rounded-lg bg-white px-4 py-2 text-[0.85rem] font-medium uppercase text-buttoncolor"
          >
            Apply
          </button>
          <div className="mt-6 inline-flex h-fit w-[fit] text-white">
            <FaTwitter className="h-6 w-6 hover:cursor-pointer hover:opacity-70" />
            <FaSnapchatGhost className="ml-8 h-6 w-6 hover:cursor-pointer hover:opacity-70" />
            <FaInstagram className="ml-8 h-6 w-6 hover:cursor-pointer hover:opacity-70" />
          </div>
        </div>
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

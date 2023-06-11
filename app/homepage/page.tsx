'use client';

import React from 'react'
import useRegisterModal from '../hooks/useRegisterModal';

const LandingPage = () => {
  const registerModal = useRegisterModal();
  return (
    <div className="grid h-full w-full grid-cols-2 grid-rows-1 gap-8 bg-primarycolor2 p-20">
      <div className="flex h-[380px] w-full flex-col justify-between">
        <h1 className="text-5xl font-medium leading-snug">
          Be The Fastest <br /> In Delivering <br /> Your{" "}
          <span className="text-buttoncolor">Food</span>{" "}
        </h1>
        <p className="w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
          facere voluptas accusantium ratione dolore eaque!
        </p>
        <button
          onClick={registerModal.onOpen}
          className="h-fit w-[150px] rounded-3xl bg-buttoncolor p-3.5 font-medium text-white drop-shadow-xl"
          type="button"
        >
          Start for free
        </button>
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
}

export default LandingPage;
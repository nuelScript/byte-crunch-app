import React from 'react'

const HeroBanner = ({heroBanner}: any) => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row justify-between gap-8 bg-gradient-to-b from-primarycolor2 from-85% to-white p-6 ">
        <div className="flex h-[300px] w-full flex-col justify-evenly">
          <div className="h-[200px]">
            <h3 className="mb-8 w-[400px] text-3xl font-medium ">
              The Number {" "}
              <span className="text-buttoncolor">
                {" "}
                #1 <br />{" "}
              </span>
              choice to reduce <br /> waiting in line
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <button
              type="button"
              className="w-[150px] rounded-2xl bg-buttoncolor p-3 text-center font-normal text-white"
            >
              Order Now
            </button>
          </div>
        </div>
        <div className="h-full w-1/2">
          <img
            src={heroBanner.image}
            alt="food carousel"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
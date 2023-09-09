"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] px-2 flex md:mx-auto py-2 md:w-[40%] w-[60%] rounded-full hover:shadow-md transition cursor-pointer ">
      <input
        type="text"
        className="outline-none w-full border-none mx-2"
        placeholder="Search..."
      />
      <div className="p-2 bg-buttoncolor rounded-full text-white">
        <BiSearch size={18} />
      </div>
    </div>
  );
};

export default Search;

"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import SectionList from "./SectionList";
const Footer = () => {
  return (
    <div className="flex h-[30vh] w-screen bg-neutralcolor3 text-white">
      <div className="flex w-2/5 flex-col items-center justify-center">
        <p className="text-3xl font-bold">Byte & Crunch</p>
        <div className="my-4 flex flex-col text-white md:flex md:flex-row [&>*]:mx-4">
          <Link className="mt-4 md:mt-0" href={""}>
            <FaFacebookF />
          </Link>
          <Link className="mt-4 md:mt-0" href={""}>
            <FaLinkedinIn />
          </Link>
          <Link className="mt-4 md:mt-0" href={""}>
            <FaInstagram />
          </Link>
          <Link className="mt-4 md:mt-0" href={""}>
            <FaTwitter />
          </Link>
        </div>
      </div>
      <div className="w-1/5 ">
        <SectionList className="my-4" title="Services">
          <Link href={""}>Faq</Link>
          <Link href={""}>Our Partners</Link>
          <Link href={""}>Contact Us</Link>
          <Link href={""}>What do we offer?</Link>
        </SectionList>
      </div>
      <div className="w-1/5">
        <SectionList className="my-4" title="Info" />
      </div>
      <div className="w-1/5 ">
        <SectionList title="Contact Us">
          <p className="my-4">Lorem ipsum dolor sit amet consectetur</p>
          <p className="my-4">Lorem ipsum dolor sit amet consectetur</p>
        </SectionList>
      </div>
    </div>
  );
};

export default Footer;

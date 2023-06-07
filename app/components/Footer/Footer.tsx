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
    <div className="h-[30vh] w-screen bg-black text-white flex">
      <div className="w-2/5 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold">Byte & Crunch</p>
        <div className="text-white flex my-4 [&>*]:mx-4">
          <Link href={""}>
            <FaFacebookF />
          </Link>
          <Link href={""}>
            <FaLinkedinIn />
          </Link>
          <Link href={""}>
            <FaInstagram />
          </Link>
          <Link href={""}>
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

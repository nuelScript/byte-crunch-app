'use client'

import Container from "../../components/Container/Container";
import { SafeUser } from '@/app/types';
import Image from 'next/image'
import { placeholder } from '@/public/images'
import Heading from '../../components/Heading/Heading'
import Logo from '../../components/Navbar/Logo'


const About = () => {

    return (
        <div className="bg-yellow-200 bg-cover">
            <Container >
            <div className="my-[60px] flex justify-between items-center">
                <div className="flex flex-start flex-col text-left">
                    <h1 className="text-5xl font-bold py-2 text-yellow-500">Byte </h1>
                    <h1 className="text-5xl font-bold py-2"> & </h1>
                    <h1 className="text-5xl font-bold py-2 text-yellow-500"> Crunch</h1>
                    <p className="py-4">Food Delivery Site</p>
                </div>
                <div className=" hidden md:flex py-5">
                    <Image src={placeholder} alt="laptop" className=""/>
                </div>
            </div>
                <div className="px-0 md:py-5 px-12 ">
                    <h4 className="pb-2 font-bold">About</h4>
                    <p className="leading-6">Byte Crunch is a cutting-edge mobile application designed exclusively for students at Covenant University,aimed at enhancing their dining experience by eliminating the need to wait in long lines. Our app prioritizes convenience, efficiency, and seamless food ordering, ensuring that students can access their favorite meals from various on-campus eateries with just a few taps on their smartphones.</p>
                </div>
        </Container>
        </div>
    );
}

export default About;
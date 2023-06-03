'use client'

import { Container } from "@/app/components"
import Image from "next/image"
import { Heading } from "@/app/components"
import { logo } from '../../../public/images/index'


const pages = () => {
    return (
        <div className="bg-yellow-200 ">
            <div className="bg-black flex items-center justify-center">
                <Image src={logo} alt='logo' className="md:h-[300px]" />
            </div>
            <div className="md:pt-12">
                <Container>
                    <div className=" md:flex justify-between items-center">
                        <div className="hidden">
                            <Image alt='Landing Page' src='' />
                        </div>
                        <div className="md:px-96">
                            <h4 className="py-2 font-bold">Landing Page</h4>
                            <p className="leading-6">Seamless Sign-In with Google Signing up is quick and
                                easy. Simply click the 'Sign Up' button below, and you'll
                                be prompted to authenticate using your Google account.
                                No need to remember another username or password.
                                Get started in seconds and start exploring</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default pages
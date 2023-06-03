'use client'

import { Container } from "@/app/components"
import Image from "next/image"
import { third } from "../../../public/images/index"

const Cpage = () => {
    return (
        <div className="bg-yellow-200">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="px-0 md:flex flex-col flex-1 px-44">
                        <h4 className="py-4 font-bold">Check Out/Cart Page</h4>
                        <p className="py-2">Welcome to the Checkout Page on Byte & Crunch! Here,you can review your selected items, finalize your order,and make a secure payment. Let's walk you through the features and options available on this page.</p>
                        <div className="px-4">
                            <p>1. Order Summary On the Checkout Page, you'll find a detailed order summary displaying all the products you have selected. This summary includes the quantity, size, and individual prices of each item. Take a moment to review your order and ensure it matches your preferences.</p>
                            <p> 2.Total Amount At the bottom of the order summary,you will find the total amount for your entire order. This includes the prices of all the selected products,as well as any applicable taxes or fees. The total amount provides you with a clear understanding of the final cost.</p>
                            <p>3. Remove Button Changed your mind about a
                                particular item? No worries! Click on the "Remove" button next to the product you wish to remove from your order. This ensures that only the items you truly desire are included in your final purchase</p>
                            <p>4. Secure Payment Process To complete your order, click on the "Checkout" button. Byte & Crunch has partnered with Flutterwave, a trusted payment gateway, to ensure a secure and seamless payment experience. When you click the "Checkout" button,you will be redirected to the Flutterwave payment page</p>
                            <p> 5. Cancellation Option If you decide not to proceed with the order, you can click the "Cancel" button to return to the previous page or abort the transaction. We understand that circumstances may change, and we want to provide you with flexibility throughout the ordering process</p>
                        </div>
                        <p className="pt-2">Byte & Crunch is committed to keeping your payment
                            information secure. Flutterwave follows strict industry standards to protect your sensitive data during the payment transaction. Feel confident knowing that your personal and financial information is in safe hands.Complete your order with ease and convenience on Byte & Crunch's Checkout Page. We appreciate your trust in
                            us to deliver a delightful dining experience</p>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center items-center py-40 border-color">
                        <Image alt="Hpage" src={third} className="w-full h-full rounded-xl border-color" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cpage
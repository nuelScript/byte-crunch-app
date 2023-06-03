'use client'

import { Container } from "@/app/components"
import { second } from '../../../public/images/index'
import Image from 'next/image'

const Vpage = () => {
    return (
        <div className="bg-yellow-200">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="hidden md:flex flex-1 justify-center items-center py-40">
                        <Image alt="Vendor_page" src={second} className="w-full h-full" />
                    </div>
                    <div className="px-1 md:flex flex-col flex-1 px-44">
                        <h4 className="py-4 font-bold">Vendour Page</h4>
                        <p className="py-2">Welcome to the Vendors Page on Byte & Crunch! Here,you'll find a wide array of vendors offering delicious meals and delightful treats. Let us guide you through the features and options available on this page.</p>
                        <div className="px-3">
                            <p>1.Quick Navigation Navigate through our list of available vendors effortlessly. &iscover local
                                restaurants, food trucks, and cafes that are ready to serve you. Our quick navigation menu allows you to browse through vendors easily, ensuring you find the perfect culinary experience.</p>
                            <p>2.Explore Available Products Once you've selected a vendor, dive into their offerings. Get ready to tantalize your taste buds with an extensive list of products.From appetizers to main courses, desserts, and beverages, we've got you covered. Each product comes with clear details and mouth-watering image</p>
                            <p>3.Size Options and Pricing We understand that
                                everyone has different preferences. That's why our vendors provide size options for their products. You'll find clear pricing information for each size, helping you make informed decisions based on your appetite
                                and budget.</p>
                            <p>4.Order Button Ready to add a product to your order list? Simply click on the "Order" button next to your desired item. Byte & Crunch will save your selection,making it easier for you to keep track of your choice.</p>
                            <p>5.Check Order Button After browsing through multiple vendors and selecting various products, use the"Check Order" button to review your selected items.Ensure that your order is accurate and meets your cravings before proceeding to the checkout process</p>
                        </div>
                        <p className="py-2 md:pt-2">Embark on a culinary journey with Byte & Cruch's
                            Vendors Page. Explore a variety of cuisines, flavors, and dishes, all in one place. Get ready to treat yourself to the ultimate dining experience.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Vpage
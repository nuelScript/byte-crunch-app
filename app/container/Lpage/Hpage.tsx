'use client'

import { Container } from "@/app/components"
import Image from "next/image"
import { second } from '../../../public/images/index'

const Hpage = () => {
  return (
    <div className="bg-yellow-200">
      <Container>
        <div className=" md:flex justify-between items-center">
          <div className="px-1 md:flex flex-col flex-1 px-44">
            <h4 className="py-4 font-bold">Home Page</h4>
            <p className="py-2">Beautiful laid out home page including,</p>
           <div className="px-2 md:px-4">
           <p>1. Quick Order Feeling indecisive or in a rush? Click the 'Quick Order' button below to explore popular meal options and place your order in no time. Enjoy the convenience of a streamlined ordering process with
              just a single click.</p>
            <p> 2.Search for Your Favorite Cuisine Craving a specific dish or cuisine? Use our powerful search feature to
              find exactly what you're looking for. Simply enter your desired meal or cuisine in the search bar below, and Byte & Crunch will present you with a variety of
              options from our partnered vendors.</p>
            <p>3. Popular Meals Discover the most loved and sought after meals on Byte & Crunch. Our curated list of popular dishes is sure to satisfy your taste buds. From
              mouthwatering burgers to delightful vegetarian delights, these meals are highly recommended by our
              community of food enthusiasts.</p>
            <p>4. Available Vendors Byte & Crunch collaborates with a wide range of trusted vendors, offering a diverse
              selection of cuisines and dining experiences. Explore our list of available vendors below and find your next go-to spot for delectable meals.</p>
            <p> 5. Cart Your Pending Orders Never lose track of your
              orders again. Keep an eye on your pending orders in the cart section. See what's cooking and get updates on the status of your delivery. Rest assured, Byte & Crunch is committed to ensuring a smooth and seamless ordering experience</p>
           </div>
          </div>
         <div className="hidden md:flex flex-1 justify-center items-center py-40 border-color">
         <Image alt="Hpage" src={second} className="w-full h-full rounded-xl border-color"/>
         </div>
        </div>
      </Container>
    </div>
  )
}

export default Hpage
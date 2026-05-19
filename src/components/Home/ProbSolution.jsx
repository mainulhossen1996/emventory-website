import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";


const ProbSolution = () => {
  const features = [
    {
      title: "Multi channel inventory manager",
      description: "Track, update, and organize your products seamlessly across multiple sales channels in real-time with complete control and visibility.",
      icon: "/images/icon/inventory.png"
    },
    {
      title: "In person POS operation",
      description: "Operate your retail counter smoothly and take your business online instantly with a fast, fully integrated store setup.",
      icon: "/images/icon/point-of-sale.png"
    },
    {
      title: "Theme based e-commerce",
      description: "Connect and customize modern e-commerce themes that align with your brand identity while ensuring smooth functionality and performance.",
      icon: "/images/icon/leaf.png"
    },
    {
      title: "Sales & Marketing tool",
      description: "Turn insights into action with built-in sales analytics and marketing features that help you reach the right customers, increase engagement, and grow revenue.",
      icon: "/images/icon/tag.png"
    },
    {
      title: "Delivery channel integration",
      description: "Manage deliveries without the hassle. Connect with trusted logistics partners, automate dispatching, and keep customers informed from order to doorstep.",
      icon: "/images/icon/delivery.png"
    },
    {
      title: "Payment gateway integration",
      description: "Integrate secure and trusted payment gateways to provide your customers with smooth, flexible, and reliable checkout experiences across all platforms.",
      icon: "/images/icon/card.png"
    },

  ];


  return (
   <>


{/*cards section*/}
<div className="bg-[#000000]">
  <div className="bg-blue-50 rounded-t-[50px]">
    <div className="py-24 max-full mx-auto">
      <div className='max-w-screen-xl mx-auto flex flex-col gap-4 mb-20 items-center'>
            <p className='text-lg text-blue-500'>
                Features & Benefits
            </p>
        <h1 className="text-5xl">How emventory automate your business</h1>
        <p className="text-gray-600 font-normal text-xl ">Packed with 20+ features for every step of business operations</p>
      </div>

    <div className="max-w-screen-xl mx-auto flex gap-6">
      <div className="w-full">
      <div className="grid grid-cols-3">
  {features.map((feature, index) => (
    <div
      key={index}
      className={`
        p-6 flex flex-col justify-between
        border-gray-200

        ${index % 3 !== 2 ? "border-r border-dashed" : ""} 
        ${index < features.length - 3 ? "border-b border-dashed " : ""}

        ${feature.isLastCard ? "bg-blue-500" : ""}
      `}
    >
      <div className="my-4 w-10 h-10">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-2xl font-normal mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm font-light">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
          </div>
   
        </div>
      </div>
      </div>
      </div>

{/*onboarding section*/}
{/* <div className=" mx-auto mb-[120px]">
  <div className="text-center ">
    <h1 className="text-4xl font-extrabold uppercase mb-4">Fastest onboarding</h1>
    <p className="text-gray-600 font-normal text-xl">Get up and running in minutes — no technical skills needed. Start selling faster than ever.</p>
  </div>

<div className="flex justify-center max-w-screen-xl mx-auto ">
 <div className="mt-6 flex flex-row justify-between items-end  gap-[10%] "> 
  <div className="w-1/3 pb-10 mb-4 ">
    <p className="text-blue-700 font-semibold text-3xl hover:underline underline-blue-500 mb-4 flex flex-row items-center gap-4 ">
    Sign Up <BsArrowRight />
    </p>
    <p >Create your account in seconds — no setup hassle.</p>

  </div>
  <div className="w-full h-auto ">
  <Image
    src="/images/demo2.png"
    alt=""
    width={1600}
    height={1600}
    className="object-cover rounded-xl  " />
  </div>
  </div>
</div>
</div> */}
    </>
  );
}

export default ProbSolution;
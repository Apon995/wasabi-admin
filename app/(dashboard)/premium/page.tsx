"use client";
import { Check } from "lucide-react";
import React from "react";

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_228_5838)">
      <path
        d="M9.18022 2.34439C9.21593 2.15323 9.31737 1.98057 9.46697 1.85632C9.61658 1.73208 9.80492 1.66406 9.99939 1.66406C10.1939 1.66406 10.3822 1.73208 10.5318 1.85632C10.6814 1.98057 10.7829 2.15323 10.8186 2.34439L11.6944 6.97606C11.7566 7.30535 11.9166 7.60824 12.1536 7.8452C12.3905 8.08216 12.6934 8.24219 13.0227 8.30439L17.6544 9.18022C17.8456 9.21593 18.0182 9.31737 18.1425 9.46697C18.2667 9.61658 18.3347 9.80492 18.3347 9.99939C18.3347 10.1939 18.2667 10.3822 18.1425 10.5318C18.0182 10.6814 17.8456 10.7829 17.6544 10.8186L13.0227 11.6944C12.6934 11.7566 12.3905 11.9166 12.1536 12.1536C11.9166 12.3905 11.7566 12.6934 11.6944 13.0227L10.8186 17.6544C10.7829 17.8456 10.6814 18.0182 10.5318 18.1425C10.3822 18.2667 10.1939 18.3347 9.99939 18.3347C9.80492 18.3347 9.61658 18.2667 9.46697 18.1425C9.31737 18.0182 9.21593 17.8456 9.18022 17.6544L8.30439 13.0227C8.24219 12.6934 8.08216 12.3905 7.8452 12.1536C7.60824 11.9166 7.30535 11.7566 6.97606 11.6944L2.34439 10.8186C2.15323 10.7829 1.98057 10.6814 1.85632 10.5318C1.73208 10.3822 1.66406 10.1939 1.66406 9.99939C1.66406 9.80492 1.73208 9.61658 1.85632 9.46697C1.98057 9.31737 2.15323 9.21593 2.34439 9.18022L6.97606 8.30439C7.30535 8.24219 7.60824 8.08216 7.8452 7.8452C8.08216 7.60824 8.24219 7.30535 8.30439 6.97606L9.18022 2.34439Z"
        stroke="black"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6641 1.66797V5.0013"
        stroke="black"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 3.33203H15"
        stroke="black"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33073 18.3333C4.2512 18.3333 4.9974 17.5871 4.9974 16.6667C4.9974 15.7462 4.2512 15 3.33073 15C2.41025 15 1.66406 15.7462 1.66406 16.6667C1.66406 17.5871 2.41025 18.3333 3.33073 18.3333Z"
        stroke="black"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_228_5838">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function page() {
  return (
    
      <div className="w-full">
     
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Premium Plans</h1>
            <p className="text-light-gray ">
              Upgrade your account to unlock advanced features
            </p>
          </div>
      
        {/* Highlighted Premium Banner */}
        <div className="mt-5 bg-linear-to-r from-[#FEFCE8] to-active-route border border-[#FFF085] rounded-2xl p-6 [box-shadow:0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] ">
          <div className="flex md:flex-row-reverse flex-col justify-between">
            <div className="flex md:flex-col flex-row justify-between md:justify-start  gap-2 md:w-[30%] lg:w-fit w-full">
              <button className="bg-primary hover:cursor-pointer px-4 py-2 rounded-lg text-sm font-medium shadow">
                Upgrade Now
              </button>

              <button className=" hover:cursor-pointer px-4 py-2 rounded-lg text-sm font-medium ">
                Learn More
              </button>
            </div>

            <div>
              {/* Save 20% */}
              <div className="flex md:flex-row flex-col md:items-center gap-2 md:mt-0 mt-3">
                
                <div className="text-lg font-normal text-black flex flex-row gap-2">
                  <StarIcon /> Upgrade to Premium
                </div>
                <span className="bg-primary text-xs font-medium text-black px-2 py-1 rounded-md w-fit">
                  Save 20%
                </span>
              </div>

              <p className="text-[#364153] mt-3 md:mt-1">
                Unlock advanced features and scale your school management
                platform to the next level.
              </p>

              <div className="flex md:flex-row flex-col gap-2 items-center justify-between mt-5">
                <ul className=" space-y-2 text-black font-normal">
                  <li>✔ Unlimited courses and students</li>
                  <li>✔ Custom branding & white-label</li>
                </ul>
                <ul className=" space-y-2 text-black font-normal">
                  <li>✔ Advanced analytics & reports</li>
                  <li>✔ Priority support & training</li>
                </ul>
              </div>

              <div className="text-2xl text-black font-normal mt-4 flex flex-col">
                <p>
                  {" "}
                  $99<span className="text-sm font-normal">/month</span>
                </p>

                <span className="text-sm text-[#364153]">
                  or $950/year (20% off)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic */}
          <div className="bg-white p-6 rounded-2xl relative [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] ">
            <div className="absolute top-4 right-4 bg-[#DCFCE7] text-[#008236] px-2 py-1 rounded-md text-xs">
              Current
            </div>

            <h3 className="text-xl font-normal text-navigate">Basic</h3>
            <p className="text-2xl font-normal text-navigate">
              {" "}
              $0<span className="text-sm font-normal">/month</span>
            </p>

            <ul className="mt-4 space-y-2 text-navigate font-normal text-sm">
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" /> Up to 100 students
              </li>
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" /> 5 courses
              </li>
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" /> Basic reports
              </li>
            </ul>

            <button className="mt-6 w-full text-navigate border border-black/10 font-medium px-4 py-2 rounded-2xl cursor-default">
              Current Plan
            </button>
          </div>

          {/* Professional */}
          <div className="bg-white p-6 rounded-2xl relative [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] ">
            <h3 className="text-xl font-normal text-navigate">Professional</h3>
            <p className="text-2xl font-normal text-navigate">
              {" "}
              $49<span className="text-sm font-normal">/month</span>
            </p>

            <ul className="mt-4 space-y-2 text-navigate font-normal text-sm">
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" /> Up to 500 students
              </li>
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" />
                Unlimited courses
              </li>
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" />
                Advanced analytics
              </li>
            </ul>

            <button className="mt-6 w-full bg-primary text-navigate font-medium px-4 py-2 rounded-2xl cursor-default">
              Upgrade
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-6 rounded-2xl relative [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] ">
            <h3 className="text-xl font-normal text-navigate">Enterprise</h3>
            <p className="text-2xl font-normal text-navigate">
              {" "}
              $99<span className="text-sm font-normal">/month</span>
            </p>

            <ul className="mt-4 space-y-2 text-navigate font-normal text-sm">
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" />
                Unlimited students
              </li>
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" /> Custom branding
              </li>
              <li className="flex flex-row items-center gap-0.5">
                <Check className="w-4 h-4 text-[#00A63E]" /> Priority support
              </li>
            </ul>

            <button className="mt-6 w-full text-navigate bg-primary font-medium px-4 py-2 rounded-2xl cursor-default">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    
  );
}

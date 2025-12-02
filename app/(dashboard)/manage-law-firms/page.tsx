"use client";

import React, { useState } from "react";
import { ChevronRight, Eye, Heart, MapPin, Plus, SquarePen, Trash2, Users } from "lucide-react";
import AddQuizModal from "@/app/components/quizes/modals/AddQuizModal";
import EditQuizModal from "@/app/components/quizes/modals/EditQuizModal";
import ViewQuizModal from "@/app/components/quizes/modals/ViewQuizModal";
import CreateNewFirmsModal from "@/app/components/manage-law-firms/modals/CreateNewFirmsModal";

const IconOne = () => (
  <svg
    width="104"
    height="104"
    viewBox="0 0 104 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_2435_5213)">
      <path
        d="M12 18C12 9.16344 19.1634 2 28 2H76C84.8366 2 92 9.16344 92 18V66C92 74.8366 84.8366 82 76 82H28C19.1634 82 12 74.8366 12 66V18Z"
        fill="url(#paint0_linear_2435_5213)"
        shapeRendering="crispEdges"
      />
      <path
        d="M58.6641 48.6673L63.6641 35.334L68.6641 48.6673C67.2141 49.7507 65.4641 50.334 63.6641 50.334C61.8641 50.334 60.1141 49.7507 58.6641 48.6673Z"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.3359 48.6673L40.3359 35.334L45.3359 48.6673C43.8859 49.7507 42.1359 50.334 40.3359 50.334C38.5359 50.334 36.7859 49.7507 35.3359 48.6673Z"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.6641 57H60.3307"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 27V57"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 33.6673H40.3333C43.6667 33.6673 48.6667 32.0007 52 30.334C55.3333 32.0007 60.3333 33.6673 63.6667 33.6673H67"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_2435_5213"
        x="0"
        y="0"
        width="104"
        height="104"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_2435_5213"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2435_5213"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="3"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_2435_5213"
        />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_2435_5213"
          result="effect2_dropShadow_2435_5213"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_2435_5213"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2435_5213"
        x1="12"
        y1="2"
        x2="92"
        y2="82"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#155DFC" />
        <stop offset="1" stopColor="#432DD7" />
      </linearGradient>
    </defs>
  </svg>
);

const IconTwo = () => (
  <svg
    width="104"
    height="104"
    viewBox="0 0 104 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_2435_5313)">
      <path
        d="M12 18C12 9.16344 19.1634 2 28 2H76C84.8366 2 92 9.16344 92 18V66C92 74.8366 84.8366 82 76 82H28C19.1634 82 12 74.8366 12 66V18Z"
        fill="url(#paint0_linear_2435_5313)"
        shapeRendering="crispEdges"
      />
      <path
        d="M48.6641 42H55.3307"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.6641 35.334H55.3307"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.3307 56.9993V51.9993C55.3307 51.1153 54.9795 50.2674 54.3544 49.6423C53.7293 49.0172 52.8815 48.666 51.9974 48.666C51.1133 48.666 50.2655 49.0172 49.6404 49.6423C49.0153 50.2674 48.6641 51.1153 48.6641 51.9993V56.9993"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.0026 38.666H38.6693C37.7852 38.666 36.9374 39.0172 36.3122 39.6423C35.6871 40.2674 35.3359 41.1153 35.3359 41.9993V53.666C35.3359 54.5501 35.6871 55.3979 36.3122 56.023C36.9374 56.6482 37.7852 56.9994 38.6693 56.9994H65.3359C66.22 56.9994 67.0678 56.6482 67.693 56.023C68.3181 55.3979 68.6693 54.5501 68.6693 53.666V36.9993C68.6693 36.1153 68.3181 35.2674 67.693 34.6423C67.0678 34.0172 66.22 33.666 65.3359 33.666H62.0026"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 57V30.3333C42 29.4493 42.3512 28.6014 42.9763 27.9763C43.6014 27.3512 44.4493 27 45.3333 27H58.6667C59.5507 27 60.3986 27.3512 61.0237 27.9763C61.6488 28.6014 62 29.4493 62 30.3333V57"
        stroke="white"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_2435_5313"
        x="0"
        y="0"
        width="104"
        height="104"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_2435_5313"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2435_5313"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="3"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_2435_5313"
        />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="7.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_2435_5313"
          result="effect2_dropShadow_2435_5313"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_2435_5313"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2435_5313"
        x1="12"
        y1="2"
        x2="92"
        y2="82"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C950" />
        <stop offset="1" stopColor="#009966" />
      </linearGradient>
    </defs>
  </svg>
);

export default function page() {
  const [addFirms , setAddFirms] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Manage Law firm profiles</h1>
            <p className="text-light-gray ">Approve all Profiles</p>
          </div>

          <div className="w-full">
            <button
              onClick={()=> setAddFirms(!addFirms)}
              className=" w-fit float-right [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] text-black bg-primary px-4 py-2 rounded-2xl flex flex-row items-center gap-2 hover:cursor-pointer "
            >
              {" "}
              <Plus className="w-5 h-5" /> Create New Firms
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">

          {/* ---first-card===== */}

           <div className=" rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden">

            <div className="relative bg-[#EEFDF5] p-6 flex items-center  justify-center">
              <div className="absolute top-3 right-3 bg-primary text-navigate text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>

              <IconOne/>
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-normal text-navigate ">
                Freshfields
              </h2>
              <p className="text-sm text-[#4A5565]">
                Elite International Firm
              </p>

              {/* Location + Employees */}
              <div className="flex items-center justify-between text-sm text-[#4A5565] mt-2">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-primary " /> London, Global
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} className="text-primary" /> 2800+
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-3 text-navigate font-medium">
                <span className="px-3 py-1 rounded-full border text-xs border-black/10">
                  Antitrust
                </span>
                <span className="px-3 py-1 rounded-full border text-xs border-black/10">
                  Text
                </span>
                <span className="px-3 py-1 rounded-full border text-xs border-black/10 ">
                  +3 more
                </span>
              </div>

              <div className="flex items-center flex-row-reverse gap-2 mt-8">
                <button className="flex items-center gap-2 bg-primary hover:cursor-pointer px-4 py-2 rounded-full transition text-navigate font-medium w-full justify-center ">
                  View Profile <ChevronRight className="w-5 h-5" />
                </button>

                <button className=" hover:cursor-pointer p-2 border border-black/10  rounded-full transition ">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>







          {/* --second-cards--- */}
          <div className=" rounded-2xl bg-white shadow-md border border-gray-200 overflow-hidden">

            <div className="relative bg-linear-to-r from-[#EFF6FF] to-[#EEF2FF] p-6 flex items-center  justify-center">
              <div className="absolute top-3 right-3 bg-primary text-navigate text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>

              <IconTwo />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-normal text-navigate ">
                Broadfields Law
              </h2>
              <p className="text-sm text-[#4A5565]">
                Excellence in Corporate Law
              </p>

              {/* Location + Employees */}
              <div className="flex items-center justify-between text-sm text-[#4A5565] mt-2">
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-primary " /> London, UK
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} className="text-primary" /> 250+
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-3 text-navigate font-medium">
                <span className="px-3 py-1 rounded-full border text-xs border-black/10">
                  Corporate Law
                </span>
                <span className="px-3 py-1 rounded-full border text-xs border-black/10">
                  M&A
                </span>
                <span className="px-3 py-1 rounded-full border text-xs border-black/10 ">
                  +2 more
                </span>
              </div>

              <div className="flex items-center flex-row-reverse gap-2 mt-8">
                <button className="flex items-center gap-2 bg-primary hover:cursor-pointer px-4 py-2 rounded-full transition text-navigate font-medium w-full justify-center ">
                  View Profile <ChevronRight className="w-5 h-5" />
                </button>

                <button className=" hover:cursor-pointer p-2 border border-black/10  rounded-full transition ">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      {
        addFirms &&
        <CreateNewFirmsModal onClose={()=> setAddFirms(false)}/>
      }

    </>
  );
}

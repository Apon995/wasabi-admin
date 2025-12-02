"use client";

import React, { useState } from "react";
import { Eye, Plus, SquarePen, Trash2 } from "lucide-react";
import { DueIcon } from "../tasks/page";

const Icon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0H36C47.0457 0 56 8.95431 56 20V36C56 47.0457 47.0457 56 36 56H20C8.95431 56 0 47.0457 0 36V20Z"
      fill="url(#paint0_linear_2162_118)"
    />
    <path
      d="M25.6641 28H30.3307"
      stroke="#4A5565"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.6641 23.334H30.3307"
      stroke="#4A5565"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.3307 38.4993V34.9993C30.3307 34.3805 30.0849 33.787 29.6473 33.3494C29.2097 32.9118 28.6162 32.666 27.9974 32.666C27.3786 32.666 26.7851 32.9118 26.3475 33.3494C25.9099 33.787 25.6641 34.3805 25.6641 34.9993V38.4993"
      stroke="#4A5565"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0026 25.666H18.6693C18.0504 25.666 17.4569 25.9118 17.0194 26.3494C16.5818 26.787 16.3359 27.3805 16.3359 27.9993V36.166C16.3359 36.7849 16.5818 37.3783 17.0194 37.8159C17.4569 38.2535 18.0504 38.4994 18.6693 38.4994H37.3359C37.9548 38.4994 38.5483 38.2535 38.9859 37.8159C39.4234 37.3783 39.6693 36.7849 39.6693 36.166V24.4993C39.6693 23.8805 39.4234 23.287 38.9859 22.8494C38.5483 22.4118 37.9548 22.166 37.3359 22.166H35.0026"
      stroke="#4A5565"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 38.5V19.8333C21 19.2145 21.2458 18.621 21.6834 18.1834C22.121 17.7458 22.7145 17.5 23.3333 17.5H32.6667C33.2855 17.5 33.879 17.7458 34.3166 18.1834C34.7542 18.621 35 19.2145 35 19.8333V38.5"
      stroke="#4A5565"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2162_118"
        x1="0"
        y1="0"
        x2="56"
        y2="56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F4F6" />
        <stop offset="1" stopColor="#E5E7EB" />
      </linearGradient>
    </defs>
  </svg>
);

const manageJobs = [
  {
    title: "StartupX",
    subtitle: "Frontend Developer",
    date: "Oct 5, 2025",
    status: "Active",
  },

  {
    title: "Enterprise Solutions",
    subtitle: "Business Analyst",
    date: "Sep 20, 2025",
    status: "Active",
  },

  {
    title: "FinTech Global",
    subtitle: "Financial Analyst",
    date: "Oct 7, 2025",
    status: "Active",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-[#DCFCE7] text-[#008236]";
    case "Draft":
      return "text-[#364153] bg-[#F3F4F6]";

    default:
      return "text-[#364153] bg-[#F3F4F6]";
  }
};
export default function page() {
  return (
    <>
      <div className="space-y-6">
        <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Manage Jobs</h1>
            <p className="text-light-gray ">Approve all jobs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {manageJobs.map((course, index) => (
            <div
              key={index}
              className="bg-white space-y-8 border-2 border-[#E5E7EB] rounded-xl p-4  flex flex-col justify-between [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="flex flex-col  gap-4">
                <div className="flex justify-between items-start mb-1">
                  <Icon />
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(
                      course.status
                    )}`}
                  >
                    {course.status}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-navigate">
                    {course.title}
                  </h2>
                  <p className="text-thin-gray text-base mb-2">
                    {course.subtitle}
                  </p>
                  <div className="flex flexrow items-center gap-2">
                    <DueIcon />
                    <span className="text-[#6A7282]">{course.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <button className="flex items-center gap-2 hover:cursor-pointer px-4 py-2 rounded-full transition text-navigate font-medium w-full justify-center border border-black/10">
                  <Eye className="w-4 h-4" /> View
                </button>

                <button className=" hover:cursor-pointer p-2 border border-black/10  rounded-full transition ">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

'use client';

import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { DeleteIcon } from "../page";
import AddStudentModal from "@/app/components/student/modals/AddStudentModal";

const dummyStudents = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    grade: "10th",
    courses: 5,
    status: "Active",
    purchase: "Free",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@email.com",
    grade: "11th",
    courses: 6,
    status: "Active",
    purchase: "Free",
    initials: "MC",
  },
  {
    id: 3,
    name: "Emma Williams",
    email: "emma.w@email.com",
    grade: "9th",
    courses: 4,
    status: "Inactive",
    purchase: "Free",
    initials: "EW",
  },
  {
    id: 4,
    name: "James Davis",
    email: "james.d@email.com",
    grade: "12th",
    courses: 7,
    status: "Active",
    purchase: "Pro",
    initials: "JD",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    email: "olivia.m@email.com",
    grade: "10th",
    courses: 5,
    status: "Active",
    purchase: "Pro",
    initials: "OM",
  },
];

export const AddStudentIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6693 14V12.6667C10.6693 11.9594 10.3883 11.2811 9.88822 10.781C9.38812 10.281 8.70985 10 8.0026 10H4.0026C3.29536 10 2.61708 10.281 2.11699 10.781C1.61689 11.2811 1.33594 11.9594 1.33594 12.6667V14"
      stroke="black"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.0026 7.33333C7.47536 7.33333 8.66927 6.13943 8.66927 4.66667C8.66927 3.19391 7.47536 2 6.0026 2C4.52984 2 3.33594 3.19391 3.33594 4.66667C3.33594 6.13943 4.52984 7.33333 6.0026 7.33333Z"
      stroke="black"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6641 5.33301V9.33301"
      stroke="black"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6641 7.33301H10.6641"
      stroke="black"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-[#DCFCE7] text-[#008236]";
    case "Inactive":
      return "bg-[#F5F5F5] text-[#1A1A1A]";
    default:
      return "bg-[#F5F5F5] text-[#1A1A1A]";
  }
};

const getPurchaseColor = (status: string) => {
  switch (status) {
    case "Pro":
      return "bg-[#FEF9C2] text-[#999900]";
    case "Free":
      return "bg-[#F5F5F5] text-[#1A1A1A]";
    default:
      return "bg-[#F5F5F5] text-[#1A1A1A]";
  }
};

export default function page() {
  const [AddStudent , setAddStudent] = useState(false);

  return (
   <>

    <div className=" rounded-lg  space-y-4">
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
        <div className="w-full">
          <h1 className="text-xl font-semibold ">Students</h1>
          <p className="text-light-gray ">
            Manage all students enrolled in your platform
          </p>
        </div>

        <div className="w-full ">
          <button onClick={()=> setAddStudent(!AddStudent)} className=" w-fit float-right [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] text-black bg-primary px-5 py-2 rounded-2xl flex flex-row items-center gap-2 hover:cursor-pointer ">
            {" "}
            <AddStudentIcon /> Add Student
          </button>
        </div>
      </div>

      <div className=" [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] space-y-4 bg-white lg:p-6 p-4 rounded-xl">
        <div className="flex md:flex-row justify-between flex-col gap-6 md:gap-0">
          <div className=" lg:w-1/2 md:w-2/3 w-full flex items-center justify-center px-3 rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 ">
            <SearchIcon />
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search students..."
              className="w-full text-ash-color h-full nav-search font-normal bg-transparent outline-none py-2 placeholder:text-thin-gray"
            />
          </div>

          <div>
            <select
              name="year"
              id="year"
              className=" outline-none w-full px-4 py-2 rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700"
            >
              <option value="all-year">All year</option>
              <option value="first-year">first year</option>
            </select>
          </div>
        </div>

        {/* ---tab-and-large-screen-view--- */}
        <div className="overflow-x-auto border rounded-xl border-black/10 hidden lg:block">
          <table className="w-full text-left border-collapse  ">
            <thead>
              <tr className="border-b border-black/10 text-navigate md:text-sm 2xl:text-base h-14">
                <th className="  pl-8">Student</th>
                <th className=" pl-8">Email</th>
                <th className=" px-4 text-center">Year Group</th>
                <th className=" px-4 text-center">Courses</th>
                <th className=" px-4">Status</th>
                <th className=" px-4">Purchas plans</th>

                <th className=" px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-black/10 hover:bg-active-route/70 text-navigate"
                >
                  <td className="py-3 px-4 flex items-center gap-2 text-center ">
                    <div className="w-8 h-8 rounded-full bg-active-route hidden lg:flex items-center justify-center font-normal text-sm text-black">
                      {student.initials}
                    </div>
                    {student.name}
                  </td>
                  <td className="py-3 px-4 text-thin-gray">{student.email}</td>
                  <td className="py-3 px-4 text-center">{student.grade}</td>
                  <td className="py-3 px-4 text-center">{student.courses}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        student.status
                      )}
                            `}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-center ${getPurchaseColor(
                        student.purchase
                      )}
                            `}
                    >
                      {student.purchase}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center ">
                    <button className="hover:cursor-pointer mx-auto text-center">
                      <DeleteIcon fill="red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ----only-mobile-screen-view---- */}
      <div className=" flex flex-wrap items-center justify-center gap-8 lg:hidden  ">
        {dummyStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white border border-black/10 rounded-xl p-4 shadow-sm md:min-w-xs w-full md:w-fit"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-active-route flex items-center justify-center font-semibold text-black">
                {student.initials}
              </div>
              <div>
                <p className="font-semibold text-navigate text-base">
                  {student.name}
                </p>
                <p className="text-thin-gray text-sm">{student.email}</p>
              </div>
            </div>

            <div className=" flex flex-col gap-2 text-sm text-navigate">
              <div className="flex items-center gap-4">
                <p className="font-medium w-28">Grade</p>
                <span>:</span>
                <p className="flex-1">{student.grade}</p>
              </div>

              <div className="flex items-center  gap-4">
                <p className="font-medium w-28">Courses</p>
                <span>:</span>
                <p className="flex-1">{student.courses}</p>
              </div>

              <div className="flex items-center  gap-4">
                <p className="font-medium w-28">Status</p>
                <span>:</span>
                <div className="flex-1">
                  <span
                    className={`px-2 py-0.5 inline-block rounded-full text-xs font-medium w-fit ${getStatusColor(
                      student.status
                    )}`}
                  >
                    {student.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center  gap-4">
                <p className="font-medium w-28">Purchas plans</p>
                <span>:</span>
                <div className="flex-1">
                  <span
                    className={`px-2 py-0.5 inline-block rounded-full text-xs font-medium w-fit ${getPurchaseColor(
                      student.purchase
                    )}`}
                  >
                    {student.purchase}
                  </span>
                </div>
              </div>

              <div className="flex items-center  gap-4">
                <p className="w-28">Action </p>
                <span>:</span>
                <button className="hover:cursor-pointer flex-1">
                  <DeleteIcon fill="red" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    {
      AddStudent && 
      <AddStudentModal onClose={()=> setAddStudent(false)} />
    }
   
   
   </>
  );
}

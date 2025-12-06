"use client";

import React, { useState } from "react";
import { Eye, Plus, SquarePen, Trash2 } from "lucide-react";
import CreateTaskModal from "@/app/components/tasks/modals/CreateTaskModal";
import EditTaskModal from "@/app/components/tasks/modals/EditTaskModal";

const tasks = [
  {
    title: "Mathematics - Chapter 5",
    subtitle: "Advanced Mathematics",
    tag: "Mathematics",
    status: "In Progress",
    questions: 20,
    duration: "30 min",
    attempts: 45,
  },
  {
    title: "Physics - Mechanics",
    subtitle: "Fundamentals of Motion",
    tag: "Science",
    status: "Pending",
    questions: 15,
    duration: "25 min",
    attempts: 38,
  },
  {
    title: "English Grammar - Unit 3",
    subtitle: "Advanced Grammar Rules",
    tag: "English",
    status: "Pending",
    questions: 18,
    duration: "20 min",
    attempts: 52,
  },
  {
    title: "World History - Chapter 2",
    subtitle: "Ancient Civilizations",
    tag: "History",
    status: "In Progress",
    questions: 22,
    duration: "35 min",
    attempts: 17,
  },
  {
    title: "Chemistry - Basics of Atoms",
    subtitle: "Introduction to Chemistry",
    tag: "Science",
    status: "Completed",
    questions: 12,
    duration: "15 min",
    attempts: 9,
  },
  {
    title: "Creative Writing - Module 1",
    subtitle: "Writing Fundamentals",
    tag: "English",
    status: "Completed",
    questions: 10,
    duration: "20 min",
    attempts: 11,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-[#FEF9C2] text-[#A65F00]";
    case "In Progress":
      return "text-[#1447E6] bg-[#DBEAFE]";
    case "Completed":
      return "text-[#008236] bg-[#DCFCE7]";

    default:
      return "bg-[#FEF9C2] text-[#A65F00]";
  }
};

export const DueIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33594 1.33398V4.00065"
      stroke="#737373"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6641 1.33398V4.00065"
      stroke="#737373"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6667 2.66602H3.33333C2.59695 2.66602 2 3.26297 2 3.99935V13.3327C2 14.0691 2.59695 14.666 3.33333 14.666H12.6667C13.403 14.666 14 14.0691 14 13.3327V3.99935C14 3.26297 13.403 2.66602 12.6667 2.66602Z"
      stroke="#737373"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 6.66602H14"
      stroke="#737373"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default function page() {
  const [createTask , setCreateTask] = useState(false);
  const [editTask , setEditTask] = useState(false);
  return (
    <>
      <div className="space-y-6">
        <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Tasks & Assignments</h1>
            <p className="text-light-gray ">
              Track assignments and homework submissions
            </p>
          </div>

          <div className="w-full">
            <button onClick={()=> setCreateTask(!createTask)} className=" w-fit float-right [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] text-black bg-primary px-4 py-2 rounded-2xl flex flex-row items-center gap-2 hover:cursor-pointer ">
              {" "}
              <Plus className="w-5 h-5" />
              Create Task
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {tasks.map((course, index) => (
            <div
              key={index}
              className="bg-white min-h-36 w-full rounded-xl p-4 flex flex-col justify-between [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
            >
              <div>
                <div className="flex justify-between items-start mb-1 md:flex-row flex-col-reverse gap-1 md:gap-0">
                  <h2 className="text-lg font-semibold text-navigate">
                    {course.title}
                  </h2>
                  <div className="w-full">
                    <span
                    className={`px-2 py-1 text-xs rounded-full font-medium float-right ${getStatusColor(
                      course.status
                    )}`}
                  >
                    {course.status}
                  </span>
                  </div>
                </div>
                <p className="text-thin-gray text-sm mb-2">{course.subtitle}</p>
              </div>

              <div className="flex md:flex-row flex-col md:items-center gap-2 justify-between">
                <div className="flex-1 flex md:flex-row flex-col md:items-center  md:gap-6 gap-2">

                  {/* ----Due-data--- */}
                  <div className="flex flex-row items-center gap-1">
                    <DueIcon/>
                    <span className="text-thin-gray ">Due:</span>
                    <span>{"10/20/2025"}</span>

                  </div>

                  {/* ---submission--- */}
                   <div className="flex flex-row items-center gap-1">
                 
                    <span className="text-thin-gray ">Submissions:</span>
                    <span>{"23/45"}</span>

                  </div>

                    {/* ---process--- */}
                   <div className="flex flex-row items-center gap-1">
                 
                    <span className="text-thin-gray ">Progress:</span>
                    <span>{"51%"}</span>

                  </div>
                </div>

                {/* --actions--- */}
                <div className="flex items-center gap-2">
                  <button onClick={()=> setEditTask(!editTask)} className="flex items-center gap-2 hover:cursor-pointer px-4 py-2 rounded-full transition text-navigate font-medium w-full justify-center border border-black/10">
                    <SquarePen className="w-4 h-4" /> Edit
                  </button>
                  <button className=" hover:cursor-pointer p-2 border border-black/10  rounded-full transition ">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {

        createTask && 
        <CreateTaskModal onClose={()=> setCreateTask(false)}/>
      }


      {
        editTask && 
        <EditTaskModal onClose={()=> setEditTask(false)}/> 
      }
    </>
  );
}

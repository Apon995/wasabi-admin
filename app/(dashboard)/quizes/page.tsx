"use client";

import React, { useState } from "react";
import { Eye, Plus, SquarePen, Trash2 } from "lucide-react";
import AddQuizModal from "@/app/components/quizes/modals/AddQuizModal";
import EditQuizModal from "@/app/components/quizes/modals/EditQuizModal";
import ViewQuizModal from "@/app/components/quizes/modals/ViewQuizModal";

const quiz = [
  {
    title: "Mathematics - Chapter 5",
    subtitle: "Advanced Mathematics",
    tag: "Mathematics",
    status: "Active",
    questions: 20,
    duration: "30 min",
    attempts: 45,
  },
  {
    title: "Physics - Mechanics",
    subtitle: "Fundamentals of Motion",
    tag: "Science",
    status: "Active",
    questions: 15,
    duration: "25 min",
    attempts: 38,
  },
  {
    title: "English Grammar - Unit 3",
    subtitle: "Advanced Grammar Rules",
    tag: "English",
    status: "Active",
    questions: 18,
    duration: "20 min",
    attempts: 52,
  },
  {
    title: "World History - Chapter 2",
    subtitle: "Ancient Civilizations",
    tag: "History",
    status: "Draft",
    questions: 22,
    duration: "35 min",
    attempts: 17,
  },
  {
    title: "Chemistry - Basics of Atoms",
    subtitle: "Introduction to Chemistry",
    tag: "Science",
    status: "Draft",
    questions: 12,
    duration: "15 min",
    attempts: 9,
  },
  {
    title: "Creative Writing - Module 1",
    subtitle: "Writing Fundamentals",
    tag: "English",
    status: "Draft",
    questions: 10,
    duration: "20 min",
    attempts: 11,
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
  const [addQuiz , setAddQuiz] = useState(false);
  const [editQuiz , setEditQuiz] = useState(false);
  const [view , setView] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
          <div className="w-full">
            <h1 className="text-xl font-semibold ">Quizzes</h1>
            <p className="text-light-gray ">
              Create and manage quiz assessments
            </p>
          </div>

          <div className="w-full">
            <button onClick={()=> setAddQuiz(!addQuiz)} className=" w-fit float-right [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] text-black bg-primary px-4 py-2 rounded-2xl flex flex-row items-center gap-2 hover:cursor-pointer ">
              {" "}
              <Plus className="w-5 h-5" /> Create Quiz
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {quiz.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4  flex flex-col justify-between [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
            >
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-lg font-semibold text-navigate">
                    {course.title}
                  </h2>
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(
                      course.status
                    )}`}
                  >
                    {course.status}
                  </span>
                </div>
                <p className="text-thin-gray text-sm mb-2">{course.subtitle}</p>

                <div className=" flex flex-col text-sm text-navigate py-4 gap-2">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-medium text-thin-gray ">Questions</p>

                    <p>{course.questions}</p>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="font-medium text-thin-gray ">Duration</p>

                    <p>{course.duration}</p>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="font-medium text-thin-gray ">Attempts</p>

                    <p>{course.attempts}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <button onClick={()=> setView(!view)} className="flex items-center gap-2 hover:cursor-pointer px-4 py-2 rounded-full transition text-navigate font-medium w-full justify-center border border-black/10">
                  <Eye className="w-4 h-4" /> View
                </button>
                <button onClick={()=> setEditQuiz(!editQuiz)} className="flex items-center gap-2 hover:cursor-pointer px-4 py-2 rounded-full transition text-navigate font-medium w-full justify-center border border-black/10">
                  <SquarePen className="w-4 h-4" /> Edit
                </button>
                <button className=" hover:cursor-pointer p-2 border border-black/10  rounded-full transition ">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {
        addQuiz && 
        <AddQuizModal onClose={()=> setAddQuiz(false)}/>
      }

      {
        editQuiz &&
        <EditQuizModal onClose={()=> setEditQuiz(false)}/>
      }
      {
        view &&
        <ViewQuizModal onClose={()=> setView(false)}/>
      }
    </>
  );
}

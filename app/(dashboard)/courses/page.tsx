'use client';

import React, { useState } from "react";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import AddCourseModal from "@/app/components/courses/modals/AddCourseModal";
import EditCourseModal from "@/app/components/courses/modals/EditCourseModal";

const courses = [
    {
      title: "Advanced Mathematics",
      grade: "11th Grade",
      tag: "Mathematics",
      students: 234,
    },
    {
      title: "Physics Fundamentals",
      grade: "10th Grade",
      tag: "Science",
   
      students: 189,
    },
    {
      title: "English Literature",
      grade: "12th Grade",
      tag: "English",
  
      students: 312,
    },
    {
      title: "World History",
      grade: "9th Grade",
    
      tag: "History",
      students: 267,
    },
    {
      title: "Chemistry Basics",
      grade: "10th Grade",
      tag: "Science",
     
      students: 198,
    },
    {
      title: "Creative Writing",
      grade: "11th Grade",
      tag: "English",
       
      students: 145,
    },
  ];


 
export default function page() {
  const [AddCourse , setAddCourse] = useState(false);
  const [EditCourse , setEditCourse] = useState(false);
  
  return (
    <>

    <div className="space-y-6">
      <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
        <div className="w-full">
          <h1 className="text-xl font-semibold ">Courses</h1>
          <p className="text-light-gray ">
            Manage all courses and learning materials
          </p>
        </div>

        <div className="w-full">
          <button onClick={()=> setAddCourse(!AddCourse)} className=" w-fit float-right [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] text-black bg-primary px-4 py-2 rounded-2xl flex flex-row items-center gap-2 hover:cursor-pointer ">
            {" "}
            <Plus className="w-5 h-5" /> Create New Course
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 flex flex-col justify-between [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
          >
            <div>
              <div className="flex justify-between items-start mb-1">
                <h2 className="text-lg font-semibold text-navigate">
                  {course.title}
                </h2>
                <span className="px-2 py-1 text-xs rounded-full bg-active-route text-black font-medium">
                  {course.tag}
                </span>
              </div>
              <p className="text-thin-gray text-sm mb-2">{course.grade}</p>
              <p className="text-thin-gray text-sm font-normal mb-4">
                {course.students} students enrolled
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <button onClick={()=> setEditCourse(!EditCourse)} className="flex items-center gap-2 hover:cursor-pointer px-4 py-2 rounded-full transition text-navigate font-medium w-full justify-center border border-black/10">
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
      AddCourse && 
      <AddCourseModal  onClose={()=> setAddCourse(false)}/>
     }

     {
      EditCourse &&
      <EditCourseModal onClose={()=> setEditCourse(false)}/>
     }
    </>
  );
}

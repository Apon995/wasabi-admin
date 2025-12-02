import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  onClose: () => void;
}

export default function EditTaskModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-999 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative max-h-[95vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-thin-gray hover:text-black text-xl hover:cursor-pointer "
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold text-navigate ">Edit Task</h2>
        <p className="text-thin-gray text-sm mt-1">
          Update assignment or homework task details
        </p>

        <div className="mt-6 space-y-4">
          {/*  Quiz Title */}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Task Title
            </label>
            <input
              type="text"
           
              placeholder="Physics Lab Report"
              className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Course
            </label>
            <div className="rounded-2xl py-2 md:px-4 px-2 bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700">
              <select className=" text-thin-gray outline-none bg-transparent w-full">
                <option>Physics Fundamentals</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Due Date*/}
            <div>
              <label className="block text-sm font-medium text-navigate mb-1">
                Due Date
              </label>
              <input
                type="text"
                
                className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
              />
            </div>
             {/* ----Total Students-- */}
            <div>
              <label className="block text-sm font-medium text-navigate mb-1">
                Total Students
              </label>
              <input
                type="text"
                placeholder="45"
              
                className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
              />
            </div>
          </div>
          {/* Status */}

          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Status
            </label>
            <div className="rounded-2xl py-2 md:px-4 px-2 bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700">
              <select className=" text-thin-gray outline-none bg-transparent w-full">
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Submissions
            </label>
            <div className="text-thin-gray w-full px-4 py-2 rounded-2xl bg-search-bar-bg flex flex-row items-center gap-2">
              
              23 of 45 submitted
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex md:flex-row flex-col-reverse justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-2xl border border-black/10 text-navigate hover:bg-gray-100 hover:cursor-pointer"
          >
            Cancel
          </button>

          <button className="text-navigate px-5 py-2 rounded-2xl font-medium [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]  bg-primary hover:cursor-pointer ">
          Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

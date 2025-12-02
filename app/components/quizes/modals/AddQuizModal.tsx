import { X } from "lucide-react";
import React from "react";

interface ModalProps {
    onClose: () => void;
}

export default function AddQuizModal({ onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-999 px-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative max-h-[95vh] overflow-y-auto scrollbar-hide">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-thin-gray hover:text-black text-xl hover:cursor-pointer "
                >
                    <X />
                </button>

                <h2 className="text-xl font-semibold text-navigate ">
                    Create New Quiz
                </h2>
                <p className="text-thin-gray text-sm mt-1">
                    Create a new quiz assessment for your students
                </p>

                <div className="mt-6 space-y-4">
                    {/*  Quiz Title */}
                    <div>
                        <label className="block text-sm font-medium text-navigate mb-1">
                            Quiz Title
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., Mathematics - Chapter 5"
                            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
                        />
                    </div>

                    {/* Course */}
                    <div>
                        <label className="block text-sm font-medium text-navigate mb-1">
                            Course
                        </label>
                        <div className="rounded-2xl py-2 md:px-4 px-2 bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700">
                         <select
                            className=" text-thin-gray outline-none bg-transparent w-full"
                        >
                            
                            <option>Select course</option>
                        </select>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Grade Level */}
                        <div>
                            <label className="block text-sm font-medium text-navigate mb-1">
                                Number of Questions
                            </label>
                            <input
                                type="text"
                                placeholder="10 "
                                className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-navigate mb-1">
                                Duration (minutes)
                            </label>
                            <input
                                type="text"
                                placeholder="20"
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
                         <select
                            className=" text-thin-gray outline-none bg-transparent w-full"
                        >
                            <option>Active</option>
                            <option>Draft</option>
                        </select>
                       </div>

                    </div>
                </div>

                {/* Buttons */}
                <div className="flex md:flex-row flex-col-reverse justify-end gap-3 mt-8">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-2xl border border-black/10 text-navigate hover:bg-gray-100 hover:cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button className="text-navigate px-5 py-2 rounded-2xl font-medium [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]  bg-primary hover:cursor-pointer ">
                        Add Student
                    </button>
                </div>
            </div>
        </div>
    );
}

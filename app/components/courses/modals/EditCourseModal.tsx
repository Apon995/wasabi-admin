import { X } from "lucide-react";
import React from "react";

interface ModalProps {
    onClose: () => void;
}

export default function EditCourseModal({ onClose }: ModalProps) {


    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-999 px-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative overflow-y-auto max-h-[95vh] scrollbar-hide ">


                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-thin-gray hover:text-black text-xl hover:cursor-pointer "
                >
                    <X />
                </button>


                <h2 className="text-xl font-semibold text-navigate ">Edit Course</h2>
                <p className="text-thin-gray text-sm mt-1">
                    Update course details and information
                </p>


                <div className="mt-6 space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-navigate mb-1">
                            Course Name
                        </label>
                        <input
                            type="text"
                            placeholder="Advanced Mathematics"
                            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
                        />
                    </div>

                    {/* description*/}
                    <div>
                        <label className="block text-sm font-medium text-navigate mb-1">
                            Description
                        </label>
                        <textarea

                            placeholder="Brief description of the course..."
                            className=" placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
                        />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Grade Level */}
                        <div>
                            <label className="block text-sm font-medium text-navigate mb-1">
                                Grade Level
                            </label>
                            
                            <div className="rounded-2xl py-2 md:px-4 px-2 bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700">
                                <select
                                    className=" text-thin-gray outline-none bg-transparent w-full"
                                >

                                    <option>Select grade</option>
                                    <option>Grade 1</option>
                                    <option>Grade 2</option>
                                    <option>Grade 3</option>
                                </select>
                            </div>


                        </div>

                        {/* category*/}
                        <div>
                            <label className="block text-sm font-medium text-navigate mb-1">
                                Category
                            </label>

                            
                            <div className="rounded-2xl py-2 md:px-4 px-2 bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700">
                                <select
                                    className=" text-thin-gray outline-none bg-transparent w-full"
                                >

                                    <option>Select category</option>

                                </select>
                            </div>


                        </div>


                        

                    </div>

                    <div>
                            <label className="block text-sm font-medium text-navigate mb-1">
                                Students Enrolled
                            </label>
                            <div

                                className="text-thin-gray w-full px-4 py-5 rounded-2xl bg-search-bar-bg flex flex-row items-center gap-2"
                            >

                                <span className="text-2xl text-navigate font-normal">234</span>

                                students
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
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

"use client";

import { DoorClosed, Trash2, Upload, X } from "lucide-react";
import React, { useState } from "react";

interface ModalProps {
    onClose: () => void;
}

export default function AddCourseModal({ onClose }: ModalProps) {
    const [dragOver, setDragOver] = useState<boolean>(false);
    const [uploading, setUploading] = useState(false);
    const [video, setVideo] = useState<File | null>(null);




    const triggerFileInput = (inputId: string) => {
        if (video) return;
        const fileInput = document.getElementById(inputId) as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };





    const handleVideoUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        if (uploading) return;
        if (video) return;

        const file = files[0];
        console.log(file)
        if (!file.type.startsWith('video/')) return
        setUploading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        try {
            setVideo(file)
        }
        catch {

        }
        finally {
            setUploading(false);
        }

    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(true);

    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);

        const droppedFiles = e.dataTransfer.files;
        handleVideoUpload(droppedFiles);
    };

    const handleVideoDelete = () => {
        setVideo(null);
    };



    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-999 px-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative overflow-y-auto max-h-[95vh] scrollbar-hide ">


                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-thin-gray hover:text-black text-xl hover:cursor-pointer "
                >
                    <X />
                </button>


                <h2 className="text-xl font-semibold text-navigate ">Create New Course</h2>
                <p className="text-thin-gray text-sm mt-1">
                    Add a new course to your school platform. Include course details and upload MCQ questions.
                </p>


                <div className="mt-6 space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-navigate mb-1">
                            Course Name
                        </label>
                        <input
                            type="text"
                            placeholder="Course name"
                            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
                        />
                    </div>

                    {/* Email */}
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

                        {/* Status */}
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

                    <div className="flex flex-col items-cente gap-1 ">
                        <div >

                            <p className="w-full text-navigate font-medium text-sm ">
                                Upload course video
                            </p>
                            <input
                                id="uploadVideo"
                                name="uploadVideo"
                                type="file"
                                accept="video/*"
                                onChange={(e) => handleVideoUpload(e.target.files)}
                                className="hidden"
                            />
                        </div>

                        <div
                            className={`${dragOver && "bg-thin-gray/10"} h-36 flex items-center justify-center border-2 border-black/10 rounded-2xl p-6 text-center transition-colors duration-200 cursor-pointer 
                                        `}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}

                            onDrop={handleDrop}
                            onClick={() => triggerFileInput("uploadVideo")}>
                            {
                                uploading ? <div className="flex items-center justify-center flex-col gap-4" >
                                    <div className="w-5 h-5 border-2 border-navigate rounded-full border-t-0 animate-spin"></div>
                                    uploading ...
                                </div>
                                    : video ? (
                                        <div >
                                            <p className="text-sm font-medium text-green-600">
                                                {video.name}
                                            </p>
                                            <button
                                                type="button"
                                                id="deleteVideo"
                                                onClick={handleVideoDelete}
                                                className="text-red-500 text-sm hover:cursor-pointer"
                                            >
                                                <Trash2 />
                                            </button>
                                        </div>
                                    ) : <button
                                        type="button"
                                        className="bg-auth-form-border p-2 md:text-base text-sm rounded-full hover:cursor-pointer flex flex-col items-center justify-center"
                                    >
                                        <Upload className="w-6 h-h-6" />

                                        Click to upload or drag and drop
                                        CSV, JSON or Excel file (MAX. 5MB)


                                    </button>
                            }


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
                        Create Course
                    </button>
                </div>
            </div>
        </div>
    );
}

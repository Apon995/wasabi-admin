import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  onClose: () => void;
}

export default function CreateNewFirmsModal({ onClose }: ModalProps) {
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
          Create Law Firm
        </h2>
        <p className="text-thin-gray text-sm mt-1">
          Make changes to this section here. Click save when you’re done.
        </p>

        <div className="mt-6 space-y-4">
          {/* About the Firm*/}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              About the Firm
            </label>
            <input
              type="text"
              placeholder="Overview of the firm's history and values."
              className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>

          {/* Areas of Expertise */}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Areas of Expertise
            </label>
            <input
              type="text"
              placeholder="Detailed legal services offered."
              className=" placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>

          {/* Internship / Training Opportunities*/}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Internship / Training Opportunities
            </label>
            <input
              type="text"
              placeholder="Summer internship, graduate programs"
              className=" placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Description
            </label>
            <textarea
              rows={9}
              placeholder="Our gym has had both a local and a national presence since its founding in 2011, however its roots go much deeper. Our Team has been training and competing across the world in multiple combat sports to bring you the best instruction available. We are athletes, hobbyists, competitors, students and professionals. We strive to learn and grow while pushing others around us to do the same. We are a family, and we are a team."
              className=" placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
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
            Create Law Firm
          </button>
        </div>
      </div>
    </div>
  );
}

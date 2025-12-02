"use client";

import { useState } from "react";

export default function page() {
  const [isNotification, setIsNotification] = useState(false);
  const [pushNotification, setPushNotification] = useState(false);
  const [weeklyNotification, setWeeklyNOtification] = useState(false);

  return (
    <div className="bg-white rounded-xl [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] w-full p-6 relative max-h-[95vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-xl font-semibold text-navigate ">
        Notification Preferences
      </h2>
      <p className="text-thin-gray text-sm mt-1">
        Choose how you want to receive notifications
      </p>

      <div className="mt-8 space-y-4">
        {/*  Email Notifications */}
        <div className="flex flex-row items-center justify-between border-b border-black/10 pb-4">
          <div>
            <label className="block text-base font-medium text-navigate ">
              Email Notifications
            </label>
            <p className="text-thin-gray text-sm ">
              Choose how you want to receive notifications
            </p>
          </div>

          <div>
            <button
              onClick={() => setIsNotification(!isNotification)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 hover:cursor-pointer
                          ${isNotification ? "bg-primary" : "bg-[#E5E5E5]"}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow 
        transform transition-transform duration-300
        ${isNotification ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>

        {/* Push Notifications */}
        <div className="flex flex-row items-center justify-between border-b border-black/10 pb-4">
          <div>
            <label className="block text-base font-medium text-navigate ">
              Push Notifications
            </label>
            <p className="text-thin-gray text-sm ">
              Receive push notifications in browser
            </p>
          </div>

          <div>
            <button
              onClick={() => setPushNotification(!pushNotification)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 hover:cursor-pointer
                          ${pushNotification ? "bg-primary" : "bg-[#E5E5E5]"}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow 
        transform transition-transform duration-300
        ${pushNotification ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>

        {/* Weekly Reports */}
        <div className="flex flex-row items-center justify-between pb-4">
          <div>
            <label className="block text-base font-medium text-navigate ">
              Weekly Reports
            </label>
            <p className="text-thin-gray text-sm ">
              Receive weekly summary reports
            </p>
          </div>

          <div>
            <button
              onClick={() => setWeeklyNOtification(!weeklyNotification)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 hover:cursor-pointer
                          ${
                            weeklyNotification ? "bg-primary" : "bg-[#E5E5E5]"
                          }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow 
        transform transition-transform duration-300
        ${weeklyNotification ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div>
          <button className="text-navigate px-5 py-2 rounded-2xl font-medium  bg-primary hover:cursor-pointer ">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

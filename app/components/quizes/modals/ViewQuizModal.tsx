import { X } from "lucide-react";
import React from "react";
import {
  AttemptsIcon,
  DurationIcon,
  QuizIDIcon,
  TotalQusIcon,
} from "../../icons/quizes/Modals/QuizDetailsModal";

interface ModalProps {
  onClose: () => void;
}

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

const cards = [
  { title: "Total Questions", value: 20, icon: <TotalQusIcon /> },
  { title: "Duration", value: "30 min", icon: <DurationIcon /> },
  { title: "Total Attempts", value: 45, icon: <AttemptsIcon /> },
  { title: "Quiz ID", value: "Qz-3242324424", icon: <QuizIDIcon /> },
];

const recentResult = [
  { title: "Average Score", value: "85%", color: "#00A63E" },
  { title: "Highest Score", value: "98%", color: "#00A63E" },
  { title: "Lowest Score", value: "62%", color: "#D08700" },
  { title: "Pass Rate", value: "92%", color: "#00A63E" },
];

export default function ViewQuizModal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-999 px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative max-h-[95vh] overflow-y-auto scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-thin-gray hover:text-black text-xl hover:cursor-pointer "
        >
          <X />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-navigate ">
              Quiz Details
            </h2>
            <p className="text-thin-gray text-sm mt-1">
              Complete information about the quiz
            </p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-navigate ">
                Mathematics - Chapter 5
              </h2>
              <p className="text-thin-gray text-sm mt-1">
                Advanced Mathematics
              </p>
            </div>

            <span
              className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(
                "Active"
              )}`}
            >
              Active
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((items, index) => (
              <div
                key={index}
                className="bg-white p-5 min-h-28 rounded-3xl [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] "
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row items-center gap-1">
                    {items.icon}
                    <p className=" text-thin-gray">{items.title}</p>
                  </div>

                  <span className={`text-navigate text-xl`}>{items.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="min-h-24 space-y-3 w-full [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-5 rounded-2xl">
            <h4 className="text-navigate">Completion Rate</h4>

            <div className="space-y-1">
              <div className="w-full h-3 bg-[#F5F5F5] rounded-xl overflow-hidden">
                <div
                  className="h-full bg-primary rounded-xl"
                  style={{ width: "45%" }}
                />
              </div>

              <span className="text-thin-gray text-sm">
                45% of students have attempted this quiz
              </span>
            </div>
          </div>

          <div className="min-h-24 space-y-4 w-full [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-5 rounded-2xl">
            <h4 className="text-navigate text-base font-medium">
              Recent Results
            </h4>

            <div className="space-y-1">
              {recentResult.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between"
                >
                  <p className="text-navigate text-sm font-normal">
                    {item.title}
                  </p>
                  <span style={{ color: item.color }} className={`  text-sm`}>
                    {item.value}
                  </span>
                </div>
              ))}
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

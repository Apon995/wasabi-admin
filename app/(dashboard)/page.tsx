import { Delete } from "lucide-react";
import StatusCards from "../components/StatusCards";
import { SearchIcon } from "../components/Navbar";



const dummyStudents= [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    grade: "10th",
    courses: 5,
    status: "Active",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@email.com",
    grade: "11th",
    courses: 6,
    status: "Active",
    initials: "MC",
  },
  {
    id: 3,
    name: "Emma Williams",
    email: "emma.w@email.com",
    grade: "9th",
    courses: 4,
    status: "Inactive",
    initials: "EW",
  },
  {
    id: 4,
    name: "James Davis",
    email: "james.d@email.com",
    grade: "12th",
    courses: 7,
    status: "Active",
    initials: "JD",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    email: "olivia.m@email.com",
    grade: "10th",
    courses: 5,
    status: "Active",
    initials: "OM",
  },
];

export const DeleteIcon = ({ fill = "black" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66406 7.33301V11.333"
      stroke="#EF4444"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.33594 7.33301V11.333"
      stroke={fill}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6693 4V13.3333C12.6693 13.687 12.5288 14.0261 12.2787 14.2761C12.0287 14.5262 11.6896 14.6667 11.3359 14.6667H4.66927C4.31565 14.6667 3.97651 14.5262 3.72646 14.2761C3.47641 14.0261 3.33594 13.687 3.33594 13.3333V4"
      stroke={fill}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 4H14"
      stroke={fill}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33594 3.99967V2.66634C5.33594 2.31272 5.47641 1.97358 5.72646 1.72353C5.97651 1.47348 6.31565 1.33301 6.66927 1.33301H9.33594C9.68956 1.33301 10.0287 1.47348 10.2787 1.72353C10.5288 1.97358 10.6693 2.31272 10.6693 2.66634V3.99967"
      stroke={fill}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-[#DCFCE7] text-[#008236]";
    case "Inactive":
      return "bg-[#F5F5F5] text-[#1A1A1A]";
    default:
      return "bg-[#F5F5F5] text-[#1A1A1A]";
  }
};

export default function page() {
  return (
    <div>
      <div className="pb-5">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
        <p className="text-light-gray ">
          Welcome back! Here's what's happening with your school.
        </p>
      </div>

      {/* Stats Cards */}
      <StatusCards />

      {/* Students Table */}
      <div
       
        className="bg-white lg:p-6 p-4 space-y-4 rounded-xl [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]"
      >
        <div>
          <h1 className="text-xl font-semibold ">Recent Students</h1>
          <p className="text-light-gray ">
            Manage and view all students enrolled in your plat
          </p>
        </div>
        <div className=" lg:w-1/2 md:w-2/3 w-full flex items-center justify-center px-3 rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 ">
          <SearchIcon />
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search students..."
            className="w-full text-ash-color h-full nav-search font-normal bg-transparent outline-none py-2 placeholder:text-thin-gray"
          />
        </div>

        {/* ---tab-and-large-screen-view--- */}
        <div className="overflow-x-auto border rounded-xl border-black/10 hidden lg:block">
          <table className="w-full text-left border-collapse  ">
            <thead>
              <tr className="border-b border-black/10 text-navigate">
                <th className="py-2  pl-8">Student</th>
                <th className="py-2 pl-8">Email</th>
                <th className="py-2 px-4 text-center">Grade</th>
                <th className="py-2 px-4 text-center">Courses</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-black/10 hover:bg-active-route/70 text-navigate"
                >
                  <td className="py-3 px-4 flex items-center gap-2 text-center ">
                    <div className="w-8 h-8 rounded-full bg-active-route hidden lg:flex items-center justify-center font-normal text-sm text-black">
                      {student.initials}
                    </div>
                    {student.name}
                  </td>
                  <td className="py-3 px-4 text-thin-gray">{student.email}</td>
                  <td className="py-3 px-4 text-center">{student.grade}</td>
                  <td className="py-3 px-4 text-center">{student.courses}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        student.status
                      )}
                        `}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center ">
                    <button className="hover:cursor-pointer mx-auto text-center">
                      <DeleteIcon fill="red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* ----only-mobile-screen-view---- */}
        <div className=" flex flex-wrap items-center justify-center gap-8 lg:hidden ">
          {dummyStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-black/10 rounded-xl p-4 shadow-sm md:min-w-xs w-full md:w-fit"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-active-route flex items-center justify-center font-semibold text-black">
                  {student.initials}
                </div>
                <div>
                  <p className="font-semibold text-navigate text-base">{student.name}</p>
                  <p className="text-thin-gray text-sm">{student.email}</p>
                </div>
              </div>

              <div className=" flex flex-col text-sm text-navigate">
                <div className="flex items-center gap-4">

                  <p className="font-medium w-24">Grade</p>
                  <span>:</span>
                  <p className="flex-1">{student.grade}</p>

                </div>

                <div className="flex items-center  gap-4">
                  <p className="font-medium w-24">Courses</p>
                  <span>:</span>
                  <p className="flex-1">{student.courses}</p>

                </div>
                <div className="flex items-center  gap-4">
                  <p className="font-medium w-24">Status</p>
                  <span>:</span>
                  <div className="flex-1">
                    <span
                      className={`px-2 py-0.5 inline-block rounded-full text-xs font-medium w-fit ${getStatusColor(
                        student.status
                      )}`}
                    >
                      {student.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center  gap-4">
                  <p className="w-24">Action </p>
                  <span>:</span>
                  <button className="hover:cursor-pointer flex-1">
                    <DeleteIcon fill="red" />
                  </button>
                </div>
              </div>


            </div>
          ))}
        </div>






      </div>
    </div>
  );
}

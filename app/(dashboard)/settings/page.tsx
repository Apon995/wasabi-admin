export default function page() {
  return (
    <div className="bg-white rounded-xl [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] w-full p-6 relative max-h-[95vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-xl font-semibold text-navigate ">
        School Information
      </h2>
      <p className="text-thin-gray text-sm mt-1">
        Update your school's basic information
      </p>

      <div className="mt-6 space-y-4">
        {/*  School Name */}
        <div>
          <label className="block text-sm font-medium text-navigate mb-1">
            School Name
          </label>
          <input
            type="text"
            placeholder="Aspiring School"
            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-navigate mb-1">
            Address
          </label>
          <input
            type="text"
            placeholder="123 Education Street"
            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone*/}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Phone
            </label>
            <input
              type="text"
              placeholder="+1 (555) 123-4567"
              className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="info@school.edu"
              className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>
        </div>

        {/* Buttons */}
        <div>
          <button className="text-navigate px-5 py-2 rounded-2xl font-medium  bg-primary hover:cursor-pointer ">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

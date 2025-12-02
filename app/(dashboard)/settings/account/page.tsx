export default function page() {
  return (
    <div className="bg-white rounded-xl [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] w-full p-6 relative max-h-[95vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-xl font-semibold text-navigate ">
        Account Details
      </h2>
      <p className="text-thin-gray text-sm mt-1">
       Manage your account information
      </p>

      <div className="mt-6 space-y-4">
        {/* Full Name*/}
        <div>
          <label className="block text-sm font-medium text-navigate mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Admin User"
            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
          />
        </div>

        {/* Email Address*/}
        <div>
          <label className="block text-sm font-medium text-navigate mb-1">
           Email Address
          </label>
          <input
            type="text"
            placeholder="admin@aspiring.edu"
            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
          />
        </div>

        {/*Profile URL*/}
        <div>
          <label className="block text-sm font-medium text-navigate mb-1">
           Profile URL
          </label>
          <input
            type="text"
            placeholder="Upload your profile picture"
            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
          />
        </div>

        {/*Current Password*/}
        <div>
          <label className="block text-sm font-medium text-navigate mb-1">
           Current Password
          </label>
          <input
            type="password"
            
            className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*New Password*/}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              New Password
            </label>
            <input
              type="password"
              
              className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>
          {/* Confirm Password*/}
          <div>
            <label className="block text-sm font-medium text-navigate mb-1">
              Confirm Password
            </label>
            <input
              type="password"
             
              className="placeholder:text-thin-gray w-full px-4 py-2 outline-none rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 "
            />
          </div>
        </div>

        {/* Buttons */}
        <div>
          <button className="text-navigate px-5 py-2 rounded-2xl font-medium  bg-primary hover:cursor-pointer ">
            Update Account
          </button>
        </div>
      </div>
    </div>
  );
}

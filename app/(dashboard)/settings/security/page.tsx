

export default function page() {


  return (
    <div className="bg-white rounded-xl [box-shadow:0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] w-full p-6 relative max-h-[95vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-xl font-semibold text-navigate ">
        Security Settings
      </h2>
      <p className="text-thin-gray text-sm mt-1">
        Manage your account security options
      </p>

      <div className="mt-8 space-y-4">
        {/*Two-Factor Authentication*/}
        <div className="flex flex-col gap-4 border-b border-black/10 pb-4">
          <div>
            <label className="block text-base font-medium text-navigate ">
              Two-Factor Authentication
            </label>
            <p className="text-thin-gray text-sm ">
              Add an extra layer of security to your account
            </p>
          </div>

          <div>
            <button className="px-4 hover:cursor-pointer py-2 border border-black/10 rounded-full text-navigate font-medium text-sm">
              Enable 2FA
            </button>
          </div>


        </div>


        {/*Active Sessions*/}
        <div className="flex flex-col gap-4 border-b border-black/10 pb-4">
          <div>
            <label className="block text-base font-medium text-navigate ">
              Active Sessions
            </label>
            <p className="text-thin-gray text-sm ">
              Manage your active login sessions
            </p>
          </div>

          <div className="p-3 border border-black/10 rounded-2xl flex flex-row items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-navigate ">
                Current Session
              </label>
              <p className="text-thin-gray text-sm ">
                Chrome on Windows • Active now
              </p>
            </div>

            <span
                      className={`px-2 py-0.5 inline-block rounded-full text-sm font-medium w-fit bg-[#DCFCE7] text-[#008236]`}
                    >
                      active
                    </span>

          </div>


        </div>


           {/*Danger Zone*/}
        <div className=" pb-4">
          <div>
            <label className="block text-base font-medium text-navigate ">
              Danger Zone
            </label>
            <p className="text-thin-gray text-sm ">
             Irreversible actions for your account
            </p>
          </div>

      


        </div>



        {/* Buttons */}
        <div>
          <button className="text-[#EF4444] px-5 py-2 rounded-2xl font-medium border border-black/10  ">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

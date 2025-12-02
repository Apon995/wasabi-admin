
import Link from 'next/link'

export const SearchIcon = ()=>(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0027 13.9998L11.1094 11.1064" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)




export default function Navbar() {
    return (
        <nav className="bg-white h-22 border-b border-side-bar-border  px-4 hidden xl:flex flex-row justify-between items-center gap-4 ">

            <div className="w-full flex flex-row items-center gap-5">
                <p className='text-light-yellow'>Aspiring School</p>
                <div className=" w-1/2 flex items-center justify-center px-3 rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 ">
                      <SearchIcon/>
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Search students, courses..."
                        className="w-full text-ash-color h-full nav-search font-normal bg-transparent outline-none py-2 placeholder:text-thin-gray"
                    />
                </div>
            </div>
            <div className='flex items-center gap-2'>

                <div className='text-base text-black '>
                    <p className='text-base text-black leading-3 font-noraml'>Admin User</p>
                    <span className='text-sm text-thin-gray '>administrator</span>
                </div>


                <Link href={"/"} className='border-4 border-primary rounded-full'>
                    <div className='w-10 flex items-center justify-center h-10 font-semibold bg-primary text-black rounded-full m-1'>AD</div>
                </Link>
            </div>
        </nav>
    )
}
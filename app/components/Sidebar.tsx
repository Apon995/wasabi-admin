"use client";
import { ChevronLeft, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SidebarLogo from "./icons/SidebarLogo";
import { CourseIcon, DashboardIcon, ManageApplicationIcon, ManageJobIcon, ManageLawFarmIcon, ManageSchoolIcon, ManageWebsiteIcon, PremiumIcon, QuizeIcon, SettingIcon, StudentsIcons, TaskIcon } from "./icons/sidebarIcons";
import { SearchIcon } from "./Navbar";
import path from "path";



const routes = [
    { id: 1, label: "Dashboard", icon: <DashboardIcon />, href: "/" },
    {
        id: 2,
        label: "Students",
        icon: <StudentsIcons />,
        href: "/students",
    },
    {
        id: 3,
        label: "Courses",
        icon: <CourseIcon />,
        href: "/courses",
    },
    {
        id: 4,
        label: "Quizzes",
        icon: <QuizeIcon />,
        href: "/quizes",
    },
    {
        id: 5,
        label: "Tasks",
        icon: <TaskIcon />,
        href: "/tasks",
    },
    {
        id: 6,
        label: "Manage Jobs",
        icon: <ManageJobIcon />,
        href: "/manage-jobs",
    },
    {
        id: 7,
        label: "Manage School",
        icon: <ManageSchoolIcon />,
        href: "/manage-school",
    },
    {
        id: 8,
        label: "Manage Law firms",
        icon: <ManageLawFarmIcon />,
        href: "/manage-law-firms",
    },
    {
        id: 9,
        label: "Manage Application tracker",
        icon: <ManageApplicationIcon />,
        href: "/manage-application-tracker",
    },
    {
        id: 10,
        label: "Manage website",
        icon: <ManageWebsiteIcon />,
        href: "/manage-website",
    },
    {
        id: 11,
        label: "Premium",
        icon: <PremiumIcon />,
        href: "/premium",
    },
    {
        id: 12,
        label: "Settings",
        icon: <SettingIcon />,
        href: "/settings",
    },
];

export default function SideBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();


    useEffect(() => {
        setOpen(false)
    }, [pathname])


    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    }


    return (
        <>
            {/* mobile nav */}
            <div className="xl:hidden w-full bg-white px-4 flex justify-between items-center shadow min-h-22 top-0 sticky">
                <div className="flex-1">
                    <Link href={"/"}>
                        <SidebarLogo />
                    </Link>
                </div>

                <div className=" md:w-1/2 w-2/3 hidden md:flex items-center justify-center px-3 rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 ">
                    <SearchIcon />
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Search students, courses..."
                        className="w-full text-ash-color h-full nav-search font-normal bg-transparent outline-none py-2 placeholder:text-thin-gray"
                    />
                </div>
                <div className="flex-1 float-right">
                    <button
                        onClick={() => setOpen(true)}
                        className="text-gray-700 text-lg font-bold float-right "
                    >
                        <Menu />
                    </button>
                </div>
            </div>

            {/* mobile overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/15 z-40 xl:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}



            {/* large screen side bar tab/pc */}
            <aside

                className={`bg-white w-72 flex max-h-screen flex-col gap-2 xl:static xl:h-auto h-full border-r border-side-bar-border
           fixed top-0 left-0 z-50 transform transition-transform duration-300 xl:translate-x-0 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center relative border-b border-side-bar-border min-h-22 px-3 ">
                    <Link href={"/"}>

                        <SidebarLogo />
                    </Link>
                    <button
                        onClick={() => setOpen(false)}
                        className={`xl:hidden text-3xl font-bold rounded-full `}
                    >
                        <ChevronLeft />
                    </button>
                </div>

                <div className="px-3 border-b border-side-bar-border py-2 md:hidden block">
                    <div className=" w-full flex items-center justify-center px-3 rounded-2xl bg-search-bar-bg gap-3 focus-within:ring-2 focus-within:ring-side-bar-border transition duration-700 ">
                        <SearchIcon />
                        <input
                            type="search"
                            id="search"
                            name="search"
                            placeholder="Search students, courses..."
                            className="w-full text-ash-color h-full nav-search font-normal bg-transparent outline-none py-2 placeholder:text-thin-gray"
                        />
                    </div>
                </div>

                <div className="w-full  overflow-y-auto py-2 flex flex-col justify-between h-full gap-5">
                    <nav className="flex flex-col gap-0.5 w-fit px-3">
                        {routes.map((item: any) => (
                            <Link
                                href={item.href}
                                key={item.id}
                                className={`${isActive(item.href)
                                    ? "bg-active-route "
                                    : " bg-transparent hover:bg-active-route/60"
                                    } p-2 rounded-xl flex flex-row items-center gap-2 font-normal text-navigate text-base`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}


                    </nav>


                    <div className="space-y-3">


                        <div className="px-3 w-full ">
                            <button className="flex w-full hover:cursor-pointer flex-row items-center gap-2 px-2 py-3 bg-white rounded-lg [box-shadow:0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_93.2px_-3px_rgba(0,0,0,0.1)] ">
                                <LogOut className="w-5 h-5" /> Logout
                            </button>
                        </div>

                        <footer className="text-thin-gray p-4 border-t border-black/10 text-sm">
                            © 2025 Aspiring School Platform
                        </footer>
                    </div>

                </div>

            </aside>
        </>
    );
}
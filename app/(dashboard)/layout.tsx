import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";



const getpoppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "400", "500", "600", "700", "800", "900"]
})


export const metadata: Metadata = {
    title: "Dashboard",
    description: "wasabi admin dashboard ",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div
            className={` ${getpoppins.className} antialiased h-screen flex flex-col xl:flex-row relative`}
        >
            {/* <SideBar /> */}
            <SideBar />
            <main className="flex-1 flex flex-col gap-4 ">
                <Navbar />

                <div className="flex-1 xl:px-5 px-2 overflow-y-auto py-4  ">{children}</div>
            </main>
        </div>

    );
}

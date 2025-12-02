import Navbar from "@/app/components/settings/Navbar";





export default function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="w-full space-y-4">
            <div className="w-full">
                <h1 className="text-xl font-semibold ">Settings</h1>
                <p className="text-light-gray ">
                    Manage your account and platform settings
                </p>
            </div>

            <Navbar />

            {children}

        </div>

    );
}

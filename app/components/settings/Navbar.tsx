'use client';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const GeneralIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.66406 8H9.33073"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6.66406 5.33203H9.33073"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9.33073 14.0013V12.0013C9.33073 11.6477 9.19025 11.3085 8.9402 11.0585C8.69016 10.8084 8.35102 10.668 7.9974 10.668C7.64377 10.668 7.30464 10.8084 7.05459 11.0585C6.80454 11.3085 6.66406 11.6477 6.66406 12.0013V14.0013"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.0026 6.66797H2.66927C2.31565 6.66797 1.97651 6.80844 1.72646 7.05849C1.47641 7.30854 1.33594 7.64768 1.33594 8.0013V12.668C1.33594 13.0216 1.47641 13.3607 1.72646 13.6108C1.97651 13.8608 2.31565 14.0013 2.66927 14.0013H13.3359C13.6896 14.0013 14.0287 13.8608 14.2787 13.6108C14.5288 13.3607 14.6693 13.0216 14.6693 12.668V6.0013C14.6693 5.64768 14.5288 5.30854 14.2787 5.05849C14.0287 4.80844 13.6896 4.66797 13.3359 4.66797H12.0026"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4 14V3.33333C4 2.97971 4.14048 2.64057 4.39052 2.39052C4.64057 2.14048 4.97971 2 5.33333 2H10.6667C11.0203 2 11.3594 2.14048 11.6095 2.39052C11.8595 2.64057 12 2.97971 12 3.33333V14"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const AccountIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.6693 14V12.6667C12.6693 11.9594 12.3883 11.2811 11.8882 10.781C11.3881 10.281 10.7098 10 10.0026 10H6.0026C5.29536 10 4.61708 10.281 4.11699 10.781C3.61689 11.2811 3.33594 11.9594 3.33594 12.6667V14"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8.0026 7.33333C9.47536 7.33333 10.6693 6.13943 10.6693 4.66667C10.6693 3.19391 9.47536 2 8.0026 2C6.52984 2 5.33594 3.19391 5.33594 4.66667C5.33594 6.13943 6.52984 7.33333 8.0026 7.33333Z"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const NotificationIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.84375 14C6.96078 14.2027 7.12909 14.371 7.33178 14.488C7.53446 14.605 7.76438 14.6666 7.99842 14.6666C8.23245 14.6666 8.46237 14.605 8.66505 14.488C8.86774 14.371 9.03605 14.2027 9.15308 14"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2.17418 10.216C2.08709 10.3115 2.02962 10.4302 2.00875 10.5577C1.98788 10.6852 2.00453 10.8161 2.05665 10.9343C2.10878 11.0525 2.19414 11.1531 2.30235 11.2237C2.41056 11.2943 2.53697 11.3319 2.66618 11.332H13.3328C13.462 11.3321 13.5885 11.2946 13.6968 11.2241C13.805 11.1536 13.8905 11.0532 13.9428 10.935C13.995 10.8169 14.0118 10.6861 13.9911 10.5586C13.9704 10.431 13.9131 10.3123 13.8262 10.2167C12.9395 9.3027 11.9995 8.33136 11.9995 5.33203C11.9995 4.27117 11.5781 3.25375 10.8279 2.5036C10.0778 1.75346 9.06038 1.33203 7.99951 1.33203C6.93865 1.33203 5.92123 1.75346 5.17109 2.5036C4.42094 3.25375 3.99951 4.27117 3.99951 5.33203C3.99951 8.33136 3.05885 9.3027 2.17418 10.216Z"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const SecurityIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.6667 7.33203H3.33333C2.59695 7.33203 2 7.92898 2 8.66536V13.332C2 14.0684 2.59695 14.6654 3.33333 14.6654H12.6667C13.403 14.6654 14 14.0684 14 13.332V8.66536C14 7.92898 13.403 7.33203 12.6667 7.33203Z"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.66406 7.33203V4.66536C4.66406 3.78131 5.01525 2.93346 5.64037 2.30834C6.26549 1.68322 7.11334 1.33203 7.9974 1.33203C8.88145 1.33203 9.7293 1.68322 10.3544 2.30834C10.9795 2.93346 11.3307 3.78131 11.3307 4.66536V7.33203"
            stroke="#1A1A1A"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const routes = [
    { id: 1, label: "General", icon: <GeneralIcon />, href: "/settings" },
    {
        id: 2,
        label: "Account",
        icon: <AccountIcon />,
        href: "/settings/account",
    },
    {
        id: 3,
        label: "Notifications",
        icon: <NotificationIcon />,
        href: "/settings/notification",
    },
    {
        id: 4,
        label: "Security",
        icon: <SecurityIcon />,
        href: "/settings/security",
    },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <div className="bg-[#F5F5F5] rounded-2xl md:w-fit w-full px-3 md:px-0">
                <nav className="flex md:flex-row flex-col gap-1 md:w-fit w-full">
                    {routes.map((item: any) => (
                        <Link
                            href={item.href}
                            key={item.id}
                            className={`${pathname == item.href
                                ? "bg-white "
                                : "hover:bg-white"
                                } px-4 py-2 font-medium rounded-2xl flex flex-row items-center  gap-2 text-navigate text-base`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    ))}


                </nav>

            </div>



        </>
    )
}

"use client";

import tabs from "@/util/tabs";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="w-full py-5 bg-white">
            <div className="container flex items-center justify-between mx-auto px-3">
                <h1 className="font-bold text-main text-lg!">StudyHub</h1>
                <Search />
                <div className="flex items-center gap-x-10 font-medium">
                    {tabs.map((tab) => {
                            const isActive = pathname === tab.href;

                            return (
                                (
                                    <Link 
                                        key={tab.name} 
                                        href={tab.href} 
                                        className={isActive ? "text-sm font-[550] text-[#ff7b00] border-b-2 border-[#ff7b00] pb-1" 
                                            : "text-sm font-[550] text-gray-700 hover:text-[#ff7b00] duration-300 border-b-2 border-transparent hover:border-[#ff7b00] pb-1"}
                                    >
                                        {tab.name}
                                    </Link>
                                ))
                        }
                        )
                    }
                    
                    <div className="flex items-center gap-x-4">
                        <div className="rounded-full w-10 h-10 bg-[#f3f3f3] flex items-center justify-center">
                            <FaShoppingCart className="text-xl text-[#ff7b00] cursor-pointer"/>
                        </div>
                        <Image src="/images/default.png" alt="User Profile" width={40} height={40} className="rounded-full cursor-pointer"/>
                    </div>
                </div>
            </div>
        </header>
    );
}
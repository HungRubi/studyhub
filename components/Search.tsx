"use client";

import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Search() {
    const [value, setValue] = useState("");

    return (
        <form  className="px-4 md:px-6 lg:px-8">
            <div className="w-full relative text-center border border-gray-200 min-w-100 mx-auto rounded-[30px]">
                <button
                    type="submit"
                    className="absolute left-0 text-lg top-1/2 transform -translate-y-1/2 px-4 flex items-center justify-center cursor-pointer text-[#ff7b00]"
                >
                    <FiSearch />    
                </button>
                <input
                    type="text"
                    name="timkiem"
                    placeholder="Enter document name..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="search_input block leading-6 px-4 py-1.5 text-sm focus:outline-[#ff7b00] w-full pl-12 rounded-[30px]"
                />
            </div>
        </form>
    )
}
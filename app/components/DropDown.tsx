"use client";
import { IoIosDownload, IoMdReturnRight } from "react-icons/io";
import {AppLinks}  from "../../public/data/downloadLinks";

import { useState } from "react";
import Link from "next/link";
import { line } from "framer-motion/client";

export default function DownloadApps() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

    console.log(AppLinks );
  const handleDrop = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <button
        className="p-2 rounded-xl cursor-pointer flex items-center justify-center transition-all duration-400 "
        onClick={handleDrop}
      >
        <span className="font-yekan flex gap-0.5 text-gray-700 transition-all duration-400 hover:text-black ">
          <IoIosDownload />
          دانلود اپلیکیشن{" "}
        </span>
      </button>

      {showMenu && (
        <div className="absolute top-0 left-0 w-10 h-20 bg-red-600">
            {
           
            }
        </div>
      )}
    </div>
  );
}

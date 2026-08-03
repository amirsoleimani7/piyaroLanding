"use client";
import { IoIosDownload, IoMdReturnRight } from "react-icons/io";
import { AppLinks, AppLinktype } from "../../public/data/downloadLinks";


import { useState } from "react";
import { useRef } from "react";

import Link from "next/link";

export default function DownloadApps() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ref = 
  console.log(AppLinks);
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
        <div className="absolute p-4 w-35 top-full left-0  rounded-xl shadow-2xl  backdrop-blur-2xl bg-white border-none outline-1 outline-gray-100 flex flex-col gap-2">
          {AppLinks.map((l: AppLinktype, index: number) => (
            <Link
              href={l.href}
              key={l.id}
              className="flex justify-between gap-1 items-center"
            >
              <span className="font-yekan">{l.text}</span>
              <l.icon />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { queryObjects } from "v8";

interface FaqItemProps {
  question: string;
  awnser: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, awnser }) => {
  type faqItem = {
    shaowItem: boolean;
    refHeight?: number;
  };

  const [shaowAn, setShowAn] = useState<faqItem>({
    shaowItem: false,
    refHeight: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    const newS: faqItem = {
      shaowItem: !shaowAn.shaowItem,
      refHeight: ref.current?.offsetHeight,
    };

    setShowAn(newS);

    console.log(ref.current?.clientHeight);
  };

  return (
    <section className="flex flex-col font-yekan ">
      <div
        className="flex items-center cursor-pointer gap-2"
        onClick={handleShow}
      >
        <button className="border rounded-md p-1 cursor-pointer duration-100 ease-in-out transition-all flex items-center justify-center">
          <IoIosArrowDown
            className={`${shaowAn.shaowItem ? "rotate-180" : ""} duration-200 ease-in-out transition-all`}
          />
        </button>
        <h1 className="font-bold">{question}</h1>
      </div>
      <p
        className={`${shaowAn.shaowItem ? "h-fit" : "h-0"}  overflow-hidden duration-300 ease-in-out transition-all mt-2 text-gray-800`}
        ref={ref}
      >
        {awnser}
      </p>
    </section>
  );
};

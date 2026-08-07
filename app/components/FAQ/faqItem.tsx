"use client";

import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import AnimateHeight from "react-animate-height";

interface FaqItemProps {
  question: string;
  awnser: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, awnser }) => {
  type faqItem = {
    shaowItem: boolean;
  };

  const [shaowAn, setShowAn] = useState<faqItem>({
    shaowItem: false,
  });

  const ref = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    const newS: faqItem = {
      shaowItem: !shaowAn.shaowItem,
    };
    setShowAn(newS);
  };

  return (
    <section className="flex flex-col font-yekan pr-3 mb-5 ">
      <div
        className="flex items-center cursor-pointer gap-2 select-none group"
        onClick={handleShow}
      >
        <button className="border rounded-md p-1 cursor-pointer duration-100 ease-in-out transition-all flex items-center justify-center border-gray-400 group group-hover:border-gray-800">
          <IoIosArrowDown
            className={`${shaowAn.shaowItem ? "rotate-180" : ""} duration-200 ease-in-out transition-all text-gray-400 group-hover:text-gray-800`}
          />
        </button>
        <h1 className="font-bold">{question}</h1>
      </div>
      <AnimateHeight
        id="example-panel"
        duration={200}
        height={shaowAn.shaowItem ? "auto" : 0}
      >
        <p
          className={`${shaowAn.shaowItem ? "opacity-100" : "opacity-0"} overflow-hidden duration-200 ease-in-out transition-all mt-2 text-gray-800`}
          ref={ref}
        >
          {awnser}
        </p>
      </AnimateHeight>
    </section>
  );
};

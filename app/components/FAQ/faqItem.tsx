"use client";

import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqItem() {
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
    <section className="flex bg-green-200 flex-col font-yekan border">
      <div className="flex cursor-pointer gap-2" onClick={handleShow}>
        <button
          className="border rounded-md p-1 cursor-pointer duration-100 ease-in-out transition-all hover:bg-main"
        >
          <IoIosArrowDown className={`${shaowAn.shaowItem ? "rotate-180" : ""} duration-200 ease-in-out transition-all`}/>
        </button>
        <h1>سوال سوال چیست؟</h1>
      </div>
      <p
        className={`${shaowAn.shaowItem ? "h-fit" : "h-0"}  overflow-hidden duration-300 ease-in-out transition-all`}
        ref={ref}
      >
        ایم جوابجوابجوابجوابجوابجوابجوابجوابجوابجوابجوابجوابجوابجواب است
      </p>
    </section>
  );
}

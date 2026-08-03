import { IoIosDownload } from "react-icons/io";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-[80%] top-6 rounded-2xl inset-shadow-black backdrop-blur-sm flex justify-around items-center px-5 py-3 shadow-xl  max-md:w-full max-md:top-0 max-md:rounded-b-2xl max-md:rounded-t-none">
      <section className="flex h-full gap-3 items-center ">
        <Image
          src="/logo/bg-removed.png"
          width={40}
          height={40}
          alt="Picture of the Company Logo"
        />
        <div className="h-8 w-1 border-none rounded-full bg-main"></div>

        <span className="font-lemonade text-xl ">پیارو گلد</span>
      </section>

      {/* <section>main section</section> */}

      <section className="mr-auto ml-0 flex gap-3">
        <button className="p-2 rounded-xl cursor-pointer">
          <span className="font-yekan flex gap-0.5 text-gray-700">
            <IoIosDownload />
            دانلود اپلیکیشن{" "}
          </span>
        </button>
        <button className="px-3 py-2 rounded-xl bg-main cursor-pointer">
          <span className="font-yekan font-bold">ورود | ثبت‌نام</span>
        </button>
      </section>
    </header>
  );
}

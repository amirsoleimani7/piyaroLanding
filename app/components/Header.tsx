import Image from "next/image";
import Link from "next/link";
import DownloadApps from "./DropDown";

export default function Header() {
  return (
    <header className="head fixed w-[70%] top-6 rounded-2xl inset-shadow-black backdrop-blur-md flex justify-around items-center px-5 py-3 max-md:w-full max-md:top-0 max-md:rounded-b-2xl max-md:rounded-t-none z-10">
      <section className="flex h-full gap-3 items-center  " >
        <Image
          src="/logo/bg-removed.png"
          width={40}
          height={40}
          alt="Picture of the Company Logo"
        />
        <div className="h-8 w-1 border-none rounded-full bg-main"></div>
        <span className="font-lemonade text-xl ">پیارو گلد</span>
      </section>
      
      <section className="mr-auto ml-0 flex gap-3">
        {/* import here */}
        <DownloadApps/>
        <Link href={"https://piyaro.ir/"} prefetch>
          <button className="flex items-center justify-center px-3 py-2 rounded-xl bg-main cursor-pointer hover:shadow-sm hover:bg-main-hover hover:text-grey-700 transition-all duration-400 ">
            <span className="font-yekan font-bold">ورود | ثبت‌نام</span>
          </button>
        </Link>
      </section>
    </header>
  );
}

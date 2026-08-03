import { IoIosDownload } from "react-icons/io";

export default function Header() {
  return (
    <header className="fixed w-[80%] top-6 rounded-3xl inset-shadow-2xs backdrop-blur-sm flex items-center px-6 py-4 border max-md:w-full max-md:top-0 max-md:rounded-b-3xl max-md:rounded-t-none">
      <section className="mr-auto ml-0 flex gap-3">
        <button className="p-2 rounded-xl cursor-pointer">
          <span className="font-yekan flex gap-0.5 font-bold">
            <IoIosDownload />
            دانلود اپلیکیشن{" "}
          </span>
        </button>
        <button className="p-3 rounded-xl bg-main cursor-pointer">
          <span className="font-yekan font-bold">ورود | ثبت‌نام</span>
        </button>
      </section>

      <section></section>
    </header>
  );
}

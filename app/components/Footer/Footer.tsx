import "./footerStyle.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-grad h-[400px] w-full bg-red-600 mt-auto mb-0 ">
      <div className="w-[80%] h-full mx-auto  py-5">
        <div className="flex scale-75 text-white items-center gap-2">
          <Image
            src={"/logo/bg-removed.png"}
            width={60}
            height={60}
            alt="Picture of the Company Logo"
          />
          <span className="font-lemonade text-3xl ">پیارو گلد</span>
        </div>
      </div>
    </footer>
  );
}

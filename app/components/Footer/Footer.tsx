import "./footerStyle.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-grad h-[400px] w-full bg-red-600 mt-auto mb-0 ">
      <div className="w-[80%] h-full mx-auto border">
        <Image
          src={"/logo/bg-removed.png"}
          width={60}
          height={60}
          alt="Picture of the Company Logo"
        />
      </div>
    </footer>
  );
}

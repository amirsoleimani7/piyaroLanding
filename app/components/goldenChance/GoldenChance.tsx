import { FaArrowLeft } from "react-icons/fa";
import "./goldenChance.css"

export default function GoldenChance() {
  return (
    <div className="mt-auto mb-10 w-[60%]  border rounded-2xl  flex justify-between items-center px-10 py-5">
      <div className="w-[70%]">
        <h1 className="font-yekan font-bold text-5xl text-main">فرصت طلایی</h1>
        <p className="font-yekan mt-4">
          ما با تکیه بر سال‌ها تجربه و اعتبار این مجموعه در بازار طلا و سرمایه،
          بستری را فراهم کرده‌ایم تا سرمایه‌گذاری در طلا برای همه آسان، شفاف و
          امن باشد.
        </p>
      </div>
      <button className="px-5 py-3 flex items-center justify-center border rounded-2xl ">
        <span className="font-yekan">ثبت‌نام </span>
      </button>
    </div>
  );
}

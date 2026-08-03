import "./footerStyle.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-grad h-[500px] w-full bg-red-600 mt-auto mb-0">
      <div className="w-[80%] h-full mx-auto py-5 flex-col flex">
        <div className="flex text-white items-center gap-2">
          <Image
            src={"/logo/bg-removed.png"}
            width={40}
            height={40}
            alt="Picture of the Company Logo"
          />
          <span className="font-lemonade text-3xl ">پیارو گلد</span>
        </div>

        <div className="w-full text-white font-yekan text-md flex flex-col  mt-5">
          <p>
            پیارو، پلتفرم اختصاصی خرید و فروش آنلاین طلا، محصولی از «گروه
            بازرگانی سرمایه طلای زرین» است. ما با تکیه بر سال‌ها تجربه و اعتبار
            این مجموعه در بازار طلا و سرمایه، بستری را فراهم کرده‌ایم تا
            سرمایه‌گذاری در طلا برای همه آسان، شفاف و امن باشد.
          </p>
          <p>
            هدف ما در پیارو، برداشتن موانع سنتی از مسیر سرمایه‌گذاری است. ما
            تلاش می‌کنیم تا شما بتوانید با هر میزان بودجه، بدون دغدغه نگهداری
            فیزیکی و با اطمینان کامل از اصالت و قیمت، در بازار ارزشمند طلاپیارو،
            پلتفرم اختصاصی خرید و فروش آنلاین طلا، محصولی از «گروه بازرگانی
            سرمایه طلای زرین» است. ما با تکیه بر سال‌ها تجربه و اعتبار این
            مجموعه در بازار طلا و سرمایه، بستری را فراهم کرده‌ایم تا
            سرمایه‌گذاری در طلا برای همه آسان، شفاف و امن باشد. فعالیت کنید.
          </p>
          <p>
            تیم متخصص ما در پیارو و گروه بازرگانی سرمایه طلای زرین، متعهد است که
            با پشتیبانی دقیق و پلتفرمی مدرن، تجربه‌ای متمایز از خرید و فروش طلا
            را برای شما رقم بزند. ما در کنار شما هستیم تا مسیر رشد سرمایه‌تان را
            هموارتر کنیم.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 w-full h-full mt-5">
          <div className="*:text-white flex flex-col gap-2">
            <div>
              <h1
                className="font-yekan text-white after:transition-all after:duration-300 after:ease-in-out font-bold text-xl relative inline-block cursor-pointer
              after:content-[''] after:absolute after:w-0 hover:after:w-16  after:h-1 after:rounded-2xl after:bg-main after:bottom-0 after:left-0 "
              >
                پیارو گلد
              </h1>
              <Link href={"https://piyaro.ir/about"} target="_blank">
                <p className="font-yekan mt-1 duration-300 ease-in-out transition-all cursor-pointer hover:text-main-hover">
                  درباره پیارو
                </p>
              </Link>
            </div>

            <div>
              <h1
                className="font-yekan text-white after:transition-all after:duration-300 after:ease-in-out font-bold text-xl relative inline-block cursor-pointer
              after:content-[''] after:absolute after:w-0 hover:after:w-32  after:h-1 after:rounded-2xl after:bg-main after:bottom-0 after:left-0 "
              >
                دریافت اپلیکیشن
              </h1>

              <Link href={"https://piyaro.ir/piyaro.apk"} target="_blank">
                <p className="font-yekan mt-1 duration-300 ease-in-out transition-all cursor-pointer hover:text-main-hover">
                  اندروید{" "}
                </p>
              </Link>

              <Link href={"https://piyaro.ir/app"} target="_blank">
                <p className="font-yekan mt-1 duration-300 ease-in-out transition-all cursor-pointer hover:text-main-hover">
                  ایفون{" "}
                </p>
              </Link>
            </div>
          </div>
          <div className="*:text-white flex flex-col gap-2">
             <h1
                className="font-yekan text-white after:transition-all after:duration-300 after:ease-in-out font-bold text-xl relative inline-block cursor-pointer
              after:content-[''] after:absolute after:w-0 hover:after:w-32  after:h-1 after:rounded-2xl after:bg-main after:bottom-0 after:left-0 "
              >
                دریافت اپلیکیشن
              </h1>

              <Link href={"https://piyaro.ir/piyaro.apk"} target="_blank">
                <p className="font-yekan mt-1 duration-300 ease-in-out transition-all cursor-pointer hover:text-main-hover">
                  اندروید{" "}
                </p>
              </Link>
          </div>

        </div>
        <div className="w-full mx-auto border-b border-gray-200 mt-auto mb-0"></div>
        <div className="text-center mt-3">
          <p className="font-yekan text-white text-sm">
            همه حقوق مادی و معنوی برای شرکت پیارو محفوظ است. ©
          </p>{" "}
        </div>
      </div>
    </footer>
  );
}

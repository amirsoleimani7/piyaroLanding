import { FaqItem } from "./faqItem";
import { faqItemsdata, faqType } from "../../../public/data/FAQdata";


export default function Faq() {
  console.log(faqItemsdata);

  return (
    <div className="flex flex-col  mt-auto mb-10 w-[60%] rounded-xl ">
      <h1 className="font-yekan font-bold text-center text-4xl text-gray-600">
        سوالات متداول
      </h1>
      <section className="w-full flex flex-col">
        {faqItemsdata.map((f: faqType, index: number) => (
          <div className="flex flex-col mb-5">
            <FaqItem question={f.question} awnser={f.awnser} />
            <div className="w-full  border-b border-gray-300"></div>
          </div>
        ))}
      </section>
    </div>
  );
}

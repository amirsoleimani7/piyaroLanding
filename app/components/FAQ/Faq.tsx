import { FaqItem } from "./faqItem";
import { faqItemsdata, faqType } from "../../../public/data/FAQdata";

export default function Faq() {
  console.log(faqItemsdata);

  return (
    <div className="flex flex-col  mt-auto mb-10 w-[60%] rounded-xl max-md:w-[80%] max-sm:w-[90%]">
      <h1 className="font-yekan font-bold text-center text-3xl mb-10">
        سوالات متداول
      </h1>
      <section className="w-full flex flex-col">
        {faqItemsdata.map((f: faqType, index: number) => (
          <div className="flex flex-col mb-6" key={index}>
            <FaqItem question={f.question} awnser={f.awnser} />
            {faqItemsdata[faqItemsdata.length - 1] === f ? (
              <></>
            ) : (
              <div className="w-full  border-b border-gray-200"></div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

import {FaqItem} from "./faqItem";

export default function Faq() {
  const handleClick = () => {};

  return (
    <div className="flex flex-col  mt-auto mb-10 w-[60%] h-200  rounded-xl">
      <h1 className="font-yekan font-bold text-center text-4xl text-gray-600">سوالات متداول</h1>
      <section className="w-full flex flex-col">
        <FaqItem question="waadp" awnser="sometihng"/>
        <div className="w-full border-none outline-1 mx-auto my-5"></div>
      </section>
    </div>
  );
}


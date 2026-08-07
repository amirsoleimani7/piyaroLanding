import FaqItem from "./faqItem";

export default function Faq() {
  const handleClick = () => {};

  return (
    <div className="flex flex-col  mt-auto mb-10 w-[50%] h-200  rounded-xl shadow-md">
      <h1 className="font-yekan font-bold text-center">سوالات متداول</h1>
      <section className="w-full flex flex-col">
        <FaqItem />
      </section>
    </div>
  );
}

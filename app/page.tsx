import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import GoldenChance from "./components/goldenChance/GoldenChance";

export default function Home() {
  return (
    <main className="flex flex-col w-full   items-center h-[150vh]">
      <Header />
      <GoldenChance/>
      <Footer/>
    </main>
  );
}


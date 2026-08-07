import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import GoldenChance from "./components/goldenChance/GoldenChance";
import Licenses from "./components/businessLicense/Licenses";
import Faq from "./components/FAQ/Faq";
import Main from "./components/MainIntroduction/Main";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center  h-fit
    ">
      <Header />
      <Main/>
      <Licenses />
      <Faq />
      <GoldenChance />
      <Footer />
    </main>
  );
}

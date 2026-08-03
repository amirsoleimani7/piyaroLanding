import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen items-center ">
      <Header />
      <Footer/>
    </main>
  );
}

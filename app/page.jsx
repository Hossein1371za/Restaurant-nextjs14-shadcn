import Menu from "@/components/Menu";
import Header from "../components/Header"
import Hero from "@/components/Hero";
import Reservation from "@/components/Reservation";
export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header/>
      <Hero/>
      <Menu/>
      <Reservation/>
      <div className="h-[4000px]"></div>
    </main>
  );
}

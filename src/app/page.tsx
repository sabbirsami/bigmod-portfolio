import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Partner from "@/components/home/Partner";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Service />
      <About />
      {/* <Partner /> */}
    </div>
  );
}

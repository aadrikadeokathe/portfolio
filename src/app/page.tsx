import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Hive from "@/components/Hive";
import Zepto from "@/components/Zepto";
import PitchOS from "@/components/PitchOS";
import SignLanguage from "@/components/SignLanguage";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import About from "@/components/About";
import WhatsNext from "@/components/WhatsNext";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Hive />
        <Zepto />
        <PitchOS />
        <SignLanguage />
        <Marquee />
        <Experience />
        <Leadership />
        <Skills />
        <About />
        <WhatsNext />
      </main>
      <Contact />
    </>
  );
}

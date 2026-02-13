import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      {/* Các phần tiếp theo như Skills, Projects sẽ nằm ở đây */}
    </div>
  );
}



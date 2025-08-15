import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects /> 
      <Education />
      <Footer />
    </div>
  );
}

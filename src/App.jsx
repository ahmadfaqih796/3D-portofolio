import About from "./components/layouts/About";
import Contact from "./components/layouts/Contact";
import Experience from "./components/layouts/Experience";
import Hero from "./components/layouts/Hero";
import Navbar from "./components/layouts/Navbar";
import Projects from "./components/layouts/Projects";

export default function App() {
  return (
    <div className="bg-green-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center py-6 bg-green-100 text-sm text-primary">
        © 2025 Ahmad Faqih Arifin. All rights reserved.
      </footer>
    </div>
  );
}

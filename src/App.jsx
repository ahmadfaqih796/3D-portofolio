import { useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "experience", "projects", "contact"];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  useEffect(() => {
    document.title = "Ahmad Faqih Arifin - Portfolio";
  }, []);

  return (
    <div className="bg-green-50 text-green-900 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-green-200 shadow z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between">
          <h1 className="font-bold text-lg">Ahmad Faqih</h1>
          <ul className="flex space-x-4">
            {sections.map((sec) => (
              <li
                key={sec}
                className="cursor-pointer hover:underline capitalize"
                onClick={() => scrollToSection(sec)}
              >
                {sec}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="h-screen flex items-center justify-center bg-green-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Ahmad Faqih Arifin</h2>
          <p className="text-lg">Fullstack Developer | React, Next.js, Feathers.js</p>
          <button
            onClick={() => scrollToSection("projects")}
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            View Projects
          </button>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p>
            I’m a passionate IT Programmer from Bekasi with experience at PT. DIKA as a Fullstack Developer. I'm focused on responsive web & mobile development using React, Next.js, Feathers.js, and more.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="min-h-screen bg-green-100 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <ul className="list-disc pl-6">
            <li>Fullstack Developer at PT. DIKA (Nov 2022 - Now)</li>
            <li>Worked with Next.js, Feathers.js for internal web applications</li>
            <li>Collaborated with IT team to solve technical problems</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-200 rounded shadow">
              <h4 className="font-bold">Website PPDB PAUDQ</h4>
              <p>Developed with CodeIgniter 4 for new student admission.</p>
              <a
                href="https://github.com/ahmadfaqih796/Website-PPDB-PAUDQ"
                target="_blank"
                className="text-green-700 underline"
              >
                View on GitHub
              </a>
            </div>
            <div className="p-4 bg-green-200 rounded shadow">
              <h4 className="font-bold">Android Employee Attendance App</h4>
              <p>Built using Java with Android Studio for Madrasah Aliyah Al-Wathonyah 5.</p>
              <a
                href="https://github.com/ahmadfaqih796/Aplikasi-Absensi-Karyawan"
                target="_blank"
                className="text-green-700 underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen bg-green-100 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>📍 Bekasi, West Java, Indonesia</p>
          <p>📱 +62 821 8277 1538</p>
          <p>📧 <a href="mailto:ahmadfaqih796@gmail.com" className="underline">ahmadfaqih796@gmail.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-green-200">
        <p>© 2025 Ahmad Faqih Arifin | <a href="https://github.com/ahmadfaqih796" target="_blank" className="underline">GitHub</a></p>
      </footer>
    </div>
  );
}
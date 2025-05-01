import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="bg-green-200">
      <section
        id="experience"
        className="py-20 px-6 max-w-5xl mx-auto"
      >
        <motion.h2
          className="text-3xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pengalaman Kerja
        </motion.h2>
        <motion.ul
          className="list-disc ml-6 space-y-2 text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <li>Freelance Web Developer (Jan 2022 - Sekarang) </li>
          <li>Fullstack Developer – PT. DIKA (Nov 2022 - Sekarang)</li>
        </motion.ul>
      </section>
    </div>
  );
}

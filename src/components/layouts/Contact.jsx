import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-green-200">
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Kontak
        </motion.h2>
        <motion.div
          className="text-gray-700 text-lg space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>📍 Bekasi, Jawa Barat</p>
          <p>📞 +62 821 8277 1538</p>
          <a
            href="https://github.com/ahmadfaqih796"
            className="text-secondary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: ahmadfaqih796
          </a>
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-br from-green-700 to-green-500 text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Ahmad Faqih Arifin
      </motion.h2>
      <motion.p
        className="text-lg max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Fullstack Developer – React | Next.js | Feathers.js <br /> Based in Bekasi, Indonesia
      </motion.p>
      <a
        href="#projects"
        className="mt-6 px-6 py-2 bg-white text-green-800 font-medium rounded-full hover:bg-green-100 transition"
      >
        Lihat Proyekku
      </a>
    </section>
  )
}

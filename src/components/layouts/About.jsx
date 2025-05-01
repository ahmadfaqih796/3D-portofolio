import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tentang Saya
      </motion.h2>
      <motion.p
        className="text-gray-700 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Saya adalah seorang IT Programmer dengan pengalaman praktis di PT. DIKA sebagai
        Fullstack Developer. Aktif mengembangkan aplikasi internal berbasis web menggunakan
        Next.js dan Feathers.js. Saya juga pernah membuat sistem pendaftaran siswa berbasis web
        dan aplikasi absensi berbasis Android.
      </motion.p>
    </section>
  )
}

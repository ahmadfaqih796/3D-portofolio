import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Website PPDB PAUDQ Al-Khaira',
    desc: 'Aplikasi pendaftaran siswa berbasis web menggunakan CodeIgniter 4 dan MVC.',
    link: 'https://github.com/ahmadfaqih796/Website-PPDB-PAUDQ',
  },
  {
    title: 'Aplikasi Absensi Android',
    desc: 'Aplikasi absensi karyawan berbasis Android menggunakan Java & Android Studio.',
    link: 'https://github.com/ahmadfaqih796/Aplikasi-Absensi-Karyawan',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Proyek
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm mb-2 text-gray-600">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline text-sm"
            >
              Lihat Repository
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

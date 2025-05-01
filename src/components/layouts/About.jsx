import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 px-6 bg-green-50">
      {/* Bubble*/}
      <div className="absolute w-40 h-40 bg-green-500 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-60 z-0" />
      {/* <div className="absolute w-32 h-32 bg-green-500 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 blur-xl opacity-70 z-0" /> */}

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Tentang Saya</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Saya adalah seorang IT Programmer dengan pengalaman praktis di PT. DIKA sebagai
          Fullstack Developer. Aktif mengembangkan aplikasi internal berbasis web menggunakan
          Next.js dan Feathers.js. Saya juga pernah membuat sistem pendaftaran siswa berbasis web
          dan aplikasi absensi berbasis Android.
        </p>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-0 bg-green-200">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.07C188.37 92.13 0 60 0 60v60h1200V0s-104.96 85.74-321.39 56.07z"
            className='bg-green-100 fill-green-50'
            // fill="#bbf7d0"
          />
        </svg>
      </div>
    </section>
  )
}

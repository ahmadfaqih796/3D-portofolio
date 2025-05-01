import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = ['hero', 'about', 'experience', 'projects', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-green-100 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Ahmad Faqih</h1>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-primary">
          {links.map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-secondary capitalize">
              {id}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl text-primary">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-green-50 border-t border-green-200 px-4 py-2">
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-primary hover:text-secondary capitalize"
            >
              {id}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

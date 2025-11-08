import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Education", "Experience", "Projects", "Contact"];

  return (
    <nav className="bg-gray-50 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl md:text-2xl font-bold text-gray-900">
          Shaheer Ali
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-purple-600 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-50 bg-opacity-95 flex flex-col items-center justify-center gap-6 z-40">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium text-gray-700 hover:text-purple-600 transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

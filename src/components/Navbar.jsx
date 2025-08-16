import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <nav className="bg-gray-50 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Name */}
        <div className="text-xl font-bold text-gray-900">Shaheer Ali</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-500 transition">{link}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 p-4 md:hidden bg-gray-50">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

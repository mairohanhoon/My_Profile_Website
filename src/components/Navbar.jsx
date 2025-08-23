import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger menu

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <h2 className="text-white text-xl font-bold">Portfolio</h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white text-lg font-bold hover:text-purple-400 transition-colors"
          >
            {link.name}
          </a>
        ))}

        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/15-mC43IeFO7kNpMVY7gmT66NJwKEDURiac9cNDi1EdA/edit?usp=sharing",
              "_blank"
            )
          }
          className="h-10 px-4 rounded-lg bg-purple-700 text-white text-sm font-bold hover:bg-purple-800 transition-colors"
        >
          Resume
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden shadow-lg z-99">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // close menu when clicked
              className="text-white text-lg font-bold hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/15-mC43IeFO7kNpMVY7gmT66NJwKEDURiac9cNDi1EdA/edit?usp=sharing",
                "_blank"
              )
            }
            className="h-10 px-4 rounded-lg bg-purple-700 text-white text-sm font-bold hover:bg-purple-800 transition-colors"
          >
            Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

export default function Navbar() {
  const menuItems = [
    { name: "Início", href: "#" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Trajetória", href: "#trajetoria" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <nav className="bg-slate-900/60 backdrop-blur-xl border border-white/5 px-6 py-2.5 rounded-full shadow-2xl">
        <ul className="flex gap-6 md:gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="text-xs md:text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <div className="w-[1px] h-4 bg-slate-800 hidden md:block"></div>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/SEU_USER" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0077b5] transition-colors text-xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:seuemail@exemplo.com" 
              className="text-slate-400 hover:text-blue-400 transition-colors text-xl"
              title="E-mail"
            >
              <FaEnvelope />
            </a>
          </div>
        </ul>
      </nav>
    </motion.header>
  );
}